import { useState } from "react";
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

                    <button 
                        className={styles.navButton}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <Image src="/nav-icon.svg" width="25" height="25"/>
                    </button>
                </div>
           
                <ul className={styles.navLinks}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/rsvp">RSVP</Link></li>
                    <li><Link href="/">Wedding Details</Link></li>
                    <li><Link href="/">Wedding Attire</Link></li>
                    <li><Link href="/">Travel</Link></li>
                    <li><Link href="/">Activities</Link></li>
                    <li><Link href="/">Activities</Link></li>
                    <li><Link href="/">Registry</Link></li>
                </ul>

                {menuOpen && (
                    <div className={styles.mobileMenu}>
                        <ul className={styles.mobileNavlinks}>
                            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                            <li><Link href="/rsvp" onClick={() => setMenuOpen(false)}>RSVP</Link></li>
                            <li><Link href="/" onClick={() => setMenuOpen(false)}>Wedding Details</Link></li>
                            <li><Link href="/" onClick={() => setMenuOpen(false)}>Wedding Attire</Link></li>
                            <li><Link href="/" onClick={() => setMenuOpen(false)}>Travel</Link></li>
                            <li><Link href="/" onClick={() => setMenuOpen(false)}>Activities</Link></li>
                            <li><Link href="/" onClick={() => setMenuOpen(false)}>Activities</Link></li>
                            <li><Link href="/" onClick={() => setMenuOpen(false)}>Registry</Link></li>
                        </ul>
                        <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>
                            <Image src="/close-icon.svg" width="25" height="25"/>
                        </button>
                    </div>
                )}
            </nav>
        </>
    )
}