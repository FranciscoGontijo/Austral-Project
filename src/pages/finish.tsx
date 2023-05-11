import type { NextPage } from 'next';

//import next components 
import Link from "next/link"

//import CSS
import styles from "../styles/finishpage/FinishPage.module.css";

//use github, linkedln links
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const FinishPage: NextPage = () => {

    return (
        <section className={styles.finish_page}>
            <div className={styles.finish_page_banner}>
                <h1>Bye Bye and Thank you!</h1>
                <h4>I hope you had a nice experience using the Austral store.</h4>
                <p>This is a portfolio project to showcase skills using next.js, TypeScript, React and Redux.</p>
                <div className={styles.social_icons_container}>
                    <a href="https://github.com/FranciscoGontijo" target="_blank"><FaGithub className={styles.social_icon} /></a>
                    <a href="https://www.linkedin.com/in/francisco-gontijo-5a469b239/" target="_blank"><FaLinkedinIn className={styles.social_icon} /></a>
                    <a href="#"></a><button>Portfolio</button>
                </div>
                <Link className={styles.link} href="/"><button className={styles.back_button}>Back</button></Link>
            </div>
        </section>
    )
};

export default FinishPage;