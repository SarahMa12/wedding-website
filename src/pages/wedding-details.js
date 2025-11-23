import Image from "next/image";
import styles from "@/styles/WeddingDetails.module.css";

export default function WeddingDetails() {
    return (
        <div className={styles.detailsPage}>
            <div className={styles.detailsInner}>
                {/* Page header */}
                <header className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>Wedding Weekend</h1>
                    <p className={styles.pageSubheading}>
                        A weekend of celebrations in San Jose with welcome drinks, a dreamy backyard
                        wedding, and a cozy farewell by the pool.
                    </p>
                </header>

                {/* Top image */}
                <div className={styles.topImageWrapper}>
                    <Image
                        src="/images/details.jpg"
                        alt="Wedding Details"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>

                {/* WELCOME PARTY */}
                <div className={styles.bigEvent}>
                    <div className={styles.info}>
                        <div className={styles.sectionTitle}>
                            <span className={styles.word}>
                                <span className={styles.letter}>T</span>he
                            </span>
                            <span className={styles.word}>
                                <span className={styles.letter}>W</span>elcome
                            </span>
                            <span className={styles.word}>
                                <span className={styles.letter}>P</span>arty
                            </span>
                        </div>
                        <div className={styles.weddingDate}>FRIDAY, SEPTEMBER 11, 2026</div>
                        <div className={styles.weddingLocation}>
                            <img
                                src="/images/location.svg"
                                alt=""
                                className={styles.locationIcon}
                            />
                            <span className={styles.weddingLocationText}>
                                3267 Knightswood Way, San Jose, CA, 95148
                            </span>
                        </div>
                        <div className={styles.attire}>Attire: Cocktail</div>
                        <div className={styles.desc}>
                            Everyone is welcome to join us for drinks and bites as we celebrate the
                            start of an incredible wedding weekend.
                        </div>
                    </div>

                    <div className={styles.schedule}>
                        <div className={styles.scheduleTitle}>Schedule</div>
                        <div className={styles.event}>
                            TBA
                        </div>
                    </div>
                </div>

                {/* WEDDING DAY */}
                <div className={styles.bigEvent}>
                    <div className={styles.info}>
                        <div className={styles.sectionTitle}>
                            <span className={styles.word}>
                                <span className={styles.letter}>T</span>he
                            </span>
                            <span className={styles.word}>
                                <span className={styles.letter}>W</span>edding
                            </span>
                        </div>
                        <div className={styles.weddingDate}>SATURDAY, SEPTEMBER 12, 2026</div>
                        <div className={styles.weddingLocation}>
                            <img
                                src="/images/location.svg"
                                alt=""
                                className={styles.locationIcon}
                            />
                            <span className={styles.weddingLocationText}>
                                2551 Mount Pleasant Rd, San Jose, CA, 95148
                            </span>
                        </div>
                        <div className={styles.attire}>Attire: Formal, black-tie optional</div>
                        <div className={styles.desc}>
                            We're celebrating our love with a dreamy backyard ceremony surrounded by
                            flowers, family, and the people we adore most. Cozy, heartfelt, and
                            filled with moments we'll remember forever.
                        </div>
                    </div>

                    <div className={styles.schedule}>
                        <div className={styles.scheduleTitle}>Schedule</div>

                        <div className={styles.eventGrid}>
                            <div className={styles.eventRow}>
                                <span className={styles.time}>4:30 PM</span>
                                <span className={styles.eventLabel}>Guest Arrival</span>
                            </div>

                            <div className={styles.eventRow}>
                                <span className={styles.time}>5:00 PM</span>
                                <span className={styles.eventLabel}>Wedding Ceremony</span>
                            </div>

                            <div className={styles.eventRow}>
                                <span className={styles.time}>6:00 PM</span>
                                <span className={styles.eventLabel}>Cocktail Hour</span>
                            </div>

                            <div className={styles.eventRow}>
                                <span className={styles.time}>7:00 PM</span>
                                <span className={styles.eventLabel}>Wedding Reception</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BRUNCH FAREWELL */}
                <div className={styles.bigEvent}>
                    <div className={styles.info}>
                        <div className={styles.sectionTitle}>
                            <span className={styles.word}>
                                <span className={styles.letter}>T</span>he
                            </span>
                            <span className={styles.word}>
                                <span className={styles.letter}>B</span>runch
                            </span>
                            <span className={styles.word}>
                                <span className={styles.letter}>F</span>arewell
                            </span>
                        </div>
                        <div className={styles.weddingDate}>SUNDAY, SEPTEMBER 13, 2026</div>
                        <div className={styles.weddingLocation}>
                            <img
                                src="/images/location.svg"
                                alt=""
                                className={styles.locationIcon}
                            />
                            <span className={styles.weddingLocationText}>
                                3267 Knightswood Way, San Jose, CA, 95148
                            </span>
                        </div>
                        <div className={styles.attire}>Attire: Casual</div>
                        <div className={styles.desc}>
                            Join us the morning after the wedding for a laid-back poolside brunch
                            with light bites.
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
        </div>
    );
}
