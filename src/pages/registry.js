import styles from "@/styles/Registry.module.css";

export default function Registry() {
  return (
    <div className={styles.registryPage}>
      <div className={styles.registryInner}>
        <div className={styles.registryCard}>
          <h1 className={styles.pageTitle}>Registry</h1>
          <p className={styles.pageSubheading}>
            We&apos;re putting together something meaningful for our registry.
            More information will be available soon. ♡
          </p>
        </div>
      </div>
    </div>
  );
}
