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
            We&apos;re putting together something meaningful for our registry.
            More information will be available soon.
          </p>
        </div>
      </div>
    </div>
  );
}
