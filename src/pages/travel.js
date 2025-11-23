import styles from "@/styles/Travel.module.css";
import Image from "next/image";

export default function Travel() {
    const flights = [
        {
            name: "San Jose Mineta International Airport (SJC)",
            miles: "Approximately 11 miles from the venue",
        },
        {
            name: "San Francisco International Airport (SFO)",
            miles: "Approximately 42 miles from the venue",
        },
    ];

    const hotels = [
        {
            name: "The Westin San Jose",
            desc: "A historic and elegant hotel in downtown San Jose with modern rooms and easy access to restaurants and nightlife. About 20 minutes from the venue.",
            link: "https://www.marriott.com/en-us/hotels/sjcwi-the-westin-san-jose/overview/",
        },
        {
            name: "Signia by Hilton San Jose",
            desc: "Upscale high-rise hotel with spacious rooms, a beautiful lobby, and central downtown location. About 20 minutes from the venue.",
            link: "https://www.hilton.com/en/hotels/sjcsahh-signia-san-jose/",
        },
        {
            name: "AC Hotel by Marriott San Jose Downtown",
            desc: "Chic, minimalist, European-inspired hotel with a clean aesthetic and great bar/lounge area. About 22 minutes from the venue.",
            link: "https://www.marriott.com/en-us/hotels/sjcac-ac-hotel-san-jose-downtown/overview/",
        },
        {
            name: "Hyatt Place San Jose / Downtown",
            desc: "Comfortable and reliable stay right next to the convention center — great for families or groups. About 22 minutes from the venue.",
            link: "https://www.hyatt.com/en-US/hotel/california/hyatt-place-san-jose-downtown/sjczd",
        },
        {
            name: "Holiday Inn Express & Suites San Jose Silicon Valley by IHG",
            desc: "Comfortable, modern rooms just minutes from SJC, making it convenient for travelers. About 20 minutes from the venue.",
            link: "https://www.ihg.com/holidayinnexpress/hotels/us/en/san-jose/sjces/hoteldetail",
        },
    ];

    return (
        <div className={styles.travelPage}>
            <div className={`body-container ${styles.travelInner}`}>
                
                {/* Page Header */}
                <header className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>Travel &amp; Stay</h1>
                    <p className={styles.pageSubheading}>
                        Our ceremony and reception will be in the east hills of San Jose.
                        Below are nearby airports, hotel recommendations, and tips for getting to the venue.
                    </p>
                </header>

                {/* Flights Section */}
                <section className={styles.section}>
                    <div className={styles.sectionHeaderRow}>
                        <div className={styles.sectionTitleGroup}>
                            <span className={styles.sectionIcon}>
                                <Image src="/images/airplane.svg" width={25} height={25} alt="Airplane" />
                            </span>
                            <h2 className={styles.header}>Flights</h2>
                        </div>
                        <span className={styles.sectionTag}>Nearest Airports</span>
                    </div>

                    <div className={styles.flightsGrid}>
                        {flights.map((airport, idx) => (
                            <article className={styles.airportCard} key={idx}>
                                <div className={styles.airportName}>{airport.name}</div>
                                <div className={styles.miles}>{airport.miles}</div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Hotels Section */}
                <section className={styles.section}>
                    <div className={styles.sectionHeaderRow}>
                        <div className={styles.sectionTitleGroup}>
                            <span className={styles.sectionIcon}>
                                <Image src="/images/hotel.svg" width={25} height={25} alt="Hotel" />
                            </span>
                            <h2 className={styles.header}>Hotels</h2>
                        </div>
                        <span className={styles.sectionTag}>Downtown San Jose</span>
                    </div>

                    <div className={styles.hotelsGrid}>
                        {hotels.map((hotel, idx) => (
                            <a
                                href={hotel.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.hotelCard}
                                key={idx}
                            >
                                <div className={styles.hotelName}>{hotel.name}</div>
                                <p className={styles.hotelDesc}>{hotel.desc}</p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Airbnb Section */}
                <section className={styles.section}>
                    <div className={styles.sectionHeaderRow}>
                        <div className={styles.sectionTitleGroup}>
                            <span className={styles.sectionIcon}>
                                <Image src="/images/house.svg" width={25} height={25} alt="House" />
                            </span>
                            <h2 className={styles.header}>Airbnb</h2>
                        </div>
                        <span className={styles.sectionTag}>Homes &amp; Group Stays</span>
                    </div>

                    <p className={styles.airbnb}>
                        Airbnb options are plentiful in San Jose, offering cozy homes and modern stays
                        around 15–20 minutes from the venue — perfect for groups, families, or anyone
                        who prefers more space and flexibility.
                    </p>

                    <div className={styles.linkRow}>
                        <a
                            href="https://www.airbnb.com/s/San-Jose--CA/homes?checkin=2026-09-11&checkout=2026-09-13"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.primaryLink}
                        >
                            View Airbnb stays near the venue
                        </a>
                    </div>
                </section>

                {/* Rides Section */}
                <section className={styles.section}>
                    <div className={styles.sectionHeaderRow}>
                        <div className={styles.sectionTitleGroup}>
                            <span className={styles.sectionIcon}>
                                <Image src="/images/car.svg" width={25} height={25} alt="Car" />
                            </span>
                            <h2 className={styles.header}>Getting to the Venue</h2>
                        </div>
                        <span className={styles.sectionTag}>Rides &amp; Parking</span>
                    </div>

                    <div className={styles.ridesGrid}>
                        <div className={styles.rideBlock}>
                            <h3 className={styles.subheader}>Cars</h3>
                            <p className={styles.cars}>
                                You’re welcome to rent a car to explore the Bay Area, but there is no parking on site.
                                We highly recommend using the provided rideshare code.
                            </p>
                            <p className={styles.cars}>
                                If you prefer to park nearby, you may park at{" "}
                                <strong>3311 Arqueado Drive, San Jose, CA 95148</strong>.
                            </p>
                        </div>

                        <div className={styles.rideBlock}>
                            <h3 className={styles.subheader}>Uber</h3>
                            <p className={styles.cars}>
                                We’ll provide an Uber code for round-trip rides to and from the venue.
                                Details will be shared closer to the date.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
