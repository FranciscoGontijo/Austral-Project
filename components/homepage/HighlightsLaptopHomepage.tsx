
import { useState } from 'react';

import Image from "next/image";
import Link from "next/link";

//import icons from react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//import Banners array from Data mock
import { HighlightBannerArray } from "../../util/data";


//import CSS
import styles from "../../src/styles/homepage/HighlightsLaptop.module.css";


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
                {HighlightBannerArray.slice(currentIndex, currentIndex + 2).map((product, index) => {
                    return (
                        <div key={index} className={styles.categorie_container}>
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