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
        answer: "We have assigned seats for each of you. It took us a lot of effort and discussion to finalize the seating arrangement which is meant for everyone's convenience and group familiarity, so no need to worry. Our planner will gladly assist you in finding your designated seats.",
    },
    {
        question: "What if I did not RSVP but will attend the wedding?",
        answer: "No RSVP = No Seat. We will assign your seats so we strongly suggest you do the RSVP on or before July 12, 2026 or you may contact and inform us ahead of time. In any case that you may have said 'Yes' in our RSVP and suddenly won't be able to attend, please let us know ASAP so we can accomodate any changes.",
    },
    {
        question: "When should we arrive at the venue?",
        answer: "The ceremony will strictly start at 5:00 PM. Please arrive to the venue by 4:30 to enjoy pre-ceremony welcome drinks and mingle.",
    },
    {
        question: "Is there a dress code?",
        answer: "Dress to impress! Our wedding is black-tie optional, plan for floor-length elegance, elevated eveningwear, and classic tuxedo (preferred) or dark suits; avoid cocktail dresses or casual outfits. As it’s an outdoor celebration, a light shawl or cardigan is recommended for the evening breeze.",
    },
    {
        question: "Where should I stay?",
        answer: 'Check out the "Travel" page on our site for more information on hotels in the area.',
    },
    {
        question: "Is there parking at the venue?",
        answer: "The venue does not have guest parking. If you’re driving, park along our designated zones on Flint Ave or Brackett Ave - a shuttle will loop through to pick you up. Rideshare is encouraged if you plan to drink so you can enjoy the night to the fullest!",
        image: "/images/parking-map.jpeg",
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
                        src="/images/faq.JPG"  // <-- same one as RSVP/Registry
                        alt="FAQ Background"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>

                {/* Foreground Card */}
                <div className={styles.heroCard}>
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
                                    <div className={styles.answer}>
                                        <p>{faq.answer}</p>
                                        {faq.image && (
                                            <div className={styles.answerImage}>
                                                <Image
                                                    src={faq.image}
                                                    alt="FAQ detail"
                                                    width={600}
                                                    height={400}
                                                    className={styles.faqImage}
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
