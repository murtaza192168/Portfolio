import React from "react";
import { getImageUrl } from "../../utils"
import styles from "./ProjectCard.module.css"

export const ProjectCard = ({ 
    project: {title, imgSrc, description, skills, demo, source } 
                           }) =>
{
    // const project = this.props.project
    return (

        <div className={styles.container}>
                        <img className={styles.image} src={getImageUrl(imgSrc)} alt={`Image of ${title}`} />
                        <h3 className={styles.title}>{`${title}`}</h3>
                        <p className={styles.description}>{`${description}`}</p>
                        {/* For skills we will use unordered list */}
                        <ul className={styles.skills}>
                            {
                                skills.map((skill, id) => {
                                  return(<li className={styles.skill} key={id}>{`${skill}`}</li>)
                                })
                            }
                        </ul>
                        <div className={styles.links}>
                            <a className={styles.link} href={`${demo}`}>Demo</a>
                            <a className={styles.link} href={`${source}`}>Source</a>
                        </div>
        </div>

    )
}