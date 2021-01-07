
import styles from "./styles/AboutMe.module.scss"

function AboutMe() {
    return (
        <div className={styles.back} style={{backgroundImage:`url(/Me.jpg)`}}>
            <div className={styles.about}>
                <h2>Get To Know Me</h2>
                <p>I am a full-stack developer who loves to code. I am on a constant lookout for fresh ideas to pick up and new things to learn. 
                    <br/>Space is my ideal destination, Music is where I wander-in, to get lost and Stories are what help me navigate. 
                    <br/> My mantra - "Eager to Start and Determined to Finish."</p>
            </div>
        </div>
    )
}

export default AboutMe
