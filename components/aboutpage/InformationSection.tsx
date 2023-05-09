
//import next components
import Image from "next/image";

//import images
import firstImageSrc from "../src/assets/images/aboutpage/Imagem-01-Cantos-arredondados.jpg";
import secondImageSrc from "../src/assets/images/aboutpage/Imagem-02-Cantos-arredondados.jpg";
import thirdImageSrc from "../src/assets/images/aboutpage/Imagem-03-Cantos-arredondados.jpg";

//import CSS
import styles from "../../src/styles/aboutpage/AboutPage.module.css";

const InformationSectionAboutPage = () => {

    return (
        <section className={styles.information_section}>
            <div className={styles.each_information_container}>
                <div className={styles.information_text_container}>
                    <h3>Our concept</h3>
                    <p>We are a reference for those who seek to dress and feel good. We listen to people and understand their lifestyle to help each one navigate confidently through the possibilities. Thus, they choose what brings them the most energy and carry that same attitude into life.</p>
                </div>
                <Image
                className={styles.information_section_image}
                    src={firstImageSrc}
                    alt="Real store" />
            </div>
            <div className={styles.each_information_container}>
                <div className={styles.information_text_container}>
                    <h3>Socio-environmental Responsibility</h3>
                    <p>From the use of sustainable raw materials to official certifications for social responsibility and labor relations, we are committed to ethical practices towards our employees, customers, community, and ecosystem. Austral, in addition to being ABVTEX certified, uses BCI® certified cotton, develops products from recycled PET®, and creates collections with 100% of profits dedicated to socio-environmental causes aligned with our purpose.</p>
                </div>
                <Image
                    className={styles.information_section_image}
                    src={secondImageSrc}
                    alt="Man using Austral T-shirt" />
            </div>
            <div className={styles.each_information_container}>
                <div className={styles.information_text_container}>
                    <h3>Product Excellence</h3>
                    <p>We strive for the highest standard of quality in all the products we develop. For us, it&apos;s not just about working with high-quality raw materials. Our creations must also always excel in finishing, be carefully crafted down to the smallest details, and have precise fit. From the product to the packaging, we aim to stand out for the exceptional care we put into everything we produce.</p>
                </div>
                <Image
                    className={styles.information_section_image}
                    src={thirdImageSrc}
                    alt="Some Austral products in display" />
            </div>
        </section>
    )
};

export default InformationSectionAboutPage;