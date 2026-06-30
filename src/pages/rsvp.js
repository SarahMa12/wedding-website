import { useState } from "react";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import styles from "@/styles/RSVP.module.css";

export default function RSVP() {
  const [step, setStep] = useState("lookup"); // "lookup", "form", or "success"
  const [searchName, setSearchName] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [inviteeData, setInviteeData] = useState(null);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [lastAnyoneAttending, setLastAnyoneAttending] = useState(false);

  // New state to track responses for each guest in the party
  const [guestResponses, setGuestResponses] = useState({});

  const handleLookup = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    setError("");

    try {
      const q = query(
        collection(db, "invitees"),
        where("searchNames", "array-contains", searchName.toLowerCase().trim())
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const data = querySnapshot.docs[0].data();
        if (data.hasRSVPd) {
          setError("A response has already been submitted for this invitation. Please contact Syrena & George if you need to make changes.");
          return;
        }
        setInviteeData(data);
        
        // Initialize guestResponses with default values for each member
        const initialResponses = {};
        data.partyMembers.forEach(member => {
          initialResponses[member] = {
            attending: null,
            mealPref: "",
            dietary: "",
            welcomeParty: null,
            brunchFarewell: null,
            teaCeremony: null,
            rehearsalDinner: null
          };
        });
        setGuestResponses(initialResponses);
        setStep("form");
      } else {
        setError(
          "We couldn't find your invitation. Please check your spelling or contact Syrena & George."
        );
      }
    } catch (err) {
      console.error("Error looking up invitation:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const updateGuestResponse = (member, field, value) => {
    setGuestResponses(prev => ({
      ...prev,
      [member]: {
        ...prev[member],
        [field]: value
      }
    }));
  };

  const handleBack = () => {
    setStep("lookup");
    setInviteeData(null);
    setGuestResponses({});
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const formData = new FormData(e.target);
    
    // Check if at least one person is attending
    const anyoneAttending = Object.values(guestResponses).some(r => r.attending === "yes");

    const data = {
      invitationName: inviteeData.invitationName,
      submitterName: searchName, // Pass the name used for lookup
      guests: Object.entries(guestResponses).map(([name, resp]) => {
        const guest = {
          name,
          attending: resp.attending,
          mealPref: resp.attending === "yes" ? resp.mealPref : null,
          dietary: resp.attending === "yes" ? resp.dietary : null,
        };
        if (resp.attending === "yes") {
          guest.welcomeParty = resp.welcomeParty || "no";
          guest.brunchFarewell = resp.brunchFarewell || "no";
          if (inviteeData.teaCeremony) guest.teaCeremony = resp.teaCeremony || "no";
          if (inviteeData.rehearsalDinner) guest.rehearsalDinner = resp.rehearsalDinner || "no";
        }
        return guest;
      }),
      childCare: anyoneAttending && (formData.get("children") === "on") ? "acknowledged" : "no",
      email: formData.get("email"),
    };

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmittedEmail(data.email || "");
        setLastAnyoneAttending(anyoneAttending);
        setStep("success");
        setIsSubmitting(false);
      } else {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error("Error submitting RSVP:", err);
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  // Check if at least one person in the party is attending
  const anyoneAttending = Object.values(guestResponses).some(r => r.attending === "yes");


  return (
    <div className={styles.rsvpPage}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroCard}>
          {/* Top Image */}
          <div className={styles.cardImage}>
            <Image
              src="/images/rsvp.jpg"
              alt="Wedding"
              width={800}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              priority
            />
          </div>

          <div className={styles.cardContent}>
            <h1 className={styles.pageTitle}>RSVP</h1>

            {step === "lookup" ? (
              <form className={styles.rsvpForm} onSubmit={handleLookup}>
                <div className={styles.formGroup}>
                  <div className={styles.formQuestion}>
                    <label htmlFor="searchName">Enter Your Full Name on the Invitation</label>
                    <input
                      type="text"
                      id="searchName"
                      placeholder="e.g. Syrena Bui"
                      value={searchName}
                      onChange={(e) => setSearchName(e.target.value)}
                      required
                    />
                    {error && <p className={styles.errorText}>{error}</p>}
                  </div>
                </div>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSearching}
                >
                  {isSearching ? "Searching..." : "Find Invitation"}
                </button>
              </form>
            ) : step === "form" ? (
              <form className={styles.rsvpForm} onSubmit={handleSubmit}>
                <button 
                  type="button" 
                  className={styles.backButton} 
                  onClick={handleBack}
                >
                  ← Back to Search
                </button>

                <div className={styles.formGroup}>
                  <div className={styles.sectionHeader}>Guest Information</div>
                  <div className={styles.guestList}>
                    {inviteeData.partyMembers.map((member, i) => (
                      <div className={styles.guestRow} key={member}>
                        <div className={styles.guestRowHeader}>{member}</div>
                        
                        <div className={styles.formQuestion}>
                          <label>Will you be attending?</label>
                          <div className={styles.radioGroup}>
                            <label className={styles.radioLabel}>
                              <input
                                type="radio"
                                name={`attending_${i}`}
                                value="yes"
                                required
                                checked={guestResponses[member]?.attending === "yes"}
                                onChange={() => updateGuestResponse(member, "attending", "yes")}
                              />{" "}
                              Yes
                            </label>
                            <label className={styles.radioLabel}>
                              <input
                                type="radio"
                                name={`attending_${i}`}
                                value="no"
                                checked={guestResponses[member]?.attending === "no"}
                                onChange={() => updateGuestResponse(member, "attending", "no")}
                              />{" "}
                              No
                            </label>
                          </div>
                        </div>

                        {guestResponses[member]?.attending === "yes" && (
                          <>
                            <div className={styles.formQuestion}>
                              <label htmlFor={`mealPref_${i}`}>Meal Preference</label>
                              <select
                                id={`mealPref_${i}`}
                                name={`mealPref_${i}`}
                                value={guestResponses[member]?.mealPref}
                                onChange={(e) => updateGuestResponse(member, "mealPref", e.target.value)}
                                required
                              >
                                <option value="" disabled>-- Select a meal --</option>
                                <option value="chicken">Spinach Ricotta Stuffed Chicken Breast (GF)</option>
                                <option value="salmon">Pistachio Crusted Salmon (GF)</option>
                                <option value="beef">Beef Wellington</option>
                                <option value="eggplant">Eggplant Parmesan (GF, VGN)</option>
                              </select>
                            </div>
                            <div className={styles.formQuestion}>
                              <label htmlFor={`dietary_${i}`}>Dietary Restrictions</label>
                              <textarea
                                id={`dietary_${i}`}
                                name={`dietary_${i}`}
                                placeholder="e.g. Nut allergy, Gluten-free, etc."
                                value={guestResponses[member]?.dietary}
                                onChange={(e) => updateGuestResponse(member, "dietary", e.target.value)}
                                rows={2}
                              />
                            </div>

                            {inviteeData?.rehearsalDinner && (
                              <div className={styles.formQuestion}>
                                <label>Rehearsal Dinner <span className={styles.inviteOnlyNote}>(Invite Only)</span></label>
                                <div className={styles.radioGroup}>
                                  <label className={styles.radioLabel}>
                                    <input
                                      type="radio"
                                      name={`rehearsalDinner_${i}`}
                                      value="yes"
                                      required
                                      checked={guestResponses[member]?.rehearsalDinner === "yes"}
                                      onChange={() => updateGuestResponse(member, "rehearsalDinner", "yes")}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className={styles.radioLabel}>
                                    <input
                                      type="radio"
                                      name={`rehearsalDinner_${i}`}
                                      value="no"
                                      checked={guestResponses[member]?.rehearsalDinner === "no"}
                                      onChange={() => updateGuestResponse(member, "rehearsalDinner", "no")}
                                    />{" "}
                                    No
                                  </label>
                                </div>
                              </div>
                            )}

                            <div className={styles.formQuestion}>
                              <label>Welcome Party (Fri Sep 11, 8 PM)</label>
                              <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                  <input
                                    type="radio"
                                    name={`welcomeParty_${i}`}
                                    value="yes"
                                    required
                                    checked={guestResponses[member]?.welcomeParty === "yes"}
                                    onChange={() => updateGuestResponse(member, "welcomeParty", "yes")}
                                  />{" "}
                                  Yes
                                </label>
                                <label className={styles.radioLabel}>
                                  <input
                                    type="radio"
                                    name={`welcomeParty_${i}`}
                                    value="no"
                                    checked={guestResponses[member]?.welcomeParty === "no"}
                                    onChange={() => updateGuestResponse(member, "welcomeParty", "no")}
                                  />{" "}
                                  No
                                </label>
                              </div>
                            </div>

                            {inviteeData?.teaCeremony && (
                              <div className={styles.formQuestion}>
                                <label>Tea Ceremony <span className={styles.inviteOnlyNote}>(Invite Only)</span></label>
                                <div className={styles.radioGroup}>
                                  <label className={styles.radioLabel}>
                                    <input
                                      type="radio"
                                      name={`teaCeremony_${i}`}
                                      value="yes"
                                      required
                                      checked={guestResponses[member]?.teaCeremony === "yes"}
                                      onChange={() => updateGuestResponse(member, "teaCeremony", "yes")}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className={styles.radioLabel}>
                                    <input
                                      type="radio"
                                      name={`teaCeremony_${i}`}
                                      value="no"
                                      checked={guestResponses[member]?.teaCeremony === "no"}
                                      onChange={() => updateGuestResponse(member, "teaCeremony", "no")}
                                    />{" "}
                                    No
                                  </label>
                                </div>
                              </div>
                            )}

                            <div className={styles.formQuestion}>
                              <label>Farewell Splash (Sun Sep 13, 11:30 AM)</label>
                              <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                  <input
                                    type="radio"
                                    name={`brunchFarewell_${i}`}
                                    value="yes"
                                    required
                                    checked={guestResponses[member]?.brunchFarewell === "yes"}
                                    onChange={() => updateGuestResponse(member, "brunchFarewell", "yes")}
                                  />{" "}
                                  Yes
                                </label>
                                <label className={styles.radioLabel}>
                                  <input
                                    type="radio"
                                    name={`brunchFarewell_${i}`}
                                    value="no"
                                    checked={guestResponses[member]?.brunchFarewell === "no"}
                                    onChange={() => updateGuestResponse(member, "brunchFarewell", "no")}
                                  />{" "}
                                  No
                                </label>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {anyoneAttending && (
                  <div className={styles.formGroup}>
                    <div className={styles.sectionHeader}>Wedding Day</div>
                    <div className={`${styles.formQuestion} ${styles.checkboxQuestion}`}>
                      <label className={styles.radioLabel}>
                        <input type="checkbox" name="children" required />
                        This is an adult only celebration (18+). I acknowledge
                        and will arrange childcare if needed.
                      </label>
                    </div>
                  </div>
                )}

                {anyoneAttending && (
                  <div className={styles.formGroup}>
                    <div className={styles.formQuestion}>
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" placeholder="For confirmation" required />
                    </div>
                  </div>
                )}

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            ) : (
              <div className={styles.successMessage}>
                {lastAnyoneAttending ? (
                  <>
                    <h2>You&apos;re on the list!</h2>
                    <p>We can&apos;t wait to celebrate with you.</p>
                    {submittedEmail && (
                      <p className={styles.emailNote}>
                        Confirmation sent to <strong>{submittedEmail}</strong>
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <h2>We&apos;ll miss you!</h2>
                    <p>Wishing you all the love from afar.</p>
                  </>
                )}
                <button 
                  className={styles.submitButton} 
                  onClick={() => {
                    setStep("lookup");
                    setSearchName("");
                    setInviteeData(null);
                    setGuestResponses({});
                  }}
                  style={{ marginTop: '2rem' }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
