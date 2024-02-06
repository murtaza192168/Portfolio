
import styles from'./App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
 

  return ( // to provide STYLING TO OUR APP
    // instead of passing a string like this; className="".. we will use variables. see.. className{}
    // now we will give style to the .App class in  (define it in) App.module.css file
     <div className={styles.App}>     
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      
      
    </div>
    // fragments: <>...</>
  )
}

export default App;
