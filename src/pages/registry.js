import Image from "next/image";
import styles from "@/styles/Registry.module.css";

export default function Registry() {
  return (
    <div className={styles.registryPage}>
      
      {/* Top Hero Image */}
      <div className={styles.topImageWrapper}>
        <Image
          src="/images/registry.JPG"
          alt="Registry"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      <div className={styles.registryInner}>
        <div className={styles.registryCard}>
          <h1 className={styles.pageTitle}>Registry</h1>
          <p className={styles.pageSubheading}>
            Your presence is the greatest gift. If you&apos;d like to contribute something, we&apos;ve set up a Honeyfund to help us celebrate our honeymoon together.
          </p>
          <a
            href="https://www.honeyfund.com/site/Syrena-george"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.honeyfundButton}
          >
            Visit Our Honeyfund
          </a>
        </div>
      </div>
    </div>
  );
}
