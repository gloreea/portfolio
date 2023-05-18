// @ symbol means start in project root directory (aka where package.json is)
import styles from "@/styles/About.module.css"
import { useState } from "react"
// special next js images that speed up SSR caching
import Image from "next/image"

export default function About() {
    const [fontSize, setFontSize] = useState(3)
    return (
        <div>
            {/* styled jsx example */}
            <style jsx> {`
                .bigHeader {
                    font-size: ${fontSize}rem;
                }
            `}</style>
            <h1 className ="bigHeader"> About Me</h1>

            <button onClick= {() => setFontSize(fontSize + 1)}>++</button>

            <p className ={styles.greenText}> I am a super rad software enginner now, I code, eat, sleep, code!</p>

            {/* local images are stored in @/public */}
            {/* regular <img /> tags work as well, if you cannot provide a width and height */}
            <Image 
                src="/next.svg"
                alt="next logo"
                // next Image components NEED a predefined height and width
                width ={400}
                height={600}
            />

            {/* using another hosting domain for images */}
            <Image 
                src="https://placekitten.com/450/450"
                alt=" image of a magnificent cat"
                width={450}
                height={450}
            />
        </div>
    )
}