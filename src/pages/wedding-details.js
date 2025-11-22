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
                        <img src="/images/location.svg" alt="" className={styles.locationIcon} />
                        <span className={styles.weddingLocationText}>
                            3267 Knightswood Way, San Jose, CA, 95148
                        </span>
                    </div>
                    <div className={styles.attire}>
                        Attire: Cocktail
                    </div>
                    <div className={styles.desc}>
                        Everyone is welcome to join us for drinks and bites as we celebrate the start of an incredible wedding weekend.
                    </div>
                </div>
                <div className={styles.schedule}>
                    <div className={styles.scheduleTitle}>Schedule</div>

                    <div className={styles.event}>
                        TBA
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
                        <img src="/images/location.svg" alt="" className={styles.locationIcon} />
                        <span className={styles.weddingLocationText}>
                            2551 Mount Pleasant Rd, San Jose, CA, 95148
                        </span>
                    </div>
                    <div className={styles.attire}>
                        Attire: Formal, black-tie optional
                    </div>
                    
                </div>

                <div className={styles.schedule}>
                    <div className={styles.scheduleTitle}>Schedule</div>

                    <div className={styles.event}>
                        <div className={styles.eventName}><span className={styles.time}>4:30 PM</span> Guest Arrival</div>
                        <div className={styles.eventName}><span className={styles.time}>5:00 PM</span> Wedding Ceremony</div>
                        <div className={styles.eventName}><span className={styles.time}>6:00 PM</span> Cocktail Hour</div>
                        <div className={styles.eventName}><span className={styles.time}>7:00 PM</span> Wedding Reception</div>                        
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
                        <img src="/images/location.svg" alt="" className={styles.locationIcon} />
                        <span className={styles.weddingLocationText}>
                            3267 Knightswood Way, San Jose, CA, 95148
                        </span>
                    </div>
                    <div className={styles.attire}>
                        Attire: Casual
                    </div>
                    <div className={styles.desc}>
                        Join us the morning after the wedding for a laid-back poolside brunch with light bites.
                    </div>
                </div>
                <div className={styles.schedule}>
                    <div className={styles.scheduleTitle}>Schedule</div>

                    <div className={styles.event}>
                        TBA
                    </div>
                </div>
            </div>
        </div>
    );
}
