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
            link: "https://www.marriott.com/en-us/hotels/sjcwi-the-westin-san-jose/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
        },
        {
            name: "Signia by Hilton San Jose",
            desc: "Upscale high-rise hotel with spacious rooms, a beautiful lobby, and central downtown location. About 20 minutes from the venue.",
            link: "https://www.hilton.com/en/hotels/sjcsmsa-signia-san-jose/",
        },
        {
            name: "AC Hotel by Marriott San Jose Downtown",
            desc: "Chic, minimalist, European-inspired hotel with a clean aesthetic and great bar/lounge area. About 22 minutes from the venue.",
            link: "https://www.marriott.com/en-us/hotels/sjcac-ac-hotel-san-jose-downtown/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
        },
        {
            name: "Hyatt Place San Jose / Downtown",
            desc: "Comfortable and reliable stay right next to the convention center — great for families or groups. About 22 minutes from the venue.",
            link: "https://www.hyatt.com/hyatt-place/en-US/sjczj-hyatt-place-san-jose-downtown",
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
                        <span className={styles.sectionTag}>Parking &amp; Shuttle</span>
                    </div>

                    <div className={styles.parkingContent}>
                        <div className={styles.parkingText}>
                            <h3 className={styles.subheader}>Parking</h3>
                            <p className={styles.cars}>
                                The venue does not have guest parking. If you’re driving, please park along our designated zones on <strong>Flint Ave</strong> and <strong>Brackett Ave</strong> (near <a href="https://www.google.com/maps/place/3311+Arqueado+Dr,+San+Jose,+CA+95148" target="_blank" rel="noopener noreferrer" style={{ color: '#c7a96e', textDecoration: 'underline' }}>3311 Arqueado Dr, San Jose, CA 95148</a>). 
                            </p>
                            <p className={styles.cars}>
                                A shuttle will be looping through these streets to pick guests up and bring you directly to the venue.
                            </p>
                            
                            <h3 className={styles.subheader} style={{ marginTop: '1.5rem' }}>Rideshare</h3>
                            <p className={styles.cars}>
                                Uber, Lyft, and Waymo are readily available throughout San Jose. We highly encourage ridesharing if you plan to drink so you can enjoy the night to the fullest!
                            </p>
                        </div>
                        
                        <div className={styles.parkingMap}>
                            <Image 
                                src="/images/parking-map.jpeg" 
                                alt="Parking Map" 
                                width={600} 
                                height={450} 
                                className={styles.mapImage}
                            />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
