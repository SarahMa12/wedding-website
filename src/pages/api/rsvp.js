import { db } from "@/lib/firebase";
import { collection, addDoc, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      
      // 1. Save to Firebase rsvps collection
      await addDoc(collection(db, "rsvps"), data);

      // 2. Mark invitee group as having RSVP'd
      const inviteesRef = collection(db, "invitees");
      const q = query(inviteesRef, where("invitationName", "==", data.invitationName));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const inviteeDoc = querySnapshot.docs[0];
        await updateDoc(doc(db, "invitees", inviteeDoc.id), {
          hasRSVPd: true
        });
      }

      // 3. Send Confirmation Email if anyone is attending
      const attendees = data.guests.filter(g => g.attending === "yes");
      
      if (attendees.length > 0 && data.email) {
        // Full event details with attire and addresses
        const eventInfo = {
          rehearsal: {
            name: "Rehearsal Dinner",
            date: "Friday, September 11, 2026",
            time: "6:00 PM",
            isoDate: "2026-09-11T18:00:00-07:00",
            address: "3060 Olsen Dr #50, San Jose, CA 95128",
            attire: "Cocktail",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Meso+Modern+Mediterranean+San+Jose",
            calUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Rehearsal+Dinner+-+Syrena+%26+George+Wedding&dates=20260912T010000Z/20260912T010000Z&details=Rehearsal+Dinner+at+Meso.&location=3060+Olsen+Dr+%2350%2C+San+Jose%2C+CA+95128"
          },
          welcome: {
            name: "Welcome Party",
            date: "Friday, September 11, 2026",
            time: "8:00 PM",
            isoDate: "2026-09-11T20:00:00-07:00",
            address: "3060 Olsen Dr #50, San Jose, CA 95128",
            attire: "Cocktail",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Meso+Modern+Mediterranean+San+Jose",
            calUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Welcome+Party+-+Syrena+%26+George+Wedding&dates=20260912T030000Z/20260912T030000Z&details=Guest+arrival+at+8%3A00+PM.&location=Meso+Modern+Mediterranean%2C+3060+Olsen+Dr+%2350%2C+San+Jose%2C+CA+95128"
          },
          tea: {
            name: "Tea Ceremony",
            date: "Saturday, September 12, 2026",
            time: "1:30 PM",
            isoDate: "2026-09-12T13:30:00-07:00",
            address: "3311 Arqueado Drive, San Jose, CA 95148",
            attire: "Traditional or Black-tie optional",
            mapUrl: "https://www.google.com/maps/place/3311+Arqueado+Dr,+San+Jose,+CA+95148",
            calUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Tea+Ceremony+-+Syrena+%26+George+Wedding&dates=20260912T203000Z/20260912T203000Z&details=Tea+Ceremony+at+backyard.&location=3311+Arqueado+Drive%2C+San+Jose%2C+CA+95148"
          },
          wedding: {
            name: "The Wedding",
            date: "Saturday, September 12, 2026",
            time: "4:30 PM",
            isoDate: "2026-09-12T16:30:00-07:00",
            address: "2551 Mount Pleasant Rd, San Jose, CA 95148",
            attire: "Black-tie optional",
            mapUrl: "https://www.google.com/maps/place/2551+Mt+Pleasant+Rd,+San+Jose,+CA+95148",
            calUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+-+Syrena+%26+George&dates=20260912T233000Z/20260912T233000Z&details=Guest+arrival+at+4%3A30+PM.+Ceremony+starts+at+5%3A00+PM.&location=2551+Mount+Pleasant+Rd%2C+San+Jose%2C+CA+95148"
          },
          farewell: {
            name: "Farewell Splash",
            date: "Sunday, September 13, 2026",
            time: "11:30 AM",
            isoDate: "2026-09-13T11:30:00-07:00",
            address: "3267 Knightswood Way, San Jose, CA 95148",
            attire: "Casual",
            mapUrl: "https://www.google.com/maps/place/3267+Knightswood+Way,+San+Jose,+CA+95148",
            calUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Farewell+Splash+%26+Brunch+-+Syrena+%26+George+Wedding&dates=20260913T183000Z/20260913T183000Z&details=Brunch+and+poolside+celebration.&location=3267+Knightswood+Way%2C+San+Jose+CA+95148"
          }
        };

        const attendingEventsList = [];
        if (data.rehearsalDinner === "yes") attendingEventsList.push(eventInfo.rehearsal);
        if (data.welcomeParty === "yes") attendingEventsList.push(eventInfo.welcome);
        if (data.teaCeremony === "yes") attendingEventsList.push(eventInfo.tea);
        attendingEventsList.push(eventInfo.wedding); // Always included if attending
        if (data.brunchFarewell === "yes") attendingEventsList.push(eventInfo.farewell);

        // Generate JSON-LD for Apple/Google event detection banner
        const jsonLd = attendingEventsList.map(event => ({
          "@context": "http://schema.org",
          "@type": "Event",
          "name": event.name + " - Syrena & George",
          "startDate": event.isoDate,
          "location": {
            "@type": "Place",
            "name": event.address,
            "address": event.address
          },
          "description": `Attire: ${event.attire}`
        }));

        // Extract and capitalize first name
        const rawName = data.submitterName || data.invitationName.split(/[\s,]+/)[0];
        const firstName = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase().split(' ')[0];

        const emailHtml = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; font-size: 18px; line-height: 1.6;">
            <script type="application/ld+json">
              ${JSON.stringify(jsonLd)}
            </script>
            
            <p>Hello ${firstName},</p>
            <p>We’re so excited you’ll be joining us! Save the date and we’ll see you in September.</p>
            
            <p style="margin-bottom: 10px;">With love,<br/>Syrena and George</p>
            <a href="https://syrenaandgeorge.com" style="display: inline-block; color: #c7a96e; text-decoration: underline; margin-bottom: 20px; font-size: 15px;">
              syrenaandgeorge.com
            </a>

            <div style="border-top: 1px solid #eee; padding-top: 25px; margin-top: 20px;">
              <p style="font-size: 16px; font-weight: bold; color: #c7a96e; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">Events You're Attending</p>
              
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                ${attendingEventsList.map(event => `
                  <tr>
                    <td width="50%" valign="top" style="padding-bottom: 25px; padding-right: 15px;">
                      <div style="font-weight: bold; font-size: 16px; line-height: 1.4;">
                        <a href="${event.calUrl}" target="_blank" style="color: #c7a96e; text-decoration: underline;">
                          ${event.date}
                        </a><br/>
                        <span style="font-size: 14px; font-weight: normal; color: #333;">at ${event.time}</span>
                      </div>
                    </td>
                    <td width="50%" valign="top" style="padding-bottom: 25px;">
                      <div style="font-weight: bold; font-size: 16px; margin-bottom: 4px;">${event.name}</div>
                      <div style="font-size: 14px; color: #555; margin-bottom: 4px;">
                        <a href="${event.mapUrl}" target="_blank" style="color: #555; text-decoration: underline;">
                          ${event.address}
                        </a>
                      </div>
                      <div style="font-size: 13px; color: #888; font-style: italic;">Attire: ${event.attire}</div>
                    </td>
                  </tr>
                `).join("")}
              </table>
            </div>

            <div style="margin-top: 20px; padding: 15px; background: #faf7f0; border-radius: 8px; font-size: 15px;">
              <h4 style="margin-top: 0; color: #c7a96e; font-size: 16px; text-transform: uppercase;">RSVP Summary</h4>
              <ul style="padding-left: 20px; margin-bottom: 0;">
                ${data.guests.map(g => `
                  <li>
                    <strong>${g.name}</strong>: ${g.attending === "yes" ? `Attending (${g.mealPref}) ${g.dietary ? `- ${g.dietary}` : ""}` : "Not Attending"}
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>
        `;

        await resend.emails.send({
          from: "Syrena & George <hello@syrenaandgeorge.com>",
          to: data.email,
          subject: "You’re on the list — Syrena & George, September 12",
          html: emailHtml,
        });
      }

      return res.status(200).json({ message: "RSVP saved and email sent!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to process RSVP" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
