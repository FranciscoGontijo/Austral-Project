
//import next image
import Image from "next/image";

//import CSS
import styles from '../../src/styles/salespage/Salespage.module.css';

//import banner image
import bannerImageSrc from '../../src/assets/images/Sales Main Banner.webp';

const SalesBanner = () => {
    return (
        <section className={styles.banner_container}>
            <Image
                src={bannerImageSrc}
                alt="Store main banner, two guys sharing a sunset"
                className={styles.image}
            />
        </section>
    )
};

export default SalesBanner;