import styles from "@/styles/Travel.module.css";

export default function Travel() {
    const flights = [
        {
            name: "San Jose Mineta International Airport (SJC)",
            miles: "Approximately 11 miles from venue",
        },
        {
            name: "San Francisco International Airport (SFO)",
            miles: "Approximately 42 miles from venue",
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
            desc: "Chic and minimalist European-inspired hotel with a clean aesthetic and great bar/lounge area. About 22 minutes from the venue.",
            link: "https://www.marriott.com/en-us/hotels/sjcac-ac-hotel-san-jose-downtown/overview/",
        },
        {
            name: "Hyatt Place San Jose / Downtown",
            desc: "Comfortable and reliable stay right next to the convention center — great for families or groups. About 22 minutes from the venue.",
            link: "https://www.hyatt.com/en-US/hotel/california/hyatt-place-san-jose-downtown/sjczd",
        },
        {
            name: "Holiday Inn Express & Suites San Jose Silicon Valley by IHG",
            desc: "Comfortable, modern rooms just minutes from SJC, making it convenient for travels. About 20 minutes from the venue.",
            link: "https://www.ihg.com/holidayinnexpress/hotels/us/en/san-jose/sjces/hoteldetail",
        }
    ];


    return (
        <div className="body-container">
            
            {/* Flights Section */}
            <div className={styles.section}>
                <div className={styles.header}>Flights</div>

                {flights.map((airport, idx) => (
                    <div className={styles.airport} key={idx}>
                        <div className={styles.airportName}>{airport.name}</div>
                        <div className={styles.miles}>{airport.miles}</div>
                    </div>
                ))}
            </div>

            {/* Hotels Section */}
            <div className={styles.section}>
                <div className={styles.header}>Hotel</div>

                {hotels.map((hotel, idx) => (
                    <div className={styles.hotel} key={idx}>
                        <a 
                            href={hotel.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.hotelName}
                        >
                            {hotel.name}
                        </a>

                        <div className={styles.hotelDesc}>{hotel.desc}</div>
                    </div>
                ))}
            </div>

            <div className={styles.section}>
                <div className={styles.header}>Airbnb</div>
                <div className={styles.airbnb}>Airbnb options are plentiful in San Jose, offering cozy homes and modern stays just 15-20 minutes from the venue for guests who prefer more space and flexibility.</div>
                <div className={styles.link}>
                    <a 
                        href={'https://www.airbnb.com/s/San-Jose--CA/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJ9T_5iuTKj4ARe3GfygqMnbk&acp_id=2c574597-300a-4718-b084-79f687c209f4&date_picker_type=calendar&flexible_trip_dates%5B%5D=september&search_type=user_map_move&query=San%20Jose%2C%20CA&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2025-12-01&monthly_length=3&monthly_end_date=2026-03-01&search_mode=regular_search&price_filter_input_type=2&channel=EXPLORE&ne_lat=37.50895024525264&ne_lng=-121.73981451206873&sw_lat=37.18292258530377&sw_lng=-121.97424396092754&zoom=11.402277412647743&zoom_level=11.402277412647743&search_by_map=true&price_filter_num_nights=2&checkin=2026-09-11&checkout=2026-09-13&source=structured_search_input_header'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.hotelName}
                    > 
                        View Airbnb Stays Near Venue
                    </a>

                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.header}>Rides</div>
            </div>

            <div className={styles.section}>
                <div className={styles.header}>Activities</div>
            </div>

        </div>
    );
}
