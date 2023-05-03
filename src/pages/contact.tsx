import { useState } from "react";

//import CSS
import styles from "../../src/styles/contactpage/ContactPage.module.css"

const ContactPage = () => {
    const [display, setDisplay] = useState('form');

    return (
        <section className={styles.contact_page}>   
            {display === 'form' && <div className={styles.form_container}>
                <h2>Get in touch</h2>
                <form onSubmit={() => setDisplay('message')}  className={styles.contact_form}>
                    <input type="text"  className={styles.name_input} placeholder="Name" name="user_name" required />
                    <input type="email"  className={styles.email_input} placeholder="Email" name="user_email" required />
                    <textarea className={styles.message_input} placeholder="Message" name="message" required />
                    <button type="submit" value="Send"  className={styles.form_send_button}>SEND MESSAGE</button>
                </form>
            </div>}
            {display === 'message' && <div className={styles.sended_message_section}>
                <h1>Message sent successfully</h1>
                <p>Thank you for getting in touch, as soon as possible I will respond to your message. Cheers</p>
                <button onClick={() => setDisplay('form')}>Back</button>
            </div>}
        </section>
    )
};

export default ContactPage;