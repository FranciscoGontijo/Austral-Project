import { useState } from "react";

//import react icons
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

//import CSS
import styles from "../../src/styles/contactpage/ContactPage.module.css"

const ContactPage = () => {
    const [display, setDisplay] = useState('form');

    return (
        <section className={styles.contact_page}>
            {display === 'form' && <div className={styles.form_container}>
                <h2>Get in touch</h2>
                <form onSubmit={() => setDisplay('message')} className={styles.contact_form}>
                    <input type="text" className={styles.name_input} placeholder="Name" name="user_name" required />
                    <input type="email" className={styles.email_input} placeholder="Email" name="user_email" required />
                    <textarea className={styles.message_input} placeholder="Message" name="message" required />
                    <button type="submit" value="Send" className={styles.form_send_button}>SEND MESSAGE</button>
                </form>
            </div>}
            {display === 'message' && <div className={styles.sended_message_section}>
                <h1>Message sent successfully</h1>
                <p>This is just a simulation, if you want to get in touch with the developer use this <a href="https://www.linkedin.com/in/francisco-gontijo-5a469b239/" target="_blank">link</a> or send an email to franciscoacmg@gmail.com</p>
                <div>
                    <a href="https://github.com/FranciscoGontijo"><FaGithub className={styles.social_icons}/></a>
                    <a href="https://www.linkedin.com/in/francisco-alexandre-cardoso-melo-gontijo-5a469b239/"><FaLinkedinIn className={styles.social_icons}/></a>
                </div>
                <button onClick={() => setDisplay('form')}>Back</button>
            </div>}
        </section>
    )
};

export default ContactPage;