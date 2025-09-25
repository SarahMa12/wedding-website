import Image from "next/image";
import styles from "@/styles/WeddingParty.module.css";

export default function WeddingParty() {
    return (
        <div class="body-container">
            <div class="title">Wedding Party</div>
            <div className={styles.people}>
                <div className={styles.person}>
                    <Image src="/images/blank-profile.webp" width="190" height="190"/>
                    <div className={styles.name}>Name</div>
                    <div className={styles.role}>Bridesmaid</div>
                </div>
                <div className={styles.person}>
                    <Image src="/images/blank-profile.webp" width="190" height="190"/>
                    <div className={styles.name}>Name</div>
                    <div className={styles.role}>Bridesmaid</div>
                </div>
                <div className={styles.person}>
                    <Image src="/images/blank-profile.webp" width="190" height="190"/>
                    <div className={styles.name}>Name</div>
                    <div className={styles.role}>Bridesmaid</div>
                </div>
                <div className={styles.person}>
                    <Image src="/images/blank-profile.webp" width="190" height="190"/>
                    <div className={styles.name}>Name</div>
                    <div className={styles.role}>Bridesmaid</div>
                </div>
                <div className={styles.person}>
                    <Image src="/images/blank-profile.webp" width="190" height="190"/>
                    <div className={styles.name}>Name</div>
                    <div className={styles.role}>Bridesmaid</div>
                </div>
                <div className={styles.person}>
                    <Image src="/images/blank-profile.webp" width="190" height="190"/>
                    <div className={styles.name}>Name</div>
                    <div className={styles.role}>Bridesmaid</div>
                </div>
                <div className={styles.person}>
                    <Image src="/images/blank-profile.webp" width="190" height="190"/>
                    <div className={styles.name}>Name</div>
                    <div className={styles.role}>Bridesmaid</div>
                </div>
                <div className={styles.person}>
                    <Image src="/images/blank-profile.webp" width="190" height="190"/>
                    <div className={styles.name}>Name</div>
                    <div className={styles.role}>Bridesmaid</div>
                </div>
                <div className={styles.person}>
                    <Image src="/images/blank-profile.webp" width="190" height="190"/>
                    <div className={styles.name}>Name</div>
                    <div className={styles.role}>Bridesmaid</div>
                </div>
            </div>
        </div>
    );
}