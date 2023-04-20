
import { useState } from 'react';

import Image from "next/image";
import Link from "next/link";

//import CSS
import styles from "../../src/styles/homepage/HighlightsMobile.module.css";


//import icons from react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//import Banners array from Data mock
import { HighlightBannerArray } from "../../util/data";

const HighlightsMobileHomepage = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextImage = (): void => {
        if (currentIndex === HighlightBannerArray.length - 1) {
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
                        <Link href={HighlightBannerArray[currentIndex].pageHref}>
                            <Image
                                src={HighlightBannerArray[currentIndex].imageSrc}
                                alt="Example Image"
                                className={styles.image}
                            />
                        </Link>
                    </div>
                    <div className={styles.description_container}>
                        <h3>{HighlightBannerArray[currentIndex].descriptionTitle}</h3>
                        <p>{HighlightBannerArray[currentIndex].description}</p>
                        <Link className={styles.see_more_link} href={HighlightBannerArray[currentIndex].pageHref}>See More</Link>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default HighlightsMobileHomepage;