import AboutME from "./AboutME";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from"./Contact";
import styles from "./styles/Index.module.scss"

export default function Home() {
  return (

    <div className={styles.global} >
      
      <LandingPage />
      <Projects />
      <AboutMe />
      <Contact />

    </div>
  )
}
