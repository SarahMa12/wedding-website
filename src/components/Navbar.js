import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter(); // detect current page

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 776 && menuOpen) setMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [menuOpen]);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "RSVP", href: "/rsvp" },
        { name: "Our Story", href: "/our-story" },
        { name: "Wedding Party", href: "/wedding-party" },
        { name: "Wedding Details", href: "/wedding-details" },
        { name: "FAQ", href: "/faq" },
        { name: "Registry", href: "/registry" },
    ];

    return (
        <nav className={styles.navBar}>
            <div className={styles.topNav}>
                <div className={styles.logo}>Syrena and George</div>

                <button className={styles.navButton} onClick={() => setMenuOpen(true)}>
                    <Image src="/images/nav-icon.svg" width="25" height="25" alt="Menu" />
                </button>
            </div>

            {/* Desktop Nav */}
            <ul className={styles.navLinks}>
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={router.pathname === item.href ? styles.activeLink : ""}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Nav */}
            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <ul className={styles.mobileNavlinks}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={router.pathname === item.href ? styles.activeLink : ""}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>
                        <Image src="/images/close-icon.svg" width="25" height="25" alt="Close" />
                    </button>
                </div>
            )}
        </nav>
    );
}
