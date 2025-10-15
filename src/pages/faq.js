import { useState } from "react";
import styles from "@/styles/FAQ.module.css";

const faqs = [
    {
        question: "Can I bring a guest / date?",
        answer: "If you received a plus one, your guest's name is listed on your invitation and will appear under your name when you RSVP. Otherwise, we would love to keep the wedding as an intimate event with family and close friends. Thank you for understanding!",
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
        answer: "No RSVP = No Seat. We will assign your seats so we strongly suggest you do the RSVP on or before August 1, 2026 or you may contact and inform us ahead of time. In any case that you may have said Yes in our RSVP and suddenly won't be able to attend, please let us know ASAP so we can accomodate any changes.",
    },
    {
        question: "When should we arrive at the venue?",
        answer: "The ceremony will strictly start at 5:00 PM. Please arrive to the venue at 4:00 PM to valet and find your seat.",
    },
    {
        question: "When can we leave?",
        answer: "The program is estimated to last until 10:00 PM. We are hoping that you will stay with us until the end of the program. Should you wish to leave early, we'd love to personally thank you and say goodbye before you go",
    },
    {
        question: "Is there a dress code?",
        answer: "Dress to impress! Our wedding is formal, so feel free to wear your best outfit and be prepared to celebrate with us.",
    },
    {
        question: "Where should I stay?",
        answer: 'Check out the "Travel" page on our site for more information on hotels in the area.',
    },
];

export default function FAQ() {
    // Keep track of which FAQs are open
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
        // Close this FAQ
        setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
        // Open this FAQ
        setOpenIndexes([...openIndexes, index]);
    }
    };

    return (
    <div className="body-container">
        <div className="title">FAQ</div>
        <div className={styles.faq}>
        {faqs.map((faq, index) => (
            <div className={styles.card} key={index}>
                <div
                    className={styles.question}
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: "pointer" }}
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
    );
}