import React from "react";
import styles from "../Experience/Experience.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
export const Experience = () =>{
    return(
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
            {/* This div will contain skills and history */}
                <div className={styles.skills}> {/* SKILLS */}
                    {
                        skills.map((skill, id)=>{
                            return <div  key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}> {/* Only icons div - imgSrc */}
                                    <img src={getImageUrl(skill.imgSrc)} alt={`${skill.title} image`} />
                                </div>
                                <p> {/* Only titles div - titles */}
                                    {`${skill.title}`}
                                </p>
                            </div>
                        })
                    }
                </div>
                <ul className={styles.history}>  {/* HISTORY (JOB/INTERNSHIPS/EXPERIENCES) */}
                    {
                        history.map((historyItem, id)=>{
                            return(
                                <li key={id} className={styles.historyItem}>
                                    <img src={getImageUrl(historyItem.imgSrc)} alt={`${historyItem.organisation} logo`} />
                                    <div className={styles.historyItemDetails}>
                                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul>
                                            {historyItem.experiences.map((exp, id) =>{
                                                return(
                                                    <li key={id}>
                                                        {exp}
                                                    </li>
                                                )
                                            }) }
                                        </ul>
                                    </div>
                                   

                                   
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </section>
    );
}