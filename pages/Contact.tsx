import styles from "./styles/Contact.module.scss"

function Contact() {
    return (
        <div className={styles.formContainer}>
            <h2>Reach Out</h2>
            <form className={styles.form}>
                <div className={styles.fields}>
                    <input type="text" name="fullname" required />
                    <span className={styles.labels}>Full Name</span>
                    <span className={styles.line}></span>
                </div>
                <div className={styles.fields}>
                    <input type="text" name="email" required />
                    <span className={styles.labels}>Email</span>
                    <span className={styles.line}></span>
                </div>
                <div className={styles.fields}>
                    <textarea  name="message" required rows={4}/>
                    <span className={styles.labels}>Message</span>
                    <span className={styles.line}></span>
                </div>
                <input type="submit" value="Submit" className={styles.submit} />
            </form>
            
        </div>
    )
}

export default Contact
