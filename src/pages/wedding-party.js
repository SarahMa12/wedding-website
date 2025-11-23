import Image from "next/image";
import styles from "@/styles/WeddingParty.module.css";

const weddingParty = [
  { name: "Caitlin", role: "Maid of Honor", image: "/images/caitlin.png", relationship: "Cousin of Bride" },
  { name: "Robert", role: "Best Man", image: "/images/robert.png", relationship: "Brother of Groom" },
  { name: "Amelia", role: "Bridesmaid", image: "/images/amelia.jpeg", relationship: "Friend of Bride" },
  { name: "Andus", role: "Groomsman", image: "/images/andus.jpg", relationship: "Friend of Groom" },
  { name: "Corbin", role: "Bridesman", image: "/images/corbin.jpeg", relationship: "Cousin of Bride" },
  { name: "Diane", role: "Bridesmaid", image: "/images/diane.jpeg", relationship: "Friend of Bride" },
  { name: "George D.", role: "Groomsman", image: "/images/georged.png", relationship: "Friend of Groom" },
  { name: "Henrianna", role: "Bridesmaid", image: "/images/henrianna.jpeg", relationship: "Friend of Bride" },
  { name: "Kayla", role: "Bridesmaid", image: "/images/kayla.JPG", relationship: "Cousin of Bride" },
  { name: "Kenny", role: "Groomsman", image: "/images/kenny.jpg", relationship: "Friend of Groom" },
  { name: "Korina", role: "Bridesmaid", image: "/images/korina.jpeg", relationship: "Friend of Bride" },
  { name: "Jacob", role: "Bridesman", image: "/images/jacob.jpeg", relationship: "Cousin of Bride" },
  { name: "Sarah", role: "Bridesmaid", image: "/images/sarah.jpeg", relationship: "Sister of Bride" },
  { name: "Savannah", role: "Bridesmaid", image: "/images/savannah.jpeg", relationship: "Sister of Bride" },
  { name: "Stephanie", role: "Bridesmaid", image: "/images/steph.jpeg", relationship: "Friend of Bride" },
  { name: "Koko", role: "Ring Bearer", image: "/images/koko.png", relationship: "Furbaby of Groom and Bride" },
  { name: "Teddy", role: "Ring Bearer", image: "/images/teddy.png", relationship: "Furbaby of Groom and Bride" },
];

export default function WeddingParty() {
  return (
    <div className={styles.weddingPartyPage}>
      <div className={`body-container ${styles.weddingPartyInner}`}>
        {/* Page header */}
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Wedding Party</h1>
          <p className={styles.pageSubheading}>
            Meet the people who’ve cheered us on, hyped us up, and stood by our side through it all.
            We couldn’t imagine getting married without them.
          </p>
        </header>

        {/* Grid of people */}
        <section>
          <div className={styles.people}>
            {weddingParty.map((person, index) => (
              <article key={index} className={styles.person}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={person.image}
                    width={190}
                    height={190}
                    alt={person.name}
                    className={styles.profileImage}
                  />
                </div>
                <div className={styles.name}>{person.name}</div>
                <div className={styles.role}>{person.role}</div>
                <div className={styles.relationship}>{person.relationship}</div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
