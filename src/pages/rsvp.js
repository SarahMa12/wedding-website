import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/RSVP.module.css";

export default function RSVP() {
  const [attending, setAttending] = useState(null);
  const [guestsCount, setGuestsCount] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const attendingValue = formData.get("attending");
    const count =
      attendingValue === "yes"
        ? Number(formData.get("guestsCount") || 0)
        : 0;

    const guests = [];
    for (let i = 0; i < count; i++) {
      guests.push({
        name: formData.get(`guestName_${i}`),
        mealPref: formData.get(`mealPref_${i}`),
      });
    }

    // 👉 Primary guest = Guest 1
    const primaryGuestName = guests[0]?.name || "";

    const data = {
      attending: attendingValue,
      yourName: primaryGuestName,          // now taken from Guest 1
      guestsCount: count,
      guests,
      allergies: formData.get("allergies"),
      transportation: formData.get("transportation"),
      childCare: formData.get("children"),
      brunchFarewell: formData.get("brunchFarewell"),
      changedAddress: formData.get("address"),
    };

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("RSVP submitted successfully! Thank you ❤️");
        e.target.reset();
        setAttending(null);
        setGuestsCount(1);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting RSVP:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const FORM_VISIBLE = false;

  return (
    <div className={styles.rsvpPage}>
      <div className={styles.heroWrapper}>
        {/* Background image */}
        <div className={styles.heroImage}>
          <Image
            src="/images/rsvp.jpg"
            alt="Syrena & George"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </div>

        {/* Foreground card */}
        <div className={styles.heroCard}>
          <h1 className={styles.pageTitle}>RSVP</h1>
          <p className={styles.pageSubheading}>Formal invitation to follow.</p>

          {FORM_VISIBLE && (
            <form className={styles.rsvpForm} onSubmit={handleSubmit}>
              {/* Attendance */}
              <div className={styles.formGroup}>
                <div className={styles.sectionHeader}>Attendance</div>
                <div className={styles.formQuestion}>
                  <label>Will you be attending our wedding?</label>
                  <label>
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      required
                      onChange={() => {
                        setAttending("yes");
                        setGuestsCount(1);
                      }}
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      onChange={() => {
                        setAttending("no");
                        setGuestsCount(0);
                      }}
                    />{" "}
                    No
                  </label>
                </div>
              </div>

              {attending === "yes" && (
                <>
                  {/* Guest Information */}
                  <div className={styles.formGroup}>
                    <div className={styles.sectionHeader}>Guest Information</div>

                    <div className={styles.formQuestion}>
                      <label htmlFor="guestsCount">
                        How many guests (including you) will be attending?
                      </label>
                      <select
                        id="guestsCount"
                        name="guestsCount"
                        value={guestsCount}
                        onChange={(e) =>
                          setGuestsCount(Number(e.target.value))
                        }
                        required
                      >
                        <option value="" disabled>
                          -- Select number of guests --
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                      <p className={styles.helperText}>
                        The maximum number of guests for your household is listed
                        on your wedding invitation.
                      </p>
                    </div>

                    {/* Dynamic guest list */}
                    <div className={styles.guestList}>
                      {Array.from({ length: guestsCount }).map((_, i) => (
                        <div className={styles.guestRow} key={i}>
                          <div className={styles.guestRowHeader}>
                            Guest {i + 1}
                          </div>
                          <div className={styles.twoColumnRow}>
                            <div className={styles.formQuestion}>
                              <label htmlFor={`guestName_${i}`}>
                                Guest {i + 1} Name
                              </label>
                              <input
                                type="text"
                                id={`guestName_${i}`}
                                name={`guestName_${i}`}
                                placeholder={
                                  i === 0
                                    ? "Primary guest name"
                                    : "Enter guest full name"
                                }
                                required
                              />
                            </div>
                            <div className={styles.formQuestion}>
                              <label htmlFor={`mealPref_${i}`}>
                                Meal Preference
                              </label>
                              <select
                                id={`mealPref_${i}`}
                                name={`mealPref_${i}`}
                                defaultValue=""
                                required
                              >
                                <option value="" disabled>
                                  -- Select a meal --
                                </option>
                                <option value="chicken">
                                  Spinach Ricotta Stuffed Chicken Breast (GF)
                                </option>
                                <option value="salmon">
                                  Pistachio Crusted Salmon (GF)
                                </option>
                                <option value="beef">Beef Wellington</option>
                                <option value="eggplant">
                                  Eggplant Parmesan (GF, VGN)
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Wedding Day */}
                  <div className={styles.formGroup}>
                    <div className={styles.sectionHeader}>Wedding Day</div>

                    <div className={styles.formQuestion}>
                      <label htmlFor="allergies">
                        Do you or anyone in your party have any dietary
                        restrictions or allergies? If yes, please describe.
                      </label>
                      <textarea id="allergies" name="allergies" />
                    </div>

                    <div className={styles.formQuestion}>
                      <label>Will you need transportation to our Wedding Day?</label>
                      <label>
                        <input
                          type="radio"
                          name="transportation"
                          value="yes"
                          required
                        />{" "}
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="transportation"
                          value="no"
                        />{" "}
                        No
                      </label>
                    </div>

                    <div className={styles.formQuestion}>
                      <label>
                        As our wedding will be an adult-only event, do you have
                        child care secured?
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="children"
                          value="yes"
                          required
                        />{" "}
                        Yes
                      </label>
                      <label>
                        <input type="radio" name="children" value="no" /> No
                      </label>
                    </div>
                  </div>

                  {/* Brunch Farewell */}
                  <div className={styles.formGroup}>
                    <div className={styles.sectionHeader}>Brunch Farewell</div>
                    <div className={styles.formQuestion}>
                      <label>Will you be attending the Brunch Farewell?</label>
                      <label>
                        <input
                          type="radio"
                          name="brunchFarewell"
                          value="yes"
                          required
                        />{" "}
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="brunchFarewell"
                          value="no"
                        />{" "}
                        No
                      </label>
                    </div>
                  </div>

                  {/* Address */}
                  <div className={styles.formGroup}>
                    <div className={styles.sectionHeader}>Housekeeping</div>
                    <div className={styles.formQuestion}>
                      <label htmlFor="address">
                        Please let us know if your home address has changed.
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Enter your current address"
                      />
                    </div>
                  </div>
                </>
              )}

              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
