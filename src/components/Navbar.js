import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/rsvp", label: "RSVP" },
        { href: "/our-story", label: "Our Story" },
        { href: "/wedding-party", label: "Wedding Party" },
        { href: "/wedding-details", label: "Wedding Details" },
        { href: "/travel", label: "Travel" },
        { href: "/faq", label: "FAQ" },
        { href: "/registry", label: "Registry" },
    ];

    return (
        <nav className={styles.navBar}>
            <div className={styles.topNav}>
                <Link href="/" legacyBehavior>
                    <a className={styles.logo}>Syrena and George</a>
                </Link>

                <button className={styles.navButton} onClick={() => setMenuOpen(true)}>
                    <Image src="/images/nav-icon.svg" width="25" height="25" />
                </button>
            </div>

            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <div className={styles.menuImageWrapper}>
                        <Image
                            src="/images/menu.jpeg"
                            width={1200}
                            height={800}
                            alt="Menu Image"
                            className={styles.menuImage}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className={styles.mobileNavPanel}>
                        <ul className={styles.mobileNavlinks}>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} legacyBehavior>
                                        <a
                                            className={router.pathname === link.href ? styles.activeLink : ""}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>
                            <Image src="/images/close-icon.svg" width="25" height="25" />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
