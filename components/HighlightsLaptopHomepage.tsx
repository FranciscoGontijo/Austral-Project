
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

type ProductType = {
    imageSrc: any;
    pageHref: string;
    descriptionTitle: string;
    description: string
};

const productsArray: ProductType[] = [
    { imageSrc: highlightsFirstImageSrc, pageHref: '/store', descriptionTitle: 'Winter 23', description: 'Tomorrow não é apenas sobre o futuro, mas também um lembrete de que o presente é o momento de escolher novos caminhos.' },
    { imageSrc: highlightsSecondImageSrc, pageHref: '/store/t-shirts', descriptionTitle: 'T-shirts', description: 'Explore as clássicas camisetas da Austral. Produzidas nacionalmente, com materiais da mais alta qualidade disponível no mercado nacional. O algodão utilizado possui certificação BCI®, garantindo baixo impacto ao meio ambiente.' },
    { imageSrc: highlightsThirdImageSrc, pageHref: '/store/jackets', descriptionTitle: 'Jackets', description: 'Os casacos da Austral, além de se adaptarem a diferentes temperaturas e ocasiões, também são produzidos com tecidos tecnológicos e sustentáveis, que garantem durabilidade e estilo ao mesmo tempo.' },
    { imageSrc: highlightsFourthImageSrc, pageHref: '/salespage', descriptionTitle: 'Sales', description: 'Peças selecionadas com descontos. As promoções da Austral acontecem por tempo limitado. Explore os produtos com oportunidades de compra especiais. Sugerimos o uso de filtros de tamanho para uma melhor navegação.' },
]


//import CSS
import styles from "../src/styles/HighlightsLaptop.module.css";


const HighlightsLaptopHomepage = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextContainer = (): void => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? 2 : 0);
    }


    return (
        <section className={styles.highlights_container}>
            <div className={styles.text_banner}>
                <h3>Highlights</h3>
                <h2>Explore categories</h2>
            </div>
            
            <div className={styles.all_categories_container}>
                <IoIosArrowBack onClick={nextContainer} className={styles.back_arrow} />
                <IoIosArrowForward onClick={nextContainer} className={styles.foward_arrow} />
                {productsArray.slice(currentIndex, currentIndex + 2).map((product) => {
                    return (
                        <div className={styles.categorie_container}>
                            <div className={styles.image_container}>
                                <Link className={styles.link} href={product.pageHref}>
                                    <Image
                                        src={product.imageSrc}
                                        alt='test image'
                                        className={styles.image}
                                    />
                                </Link>
                            </div>
                            <div className={styles.description_container}>
                            <h3>{product.descriptionTitle}</h3>
                            <p>{product.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section >
    )
};

export default HighlightsLaptopHomepage;