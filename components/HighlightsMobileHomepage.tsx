
import { useState } from 'react';

import Image from "next/image";
import Link from "next/link";

//import icons from react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//import images
import highlightsFirstImageSrc from '../src/assets/images/homepage/Highlights Main.webp';
import highlightsSecondImageSrc from '../src/assets/images/homepage/Highlights T-shirt.webp';
import highlightsThirdImageSrc from '../src/assets/images/homepage/Highlights Jackets.webp';
import highlightsFourthImageSrc from '../src/assets/images/homepage/Highlights Sales.webp';


//import CSS
import styles from "../src/styles/HighlightsMobile.module.css";


const HighlightsMobileHomepage = () => {
    const [imageSrc, setImageSrc] = useState(highlightsFirstImageSrc);
    const [pageHref, setPageHref] = useState('/store')
    const [descriptionTitle, setDescriptionTitle] = useState('Winter 23');
    const [description, setDescription] = useState('Tomorrow não é apenas sobre o futuro, mas também um lembrete de que o presente é o momento de escolher novos caminhos.')

    //    const nextImage = (imageSrc, highlightsFirstImageSrc, highlightsSecondImageSrc, highlightsThirdImageSrc, highlightsFourthImageSrc, setImageSrc, setPageHref, setDescriptionTitle, setDescription) => {
    const nextImage = () => {
        if (imageSrc === highlightsFirstImageSrc) {
            setImageSrc(highlightsSecondImageSrc);
            setPageHref('/store/t-shirts');
            setDescriptionTitle('T-shirts');
            setDescription('Explore as clássicas camisetas da Austral. Produzidas nacionalmente, com materiais da mais alta qualidade disponível no mercado nacional. O algodão utilizado possui certificação BCI®, garantindo baixo impacto ao meio ambiente.');
        } else if (imageSrc === highlightsSecondImageSrc) {
            setImageSrc(highlightsThirdImageSrc);
            setPageHref('/store/jackets');
            setDescriptionTitle('Jackets');
            setDescription('Os casacos da Austral, além de se adaptarem a diferentes temperaturas e ocasiões, também são produzidos com tecidos tecnológicos e sustentáveis, que garantem durabilidade e estilo ao mesmo tempo.');
        } else if (imageSrc === highlightsThirdImageSrc) {
            setImageSrc(highlightsFourthImageSrc);
            setPageHref('/salespage');
            setDescriptionTitle('Sales');
            setDescription('Peças selecionadas com descontos. As promoções da Austral acontecem por tempo limitado. Explore os produtos com oportunidades de compra especiais. Sugerimos o uso de filtros de tamanho para uma melhor navegação.');
        }
        else if (imageSrc === highlightsFourthImageSrc) {
            setImageSrc(highlightsFirstImageSrc);
            setPageHref('/store');
            setDescriptionTitle('Winter 21');
            setDescription('Tomorrow não é apenas sobre o futuro, mas também um lembrete de que o presente é o momento de escolher novos caminhos.');
        }
    };

    return (
        <section className={styles.highlights_container}>
            <div className={styles.text_banner}>
                <h3>Highlights</h3>
                <h2>Explore categories</h2>
            </div>
            <div className={styles.all_categories_container}>
                <div className={styles.categorie_container}>
                    <div className={styles.images_container}>
                        <IoIosArrowBack className={styles.back_arrow} />
                        <IoIosArrowForward onClick={nextImage} className={styles.foward_arrow} />
                        <Link href={pageHref}>
                            <Image
                                src={imageSrc}
                                alt="Example Image"
                                className={styles.image}
                            />
                        </Link>
                    </div>
                    <div className={styles.description_container}>
                        <h3>{descriptionTitle}</h3>
                        <p>{description}</p>
                        <Link className={styles.see_more_link} href={pageHref}>See More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HighlightsMobileHomepage;