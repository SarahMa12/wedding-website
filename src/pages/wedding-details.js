import Image from "next/image";
import styles from "@/styles/WeddingDetails.module.css";

export default function WeddingDetails() {
    return (
        <div className="body-container">
            
            <div className={styles.topImageWrapper}>
                <Image
                    src="/images/details.jpg"
                    alt="Wedding Details"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            <div className={styles.bigEvent}>
                <div className={styles.info}>
                    <div className={styles.sectionTitle}>
                        <span className={styles.word}><span className={styles.letter}>T</span>he</span>
                        <span className={styles.word}><span className={styles.letter}>W</span>elcome</span>
                        <span className={styles.word}><span className={styles.letter}>P</span>arty</span>
                    </div>
                    <div className={styles.weddingDate}>Friday, September 11, 2026</div>
                    <div className={styles.weddingLocation}>
                        Location: 3267 Knightswood Way, San Jose, CA, 95148
                    </div>
                </div>
            </div>

            <div className={styles.bigEvent}>
                <div className={styles.info}>
                    <div className={styles.sectionTitle}>
                        <span className={styles.word}><span className={styles.letter}>T</span>he</span>
                        <span className={styles.word}><span className={styles.letter}>W</span>edding</span>
                    </div>                    
                    <div className={styles.weddingDate}>Saturday, September 12, 2026</div>
                    <div className={styles.weddingLocation}>
                        Location: 2551 Mount Pleasant Rd, San Jose, CA, 95148
                    </div>
                </div>

                <div className={styles.schedule}>
                    <div className={styles.scheduleTitle}>Schedule</div>

                    <div className={styles.event}>
                        <div className={styles.eventName}>Guest Arrival</div>
                        <div className={styles.eventTime}>4:30 PM</div>
                    </div>

                    <div className={styles.event}>
                        <div className={styles.eventName}>Wedding Ceremony</div>
                        <div className={styles.eventTime}>5:00 PM</div>
                    </div>

                    <div className={styles.event}>
                        <div className={styles.eventName}>Cocktail Hour</div>
                        <div className={styles.eventTime}>6:00 PM</div>
                    </div>

                    <div className={styles.event}>
                        <div className={styles.eventName}>Wedding Reception</div>
                        <div className={styles.eventTime}>7:00 PM</div>
                    </div>
                </div>
            </div>

            <div className={styles.bigEvent}>
                <div className={styles.info}>
                    <div className={styles.sectionTitle}>
                        <span className={styles.word}><span className={styles.letter}>T</span>he</span>
                        <span className={styles.word}><span className={styles.letter}>B</span>runch</span>
                        <span className={styles.word}><span className={styles.letter}>F</span>arewell</span>
                    </div>                    
                    <div className={styles.weddingDate}>Sunday, September 13, 2026</div>
                    <div className={styles.weddingLocation}>
                        Location: 3267 Knightswood Way, San Jose, CA, 95148
                    </div>
                </div>
            </div>
        </div>
    );
}
