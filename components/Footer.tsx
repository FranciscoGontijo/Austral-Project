//import next elements
import Link from "next/link";

//import CSS
import styles from '../src/styles/Footer.module.css';

//import icons
import { BsTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { FiMail } from 'react-icons/fi';
import { TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialFacebook } from 'react-icons/ti';


const Footer = () => {
    return (
        <section className={styles.footer_section}>
            <div className={styles.info_container}>
                <h2>austral</h2>
                <div className={styles.adress_container}>
                    <ImLocation /><span>Anzac parade</span>
                    <p>Sydney, 2035</p>
                    <p>NSW, Australia</p>
                </div>
                <div className={styles.contact_container}>
                    <BsTelephoneFill /><span>(123) 456 789</span>
                    <br />
                    <FiMail /><span>contact@domain.com</span>
                </div>
            </div>
            <div className={styles.info_container}>
                <h2>Company</h2>
                <Link href='/about'><p>About Us</p></Link>
                <Link href='/about'></Link><p>Contact Us</p>
            </div>
            <div className={styles.info_container}>
                <h2>Quick Links</h2>
                <Link href='/store'></Link><p>Store</p>
                <Link href='/salespage'></Link><p>Sales</p>
                <Link href='/newproductspage'></Link><p>New products</p>
            </div>
            <div className={styles.info_container}>
                <h2>Let's stay in touch</h2>
                <div className={styles.social_container}>
                    <TiSocialFacebook />
                    <TiSocialInstagram />
                    <TiSocialLinkedin />
                    <TiSocialTwitter />
                </div>
            </div>
        </section>
    )
};

export default Footer;