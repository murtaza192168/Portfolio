import React from "react"
import { getImageUrl } from "../../utils"
import styles from "./Contact.module.css"

export const Contact = () => {
    return (

        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2 className={styles.title}>Contact</h2>
                <p className={styles.description}>Feel free to contact me at your convenience!</p>
            </div>

            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon" />
                    <a href="mailto: murtaza.3118033.co@mhssce.ac.in">Mail me</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="github-icon" />
                    <a href="https://github.com/murtaza192168">Github</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin-icon" />
                    <a href="https://www.linkedin.com/in/murtaza-shabbir-masalawala/">Linkedin</a>
                </li>
            </ul>
        </footer>
    )
} 