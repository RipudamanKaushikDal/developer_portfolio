import LandingPage from "./LandingPage";
import Projects from "./Projects";
import styles from "./styles/Index.module.scss"

export default function Home() {
  return (

    <div className={styles.global} >
      
      <LandingPage />
      <Projects />

    </div>
  )
}
