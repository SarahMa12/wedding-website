import styles from "@/styles/RSVP.module.css";

export default function RSVP() {
        const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = {
            mealPref: formData.get("meal-pref"),
            changedAddress: formData.get("address"),
            allergies: formData.get("allergies"),
            transportation: formData.get("transportation"),
            childCare: formData.get("children"),
            yourName: formData.get("yourName"),
            guestName: formData.get("guestName"),
            brunchFarewell: formData.get("brunchFarewell"),
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
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error("Error submitting RSVP:", err);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="body-container">
            <div className="title">RSVP</div>
            <form className={styles.rsvpForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <div className={styles.sectionHeader}>Guest Information</div>
                    <div className={styles.formQuestion}>
                        <label htmlFor="yourName">Your Name:</label>
                        <input type="text" id="yourName" name="yourName" placeholder="Enter your full name" required />
                    </div>
                    <div className={styles.formQuestion}>
                        <label htmlFor="guestName">Guest Name:</label>
                        <input type="text" id="guestName" name="guestName" placeholder="Enter guest full name" />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.sectionHeader}>Wedding Day</div>
                    <div className={styles.formQuestion}>
                        <label htmlFor="meal-pref">What's your meal preference?</label>
                        <select id="meal-pref" name="meal-pref" defaultValue="" required>
                            <option value="" disabled>-- Select an option --</option>                        
                            <option value="chicken">Spinach Ricotta Stuffed Chicken Breast (GF)</option>
                            <option value="salmon">Pistachio Crusted Salmon (GF)</option>
                            <option value="beef">Beef Wellington</option>
                            <option value="eggplant">Eggplant Parmesan (GF, VGN)</option>
                        </select>
                    </div>

                    <div className={styles.formQuestion}>
                        <label htmlFor="allergies">Do you have any dietary restrictons or allergies? If yes, please describe.</label>
                        <textarea id="allergies" name="allergies" />
                    </div>

                    <div className={styles.formQuestion}>
                        <label htmlFor="transporation">Will you need transporation to our Wedding Day?</label>
                        <label>
                            <input type="radio" name="transportation" value="yes" required /> Yes
                        </label>
                        <label>
                            <input type="radio" name="transportation" value="no" /> No
                        </label>
                    </div>

                    <div className={styles.formQuestion}>
                        <label htmlFor="children">As our wedding will be an adult-only event, do you have child care secured?</label>
                        <label>
                            <input type="radio" name="children" value="yes" required /> Yes
                        </label>
                        <label>
                            <input type="radio" name="children" value="no" /> No
                        </label>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.sectionHeader}>Brunch Farewell</div>
                    <div className={styles.formQuestion}>
                        <label htmlFor="brunchFarewell">Will you be attending the Brunch Farewell?</label>
                        <label>
                            <input type="radio" name="brunchFarewell" value="yes" required /> Yes
                        </label>
                        <label>
                            <input type="radio" name="brunchFarewell" value="no" /> No
                        </label>
                    </div>
                </div>
                
                <div className={styles.formGroup}>
                    <div className={styles.sectionHeader}>Housekeeping</div>
                    <div className={styles.formQuestion}>
                        <label htmlFor="address">Please let us know if your address changed.</label>
                        <input type="text" id="address" name="address" placeholder="Enter your current address" />
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}