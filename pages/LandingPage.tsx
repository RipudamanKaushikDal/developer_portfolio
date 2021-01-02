import React from 'react';
import styles from "./styles/LandingPage.module.scss";


function LandingPage() {

    return (
        <div className={styles.mainContainer}>  

            <div className={styles.leftContainer}>
        
                <div className={styles.overlay}/>


                <div>
                    <h1> Creating The <br /> Imagination</h1>
                </div>

            </div>

            <div className={styles.rightContainer}>

                <div className={styles.intro} >
                    <h1><span>Hi, I am</span><br/>Ripudaman <br/>Kaushik</h1>
                </div>
                <div className={styles.slider}><span></span></div>
                <div className={styles.arrow}><span></span></div>
                
            </div>

            

        </div>
    )
}

export default LandingPage
