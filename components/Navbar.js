import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Home</Link>

            <Link href="/about">About Me</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}