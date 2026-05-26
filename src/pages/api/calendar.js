export default function handler(req, res) {
  const { welcome, wedding, tea, rehearsal, farewell } = req.query;

  const events = [];

  if (rehearsal === "yes") {
    events.push({
      summary: "Rehearsal Dinner - Syrena & George",
      start: "20260911T230000Z",
      end: "20260911T230000Z",
      location: "2551 Mount Pleasant Rd, San Jose, CA 95148",
      description: "Rehearsal Dinner at backyard."
    });
  }

  if (welcome === "yes") {
    events.push({
      summary: "Welcome Party - Syrena & George",
      start: "20260912T030000Z",
      end: "20260912T030000Z",
      location: "Meso Modern Mediterranean, 3060 Olsen Dr #50, San Jose, CA 95128",
      description: "Guest arrival at 8:00 PM."
    });
  }

  if (tea === "yes") {
    events.push({
      summary: "Tea Ceremony - Syrena & George",
      start: "20260912T170000Z",
      end: "20260912T170000Z",
      location: "2551 Mount Pleasant Rd, San Jose, CA 95148",
      description: "Tea Ceremony at backyard."
    });
  }

  if (wedding === "yes") {
    events.push({
      summary: "The Wedding - Syrena & George",
      start: "20260912T233000Z",
      end: "20260912T233000Z",
      location: "2551 Mount Pleasant Rd, San Jose, CA 95148",
      description: "Guest arrival at 4:30 PM. Ceremony starts at 5:00 PM."
    });
  }

  if (farewell === "yes") {
    events.push({
      summary: "Farewell Splash - Syrena & George",
      start: "20260913T183000Z",
      end: "20260913T183000Z",
      location: "3267 Knightswood Way, San Jose CA 95148",
      description: "Brunch and poolside celebration."
    });
  }

  let icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Syrena and George//Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH"
  ].join("\r\n") + "\r\n";

  events.forEach((event, i) => {
    icsContent += [
      "BEGIN:VEVENT",
      `UID:wedding-event-${i}@syrenaandgeorge.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
      `DTSTART:${event.start}`,
      `DTEND:${event.end}`,
      `SUMMARY:${event.summary}`,
      `LOCATION:${event.location}`,
      `DESCRIPTION:${event.description}`,
      "END:VEVENT"
    ].join("\r\n") + "\r\n";
  });

  icsContent += "END:VCALENDAR";

  res.setHeader("Content-Type", "text/calendar; charset=utf-8");
  res.setHeader("Content-Disposition", 'attachment; filename="wedding-events.ics"');
  return res.status(200).send(icsContent);
}
