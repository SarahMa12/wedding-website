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
                        A weekend of celebrations in San Jose with welcome drinks at The Pressroom, an intimate garden ceremony, and a farewell by the pool.
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
                                <a className={styles.restaurantLink} target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/The+Pressroom/@37.3348721,-121.8963328,17z/data=!3m1!4b1!4m6!3m5!1s0x808fcd000a6aae67:0xcafd7a6cbf1f6989!8m2!3d37.3348679!4d-121.8937525!16s%2Fg%2F11wqvd9sz6?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D">The Pressroom, San Jose (Bar Mercury)</a>
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
                            <div className={styles.eventGrid}>
                            <div className={styles.eventRow}>
                                <span className={styles.time}>
                                    7:30 PM –<br />
                                    10:30 PM
                                </span>
                                <span className={styles.eventLabel}>Welcome Reception</span>
                            </div>
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
                                <a className={styles.restaurantLink} target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/2551+Mt+Pleasant+Rd,+San+Jose,+CA+95148/@37.341688,-121.7791962,17z/data=!3m1!4b1!4m6!3m5!1s0x808e2d3b2baf4223:0xb1d0db8f4d06b15b!8m2!3d37.3416838!4d-121.7766159!16s%2Fg%2F11c5jxg1m0?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D">2551 Mount Pleasant Rd, San Jose, CA, 95148</a>
                            </span>
                        </div>
                        <div className={styles.attire}>Attire: Black-tie optional (Please refrain from wearing white, cream, or ivory)</div>
                        <div className={styles.desc}>
                            We&apos;re celebrating our love with an intimate garden ceremony surrounded by
                            flowers, family, and the people we adore most.
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
                                <span className={styles.time}>5:30 PM</span>
                                <span className={styles.eventLabel}>Cocktail Hour</span>
                            </div>

                            <div className={styles.eventRow}>
                                <span className={styles.time}>
                                    6:40 PM
                                </span>
                                <span className={styles.eventLabel}>Wedding Reception</span>
                            </div>
                            <div className={styles.eventRow}>
                                <span className={styles.time}>
                                    11:00 PM –<br />
                                    1:00 AM
                                </span>
                                <span className={styles.eventLabel}>After Party</span>
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
                                <span className={styles.letter}>F</span>arewell
                            </span>
                            <span className={styles.word}>
                                <span className={styles.letter}>S</span>plash
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
                                <a className={styles.restaurantLink} target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/3267+Knightswood+Way,+San+Jose,+CA+95148/@37.3276489,-121.7820109,17z/data=!3m1!4b1!4m6!3m5!1s0x808e2d111e2ee28b:0x4bc667fb2f02f38b!8m2!3d37.3276447!4d-121.7794306!16s%2Fg%2F11c1kyw6mb?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D">3267 Knightswood Way, San Jose, CA, 95148</a>
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
                        <div className={styles.eventRow}>
                            <span className={styles.time}>11:30 AM</span>
                            <span className={styles.eventLabel}>Guest Arrival</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
