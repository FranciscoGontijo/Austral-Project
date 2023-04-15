
import { useState } from 'react';

import Image from "next/image";
import Link from "next/link";

//import CSS
import styles from "../src/styles/HighlightsMobile.module.css";


//import icons from react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//import images
import highlightsFirstImageSrc from '../src/assets/images/homepage/Highlights Main.webp';
import highlightsSecondImageSrc from '../src/assets/images/homepage/Highlights T-shirt.webp';
import highlightsThirdImageSrc from '../src/assets/images/homepage/Highlights Jackets.webp';
import highlightsFourthImageSrc from '../src/assets/images/homepage/Highlights Sales.webp';



type CategorieType = {
    imageSrc: any;
    pageHref: string;
    descriptionTitle: string;
    description: string
};

const categoriesArray: CategorieType[] = [
    { imageSrc: highlightsFirstImageSrc, pageHref: '/store', descriptionTitle: 'Winter 23', description: 'Tomorrow não é apenas sobre o futuro, mas também um lembrete de que o presente é o momento de escolher novos caminhos.' },
    { imageSrc: highlightsSecondImageSrc, pageHref: '/store/t-shirts', descriptionTitle: 'T-shirts', description: 'Explore as clássicas camisetas da Austral. Produzidas nacionalmente, com materiais da mais alta qualidade disponível no mercado nacional. O algodão utilizado possui certificação BCI®, garantindo baixo impacto ao meio ambiente.' },
    { imageSrc: highlightsThirdImageSrc, pageHref: '/store/jackets', descriptionTitle: 'Jackets', description: 'Os casacos da Austral, além de se adaptarem a diferentes temperaturas e ocasiões, também são produzidos com tecidos tecnológicos e sustentáveis, que garantem durabilidade e estilo ao mesmo tempo.' },
    { imageSrc: highlightsFourthImageSrc, pageHref: '/salespage', descriptionTitle: 'Sales', description: 'Peças selecionadas com descontos. As promoções da Austral acontecem por tempo limitado. Explore os produtos com oportunidades de compra especiais. Sugerimos o uso de filtros de tamanho para uma melhor navegação.' },
]

const HighlightsMobileHomepage = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextImage = (): void => {
        if (currentIndex === categoriesArray.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex = 0);
            return
        }
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }

    const backImage = (): void => {
        if (currentIndex === 0) {
            setCurrentIndex((prevIndex) => prevIndex = 3);
            return
        }
        setCurrentIndex((prevIndex) => prevIndex - 1);
    }


    return (
        <section className={styles.highlights_container}>
            <div className={styles.text_banner}>
                <h3>Highlights</h3>
                <h2>Explore categories</h2>
            </div>
            <div className={styles.all_categories_container}>
                <IoIosArrowBack onClick={backImage} className={styles.back_arrow} />
                <IoIosArrowForward onClick={nextImage} className={styles.foward_arrow} />

                <div className={styles.categorie_container}>
                    <div className={styles.images_container}>
                        <Link href={categoriesArray[currentIndex].pageHref}>
                            <Image
                                src={categoriesArray[currentIndex].imageSrc}
                                alt="Example Image"
                                className={styles.image}
                            />
                        </Link>
                    </div>
                    <div className={styles.description_container}>
                        <h3>{categoriesArray[currentIndex].descriptionTitle}</h3>
                        <p>{categoriesArray[currentIndex].description}</p>
                        <Link className={styles.see_more_link} href={categoriesArray[currentIndex].pageHref}>See More</Link>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default HighlightsMobileHomepage;