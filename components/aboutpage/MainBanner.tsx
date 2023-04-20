
//import next image
import Image from "next/image";

//import CSS
import styles from '../../src/styles/aboutpage/AboutPage.module.css';

//import banner image
import bannerImageSrc from '../../src/assets/images/Aboutpage Main Banner.webp.png';

const AboutUsBanner = () => {
    return (
        <section className={styles.banner_container}>
            <Image
                src={bannerImageSrc}
                alt="Store main banner, two guys sharing a sunset"
                className={styles.image}
            />
             <div className={styles.banner_text_container}>
                <h1>About us</h1>
            </div>
        </section>
    )
};

export default AboutUsBanner;