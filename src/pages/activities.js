import styles from "@/styles/Activities.module.css";

export default function Activities() {
  return (
    <div className={styles.activitiesPage}>
      <div className={styles.activitiesInner}>
        {/* Page Header */}
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Activities</h1>
          <p className={styles.pageSubheading}>
            Whether you&apos;re staying in San Francisco or the South Bay, here are
            some of our favorite places to walk, explore, and eat before or after
            the wedding.
          </p>
        </header>

        {/* SAN FRANCISCO BLOCK */}
        <section className={styles.cityBlock}>
          <div className={styles.cityHeader}>
            <h2 className={styles.cityName}>San Francisco</h2>
            <span className={styles.cityTag}>Where it all began</span>
          </div>

          <div className={styles.cityColumns}>
            {/* Things to do – SF */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Things to Do</h3>

              <article className={styles.itemCard}>
                <div className={styles.itemTitleRow}>
                  <div className={styles.itemName}>Sutro Baths &amp; Lands End</div>
                  <span className={styles.memoryTag}>First date (her version)</span>
                </div>
                <p className={styles.itemDesc}>
                  A dramatic cliffside ruin with ocean views and coastal trails.  It’s the perfect place for guests to stroll, explore the lookout points, and watch a breathtaking sunset over the Pacific.
                </p>
              </article>

              <article className={styles.itemCard}>
                <div className={styles.itemTitleRow}>
                  <div className={styles.itemName}>Stern Grove</div>
                  <span className={styles.memoryTag}>First date (his version)</span>
                </div>
                <p className={styles.itemDesc}>
                  A hidden gem surrounded by towering eucalyptus trees. 
                </p>
              </article>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>North Beach Neighborhood</div>
                <p className={styles.itemDesc}>
                  Syrena&apos;s home neighborhood — old-school Italian cafés,
                  pastries, scenic viewpoints, and charming streets. Perfect for
                  grabbing coffee, people-watching, and wandering through
                  Washington Square Park.
                </p>
              </article>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>Outer Sunset &amp; Ocean Beach</div>
                <p className={styles.itemDesc}>
                  George&apos;s home neighborhood — laid-back, salty air, surf
                  vibes. Enjoy long beach walks, local cafés, and the relaxed
                  stretches of shops along Judah and Noriega. Golden Gate Park is
                  also close by and worth a visit.
                </p>
              </article>
            </div>

            {/* Where to eat – SF */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Where to Eat</h3>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>Marugame Udon (Stonestown)</div>
                <p className={styles.itemDesc}>
                  Freshly made udon, tempura, and curry plates — fast, comforting,
                  and always delicious. A perfect casual lunch or dinner.
                </p>
              </article>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>Toyose (Outer Sunset)</div>
                <p className={styles.itemDesc}>
                  A beloved Korean comfort-food spot tucked inside a converted
                  garage. Late-night vibes, kimchi fried rice, wings, soondubu, and
                  pure nostalgia.
                </p>
              </article>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>
                  Tony&apos;s Pizza Napoletana (North Beach)
                </div>
                <p className={styles.itemDesc}>
                  Award-winning pizzas from Neapolitan to Detroit-style. Expect a
                  wait — but it&apos;s worth every minute.
                </p>
              </article>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>Mama&apos;s on Washington Square</div>
                <p className={styles.itemDesc}>
                  A classic SF brunch institution with huge portions and a loyal fanbase. Go early or expect a line!
                </p>
              </article>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>Liguria Bakery</div>
                <p className={styles.itemDesc}>
                  A true SF icon serving freshly baked focaccia since 1911. Cash only and sells out quickly.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SAN JOSE / SOUTH BAY BLOCK */}
        <section className={styles.cityBlock}>
          <div className={styles.cityHeader}>
            <h2 className={styles.cityName}>San Jose / South Bay</h2>
            <span className={styles.cityTag}>Near the venue</span>
          </div>

          <div className={styles.cityColumns}>
            {/* Things to do – SJ */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Things to Do</h3>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>Santana Row</div>
                <p className={styles.itemDesc}>
                  A vibrant outdoor shopping district with restaurants, coffee shops, and boutiques. Great for wandering around before or after meals.
                </p>
              </article>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>Alum Rock Park</div>
                <p className={styles.itemDesc}>
                  One of California&apos;s oldest municipal parks — peaceful hiking,
                  scenic overlooks, and lush greenery just minutes from the venue.
                </p>
              </article>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>
                  Downtown San Jose (San Pedro Square)
                </div>
                <p className={styles.itemDesc}>
                  Museums, bars, cafés, and walkable plazas - an easy way to spend an afternoon exploring.
                </p>
              </article>
            </div>

            {/* Where to eat – SJ */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Where to Eat</h3>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>Pho Y1</div>
                <p className={styles.itemDesc}>
                  Rich broth, fresh herbs, and the perfect bowl of comfort — our
                  favorite pho spot in the South Bay.
                </p>
              </article>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>Ramen Nagi (Valley Fair)</div>
                <p className={styles.itemDesc}>
                  Full-flavor, customizable ramen bowls from the famous Japanese brand. A top ramen experience in the Bay Area.
                </p>
              </article>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>
                  Baekjeong Korean BBQ (Valley Fair)
                </div>
                <p className={styles.itemDesc}>
                  High-quality Korean barbecue with excellent service, great
                  banchan, and a lively dining atmosphere.
                </p>
              </article>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>San Pedro Square Market Eats</div>
                <p className={styles.itemDesc}>
                  A lively open-air food hall with tacos, pizza, poke, tapas,
                  desserts, and craft beer. Great for groups and casual hangouts.
                  <br />
                  <span className={styles.inlineNote}>
                    Recommend: Pizza Bocca Lupo
                  </span>
                </p>
              </article>

              <article className={styles.itemCard}>
                <div className={styles.itemName}>Santana Row Restaurants</div>
                <p className={styles.itemDesc}>
                  A mix of brunch spots, bistros, cafés, and dinner restaurants all
                  in one walkable district — perfect for exploring and dining.
                  <br />
                  <span className={styles.inlineNote}>
                    Recommend: Meso (Mediterranean) or EMC Seafood &amp; Raw Bar
                  </span>
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
