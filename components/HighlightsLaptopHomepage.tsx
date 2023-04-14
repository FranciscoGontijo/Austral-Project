
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
import styles from "../src/styles/HighlightsLaptop.module.css";

//set 2 diferents state ish



const HighlightsLaptopHomepage = () => {
    const [container, setContainer] = useState<string>('first container');

    const [firstImageSrc, setFirstImageSrc] = useState(highlightsFirstImageSrc);
    const [firstPageHref, setFirstPageHref] = useState<string>('/store')
    const [firstDescriptionTitle, setFirstDescriptionTitle] = useState<string>('Winter 23');
    const [firstDescription, setFirstDescription] = useState<string>('Tomorrow não é apenas sobre o futuro, mas também um lembrete de que o presente é o momento de escolher novos caminhos.')
    
    const [secondImageSrc, setSecondImageSrc] = useState(highlightsSecondImageSrc);
    const [secondPageHref, setSecondPageHref] = useState<string>('/store/t-shirts')
    const [secondDescriptionTitle, setSecondDescriptionTitle] = useState<string>('T-shirts');
    const [secondDescription, setSecondDescription] = useState<string>('Explore as clássicas camisetas da Austral. Produzidas nacionalmente, com materiais da mais alta qualidade disponível no mercado nacional. O algodão utilizado possui certificação BCI®, garantindo baixo impacto ao meio ambiente.')


    const nextContainer = (): void => {
        if (container === 'first container') {
            //First Image
            setFirstImageSrc(highlightsThirdImageSrc);
            setFirstPageHref('/store/jackets');
            setFirstDescriptionTitle('Jackets');
            setFirstDescription('Os casacos da Austral, além de se adaptarem a diferentes temperaturas e ocasiões, também são produzidos com tecidos tecnológicos e sustentáveis, que garantem durabilidade e estilo ao mesmo tempo.');

            //Second Image
            setSecondImageSrc(highlightsFourthImageSrc);
            setSecondPageHref('/salespage');
            setSecondDescriptionTitle('Sales');
            setSecondDescription('Peças selecionadas com descontos. As promoções da Austral acontecem por tempo limitado. Explore os produtos com oportunidades de compra especiais. Sugerimos o uso de filtros de tamanho para uma melhor navegação.');
            
            //Set Container
            setContainer('second container');
            return
        }
        if (container === 'second container') {
            //First Image
            setFirstImageSrc(highlightsFirstImageSrc);
            setFirstPageHref('/store');
            setFirstDescriptionTitle('Winter 23');
            setFirstDescription('Tomorrow não é apenas sobre o futuro, mas também um lembrete de que o presente é o momento de escolher novos caminhos.');

            //Second Image
            setSecondImageSrc(highlightsSecondImageSrc);
            setSecondPageHref('/salespage');
            setSecondDescriptionTitle('Sales');
            setSecondDescription('Explore as clássicas camisetas da Austral. Produzidas nacionalmente, com materiais da mais alta qualidade disponível no mercado nacional. O algodão utilizado possui certificação BCI®, garantindo baixo impacto ao meio ambiente.');
            
            //Set Container 
            setContainer('first container');
            return
        }
    }

    return (
        <section className={styles.highlights_container}>
            <div className={styles.text_banner}>
                <h3>Highlights</h3>
                <h2>Explore categories</h2>
            </div>
            <div className={styles.all_categories_container}>
                <IoIosArrowBack className={styles.back_arrow} />
                <IoIosArrowForward onClick={nextContainer} className={styles.foward_arrow} />
                <div className={styles.categorie_container}>
                    <div className={styles.images_container}>
                        <Link href={firstPageHref}>
                            <Image
                                src={firstImageSrc}
                                alt="Example Image"
                                className={styles.image}
                            />
                        </Link>
                    </div>
                    <div className={styles.description_container}>
                        <h3>{firstDescriptionTitle}</h3>
                        <p>{firstDescription}</p>
                        <Link className={styles.see_more_link} href={firstPageHref}>See More</Link>
                    </div>
                </div>
                <div className={styles.categorie_container}>
                    <div className={styles.images_container}>

                        <Link href={secondPageHref}>
                            <Image
                                src={secondImageSrc}
                                alt="Example Image"
                                className={styles.image}
                            />
                        </Link>
                    </div>
                    <div className={styles.description_container}>
                        <h3>{secondDescriptionTitle}</h3>
                        <p>{secondDescription}</p>
                        <Link className={styles.see_more_link} href={secondPageHref}>See More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HighlightsLaptopHomepage;