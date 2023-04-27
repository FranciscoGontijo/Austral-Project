
//import react icons
import { IoShirtOutline } from 'react-icons/io5';
import { GiEcology } from 'react-icons/gi';
import { ImLocation } from 'react-icons/im';

//import CSS
import styles from '../../src/styles/aboutpage/AboutPage.module.css';

//import banner image
import bannerImageSrc from '../../src/assets/images/Aboutpage Main Banner.webp.png';

const AboutUsTextBanner = () => {
    return (
        <section className={styles.text_banner_container}>
           <h2>About Austral</h2>
           <p>Austral is the way to dress as it should be: it combines what is important to you with what is essential to the world. That's why we offer a lifestyle-oriented experience through products made with quality and respect. With this compass, people can navigate through life with more confidence, feeling good about themselves and the planet.</p>
           <div className={styles.division_bar}></div>
           <div className={styles.text_banner_information_containers}>
                <div className={styles.information_container}>
                    <IoShirtOutline className={styles.text_banner_icon} />
                    <p className={styles.paragraph_title}>A reference in quality.</p>
                    <p>We seek to stand out through exceptional care in everything we produce.</p>
                </div>
                <div className={styles.information_container}>
                    <GiEcology className={styles.text_banner_icon} />
                    <p className={styles.paragraph_title}>Respect for the environment.</p>
                    <p>We use BCI® certified cotton, recycled PET® fabrics, and develop non-profit collections.</p>
                </div>
                <div className={styles.information_container}>
                    <ImLocation className={styles.text_banner_icon} />
                    <p className={styles.paragraph_title}>Local production.</p>
                    <p>We work with local suppliers who are experts in their fields and undergo regular audits.</p>
                </div>
           </div>
        </section>
    )
};

export default AboutUsTextBanner;