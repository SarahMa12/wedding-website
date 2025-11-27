import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/FAQ.module.css";

const faqs = [
    {
        question: "Can I bring a guest / date?",
        answer: "If you received a plus one, your guest's name is listed on your invitation and will need to be entered when you RSVP. We would love to keep the wedding as an intimate event with family and close friends. Thank you for understanding!",
    },
    {
        question: "Are kids invited?",
        answer: "We love your little ones! However, this is an adult only event. We encourage you to use this evening as a date night!",
    },
    {
        question: "Can we sit anywhere at the reception?",
        answer: "We have assigned seats for each of you. It took us a lot of effort and discussion to finalize the seating arrangement which is meant for everyone's convenience and group familiarity, so no need to worry. Our coordinator will gladly assist you in finding your designated seats.",
    },
    {
        question: "What if I did not RSVP but will attend the wedding?",
        answer: "No RSVP = No Seat. We will assign your seats so we strongly suggest you do the RSVP on or before July 15, 2026 or you may contact and inform us ahead of time. In any case that you may have said 'Yes' in our RSVP and suddenly won't be able to attend, please let us know ASAP so we can accomodate any changes.",
    },
    {
        question: "When should we arrive at the venue?",
        answer: "The ceremony will strictly start at 5:00 PM. Please arrive to the venue by 4:30 to enjoy pre-ceremony welcome drinks and mingle.",
    },
    {
        question: "When can we leave?",
        answer: "The program is estimated to last until 10:00 PM. We are hoping that you will stay with us until the end of the program.",
    },
    {
        question: "Is there a dress code?",
        answer: "Dress to impress! Our wedding is formal, so feel free to wear your best outfit and be prepared to celebrate with us. Plan for floor-length elegance, elevated eveningwear, and classic suits or tuxes; kindly avoid cocktail dresses or casual outfits. As it’s an outdoor celebration, a light shawl or cardigan is recommended for the evening breeze.",
    },
    {
        question: "Where should I stay?",
        answer: 'Check out the "Travel" page on our site for more information on hotels in the area.',
    },
];

export default function FAQ() {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleFAQ = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };

    return (
        <div className={styles.faqPage}>
            <div className={styles.heroWrapper}>
                
                {/* Background Image */}
                <div className={styles.heroImage}>
                    <Image
                        src="/images/faq.jpg"  // <-- same one as RSVP/Registry
                        alt="FAQ Background"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>

                {/* Foreground Card */}
                <div className={styles.heroCard}>
                    <h1 className={styles.pageTitle}>FAQ</h1>
                    <p className={styles.pageSubheading}>
                        Common questions to help you prepare for our wedding weekend.
                    </p>

                    <button
                        className={styles.resetButton}
                        onClick={() => {
                            localStorage.removeItem("wedding_pw_ok");
                            window.location.reload();
                        }}
                    >
                        Reset Password Lock
                    </button>

                    <div className={styles.faq}>
                        {faqs.map((faq, index) => (
                            <div className={styles.card} key={index}>
                                <div
                                    className={styles.question}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {faq.question}
                                </div>

                                {openIndexes.includes(index) && (
                                    <div className={styles.answer}>{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
