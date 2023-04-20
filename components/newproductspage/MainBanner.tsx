


//import next image
import Image from "next/image";

//import CSS
import styles from '../../src/styles/newproducts/NewProducts.module.css';

//import banner image
import bannerImageSrc from '../../src/assets/images/Store Main Banner.png';

const NewProductsBanner = () => {
    return (
        <section className={styles.banner_container}>
            <Image
                src={bannerImageSrc}
                alt="Store main banner, two guys sharing a sunset"
                className={styles.image}
            />
            <div className={styles.banner_text_container}>
                <h3>EXPLORE</h3> 
                <h1>Online Store</h1>
            </div>
        </section>
    )
};

export default NewProductsBanner;