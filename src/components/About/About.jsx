
import React from "react";
import styles from "../About/About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return(
       <section className={styles.container} id="about">
        {/* Heading h2 */}
        <h2 className={styles.title}>About</h2> 
        {/* Image -  left-hand-side */}
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="profile-photo" />
       
            <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/frontendIcon.png")} alt="frontend-dev" />
                <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>As a dedicated Frontend Developer, I bring a passion for crafting immersive user experiences through innovative web solutions. With a solid foundation in frontend technologies and a commitment to continuous learning, I'm poised to contribute fresh perspectives and drive impactful projects forward.</p>
                </div>
            </li>
           

             {/* --------------------------------- */}
             <li className={styles.aboutItem}>
                <img src={getImageUrl("about/javaprogrammerIcon.png")} alt="Java-programmer" />
                <div className={styles.aboutItemText}>
                <h3>Java Programmer</h3>
                <p> As a dedicated entry-level Java Programmer, I bring a robust foundation in Java programming and a drive for continuous improvement to deliver efficient and reliable software solutions. Eager to contribute my skills to dynamic projects and collaborate effectively within a professional development environment.</p>
                </div>
             </li>
            
            {/* --------------------------------- */}

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/socialmediadesignerIcon.png")} alt="social-media-designer" />
            <div className={styles.aboutItemText}>
                <h3>Social Media Designer</h3>
                <p>  As an experienced Social Media Designer, I combine creativity with strategic insight to craft visually captivating content that engages and resonates with target audiences. 
            </p>
            </div>
            </li>
            
        </ul>
        </div>
    </section>
    )
}
// export default About;