import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image'
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <nav className={styles.navBar}>

                <div className={styles.topNav}>
                    <div className={styles.logo}>Syrena and George</div>

                    <button className={styles.navButton} onClick={() => setMenuOpen(true)}>
                        <Image src="/images/nav-icon.svg" width="25" height="25"/>
                    </button>
                </div>
           

                {menuOpen && (
                    <div className={styles.mobileMenu}>
                        <ul className={styles.mobileNavlinks}>
                            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                            <li><Link href="/rsvp" onClick={() => setMenuOpen(false)}>RSVP</Link></li>
                            <li><Link href="/our-story" onClick={() => setMenuOpen(false)}>Our Story</Link></li>
                            <li><Link href="/wedding-party" onClick={() => setMenuOpen(false)}>Wedding Party</Link></li>
                            <li><Link href="/wedding-details" onClick={() => setMenuOpen(false)}>Wedding Details</Link></li>     
                            <li><Link href="/travel" onClick={() => setMenuOpen(false)}>Travel</Link></li>                            
                            <li><Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
                            <li><Link href="/registry" onClick={() => setMenuOpen(false)}>Registry</Link></li>
                        </ul>
                        <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>
                            <Image src="/images/close-icon.svg" width="25" height="25"/>
                        </button>
                    </div>
                )}
            </nav>
        </>
    )
}