import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hideOnScroll, setHideOnScroll] = useState(false);
    const router = useRouter();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/wedding-details", label: "Wedding Details" },
        { href: "/rsvp", label: "RSVP" },
        { href: "/wedding-party", label: "Wedding Party" },
        { href: "/our-story", label: "Our Story" },
        { href: "/travel", label: "Travel" },
        { href: "/activities", label: "Activities" },
        { href: "/registry", label: "Registry" },
        { href: "/faq", label: "FAQ" },
    ];

    // 👇 Hide navbar when scrolling down, show when scrolling up
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentY = window.scrollY;

            // Only start hiding after you've scrolled a bit
            if (currentY > lastScrollY && currentY > 80) {
                // scrolling down
                setHideOnScroll(true);
            } else {
                // scrolling up
                setHideOnScroll(false);
            }

            lastScrollY = currentY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // When mobile menu is open, force nav visible
    const navClassName = `${styles.navBar} ${
        hideOnScroll && !menuOpen ? styles.navHidden : ""
    }`;

    return (
        <nav className={navClassName}>
            <div className={styles.topNav}>
                <Link href="/" legacyBehavior>
                    <a className={styles.logo}>Syrena and George</a>
                </Link>

                <button
                    className={styles.navButton}
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open navigation menu"
                >
                    <Image
                        src="/images/nav-icon.svg"
                        width={25}
                        height={25}
                        alt="Open menu"
                    />
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
                                            className={
                                                router.pathname === link.href
                                                    ? styles.activeLink
                                                    : ""
                                            }
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button
                            className={styles.closeButton}
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close navigation menu"
                        >
                            <Image
                                src="/images/close-icon.svg"
                                width={25}
                                height={25}
                                alt="Close menu"
                            />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
