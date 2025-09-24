import Link from 'next/link'
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/rsvp">RSVP</Link></li>
                <li><Link href="/">Wedding Details</Link></li>
                <li><Link href="/">Wedding Attire</Link></li>
                <li><Link href="/">Travel</Link></li>
                <li><Link href="/">Activities</Link></li>
                <li><Link href="/">Activities</Link></li>
                <li><Link href="/">Registry</Link></li>
            </ul>
        </nav>
    )
}