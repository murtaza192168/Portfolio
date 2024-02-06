// create a folder named components inside src folder.
// create a folder named Navbar inside components
// Inide Navbar folder, create two files: Navbar.jsx, Navbar.module.css

import React, {useState, useEffect} from "react" // useState: bcz we need to keep track of whether hamburger menu is open or not
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils" // function importing: getImageUrl

export const Navbar = () => {
  // // creating a functionality for Navbar
  // const[isHidden, setIsHidden] = useState(false) //useState for navbar. It is false for now
  // const[lastScrollTop, setLastScrollTop] = useState(0)
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  //     setIsHidden(currentScroll > lastScrollTop && currentScroll > 0)
  //     setLastScrollTop(currentScroll <= 0 ? 0: currentScroll)
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return() => {
  //     window.removeEventListener('scroll',handleScroll)
  //   }
  // }, [lastScrollTop])

  const[menuOpen, setMenuOpen] = useState(false) // useState is false bcz we want to navbar to be hidden BY DEFAULT
  return (
    <nav className={`${styles.navbar} ${styles.isHidden ? 'hidden' : 'fixed'}`}> 
  {/* nav: a semantic html tag that behaves just like a div tag but has a special name that let the browswer know what its function is */}
      <a className={styles.title} href="/">Portfolio</a> 
      {/* "/": means it will navigate us to the homepage */}
      <div className={styles.menu}>
        <img className={styles.menuBtn}  
        src={ menuOpen?getImageUrl("nav/closeIcon.png"):getImageUrl("nav/menuIcon.png")} alt="" 
        onClick={() => setMenuOpen(!menuOpen)}
        />
        {  /* FOR menuItems TO BE VISIBLE ACC. TO onClick func*/
        /* ${styles.menuItems}: this string interperation is same as before but in order to apply conditions and incorporating the functionality cond. we need to write in this way
        ${menuOpen && styles.menuOpen}: means that if menuOpen is true then only the styles.menuOpen will be applied
                else if menuOpen is false then styles.menuOpen will not be applied */}
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}> 
                 {/* now give style to menuOpen in Navbar.module.css so that the functionality is showed up */}
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        {/* "#" means it wil navigate to that section on same page */}
      </div>
    </nav>
  )
}
