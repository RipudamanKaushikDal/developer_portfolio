import styles from './styles/Projects.module.scss'
import React,{useState} from "react"
import Image from "next/image"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Projects() {


    const [showProject,setShowProject] = useState(false)


    return (
        <div className={styles.Projects}>

            <section className={styles.cardHolder}>
                <div className={styles.card} onClick={() => setShowProject(!showProject)}>
                    <header>
                        Project Name
                    </header>
                </div>
                <div className={styles.card}>
                    <header>
                        Project Name
                    </header>
                </div>
                <div className={styles.card}>
                    <header>
                        Project Name
                    </header>
                </div>
                <div className={styles.card}>
                    <header>
                        Project Name
                    </header>
                </div>
                <div className={styles.card}>
                    <header>
                        Project Name
                    </header>
                </div>
            </section>
            
            {showProject ? (
                <section className={styles.projectDetails}>

                    <div className={styles.photoSlider}>
                        <Carousel infiniteLoop={true} showStatus={false} width="620px" showThumbs={false} >

                            <div>
                                <Image src="/hero.jpg" width={640} height={420} objectFit="contain" />
                            </div>
                            
                            <div>
                                <Image src="/Mail Screen.PNG" width={640} height={420} objectFit="contain" />
                            </div>
                        </Carousel>
                    </div>
                    
                    <div className={styles.projectDescription}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique animi ab dolores aspernatur laboriosam facere, minus non odio aperiam, ipsum nemo nobis. Dolore nulla ut, quibusdam quo velit officia ipsum?
                        </p>
                    </div>    
                </section>
            ) :
            (<section className={styles.placeholder}>

                <h1>Click On Projects To Display</h1>

            </section>)}
        </div>
    )
}

export default Projects
