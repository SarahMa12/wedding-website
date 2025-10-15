import styles from "@/styles/FAQ.module.css";

export default function FAQ() {
    return (
        <div class="body-container">
            <div class="title">FAQ</div>
            <div className={styles.faq}>
                <div className={styles.card}>
                    <div className={styles.question}>Can I bring a guest / date?</div>
                    <div className={styles.answer}>If you received a plus one, your guest's name is listed on your invitation and will appear under your name when you RSVP. Otherwise, we would love to keep the wedding as an intimate event with family and close friends. Thank you for understanding!</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.question}>Are kids invited?</div>
                    <div className={styles.answer}>We love your little ones! However, this is an adult only event. We encourage you to use this evening as a date night!</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.question}>Can we sit anywhere at the reception?</div>
                    <div className={styles.answer}>We have assigned seats for each of you. It took us a lot of effort and discussion to finalize the seating arrangement which is meant for everyone's convenience and group familiarity, so no need to worry. Our coordinator will gladly assist you in finding your designated seats.</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.question}>What if I did not RSVP but will attend the wedding?</div>
                    <div className={styles.answer}>No RSVP = No Seat. We will assign your seats so we strongly suggest you do the RSVP on or before <b>August 1, 2026</b> or you may contact and inform us ahead of time. In any case that you may have said Yes in our RSVP and suddenly won't be able to attend, please let us know ASAP so we can accomodate any changes.</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.question}>When should we arrive at the venue?</div>
                    <div className={styles.answer}>The ceremony will strictly start at 5:00 PM. Please arrive to the venue at 4:00 PM to valet and find your seat.</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.question}>When can we leave?</div>
                    <div className={styles.answer}>The program is estimated to last until 10:00 PM. We are hoping that you will stay with us until the end of the program. Should you wish to leave early, we'd love to personally thank you and say goodbye before you go.</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.question}>Is there a dress code?</div>
                    <div className={styles.answer}>Dress to impress! Our wedding is formal, so feel free to wear your best outfit and be prepared to celebrate with us.</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.question}>Where should I stay?</div>
                    <div className={styles.answer}>Check out the "Travel" page on our site for more information on hotels in the area.</div>
                </div>
            </div>
        </div>
    );
}