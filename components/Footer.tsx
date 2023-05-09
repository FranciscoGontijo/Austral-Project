//import next elements
import Link from "next/link";

//import CSS
import styles from '../src/styles/Footer.module.css';

//import icons
import { BsTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'


const Footer = () => {
    return (
        <section className={styles.footer_section}>
            <div className={styles.info_container}>
                <h2>austral</h2>
                <div className={styles.adress_container}>
                    <ImLocation /><span> Maroubra</span>
                    <p>Sydney, 2035</p>
                    <p>NSW, Australia</p>
                </div>
                <div className={styles.contact_container}>
                    <BsTelephoneFill /><span>(123) 456 789</span>
                    <br />
                    <FiMail /><span>franciscoacmg@gmail.com</span>
                </div>
            </div>
            <div className={styles.info_container}>
                <h2>Company</h2>
                <Link href='/about'><p>About Us</p></Link>
                <Link href='/contact'><p>Contact Us</p></Link>
            </div>
            <div className={styles.info_container}>
                <h2>Quick Links</h2>
                <Link href='/store'><p>Store</p></Link>
                <Link href='/salespage'><p>Sales</p></Link>
                <Link href='/newproductspage'><p>New products</p></Link>
            </div>
            <div className={styles.info_container}>
                <h2>Let&apos;s stay in touch</h2>
                <div className={styles.social_container}>
                    <a href="https://github.com/FranciscoGontijo" target="_blank"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/francisco-gontijo-5a469b239/" target="_blank"><FaLinkedinIn /></a>
                </div>
            </div>
        </section>
    )
};

export default Footer;