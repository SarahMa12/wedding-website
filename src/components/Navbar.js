import Link from 'next/link'
import Image from 'next/image'
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>

                <div className={styles.topnav}>
                    <div className={styles.logo}>Syrena and George</div>

                    <button className={styles.navbutton}><Image src="/nav-icon.svg" width="25" height="25"/></button>
                </div>

                <div className={styles.bottomnav}>                
                    <ul className={styles.navlinks}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/rsvp">RSVP</Link></li>
                        <li><Link href="/">Wedding Details</Link></li>
                        <li><Link href="/">Wedding Attire</Link></li>
                        <li><Link href="/">Travel</Link></li>
                        <li><Link href="/">Activities</Link></li>
                        <li><Link href="/">Activities</Link></li>
                        <li><Link href="/">Registry</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}