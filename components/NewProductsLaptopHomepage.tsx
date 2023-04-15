
import { useState } from 'react';

import Image from "next/image";
import Link from "next/link";

//import icons from react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


//import CSS
import styles from '../src/styles/NewProductsLaptop.module.css';

//import images
import swimshortsMiramarGreenSrc from '../src/assets/images/homepage/Swimshorts Miramar green.webp';
import hoodieJourneyOffWhiteSrc from '../src/assets/images/homepage/Hoodie Journey off white.webp';
import tshirtJungleStoneBlackSrc from '../src/assets/images/homepage/T-Shirt Jungle Stone green.webp';
import tshirtJourneyStoneBlackSrc from '../src/assets/images/homepage/T-Shirt Journey Stone black.webp';
import sweatshirtStatueBlackSrc from '../src/assets/images/homepage/Sweatshirt Statue navy.webp';
import tshirtTimeStoneBlueSrc from '../src/assets/images/homepage/T-Shirt Time Stone blue.webp';
import hoodieNuestroNavySrc from '../src/assets/images/homepage/Hoodie Nuestro navy.webp';
import shirtHawkeBlackSrc from '../src/assets/images/homepage/Shirt Hawke black.webp';

type ProductType = {
    imageSrc: any;
    pageHref: string;
    name: string;
    price: number
};

const productsArray: ProductType[] = [
    { imageSrc: swimshortsMiramarGreenSrc, pageHref: '/', name: 'Swimshorts Miramar green', price: 80 },
    { imageSrc: hoodieJourneyOffWhiteSrc, pageHref: '/', name: 'Hoodie Journey off white', price: 120 },
    { imageSrc: tshirtJungleStoneBlackSrc, pageHref: '/', name: 'T-Shirt Jungle Stone green', price: 50 },
    { imageSrc: tshirtJourneyStoneBlackSrc, pageHref: '/', name: 'T-Shirt Journey Stone black', price: 50 },
    { imageSrc: sweatshirtStatueBlackSrc, pageHref: '/', name: 'Sweatshirt Statue black', price: 120 },
    { imageSrc: tshirtTimeStoneBlueSrc, pageHref: '/', name: 'T-Shirt Time Stone blue', price: 50 },
    { imageSrc: hoodieNuestroNavySrc, pageHref: '/', name: 'Hoodie Nuestro navy', price: 120 },
    { imageSrc: shirtHawkeBlackSrc, pageHref: '/', name: 'Shirt Hawke black', price: 100 }
]

//COMPONENT
const NewProductsLaptop = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextContainer = (): void => {
        if (currentIndex === productsArray.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex = 0);
            return
        }
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }

    return (
        <section className={styles.new_products_section}>
            <div className={styles.text_banner}>
                <h3>New Products</h3>
                <h2>Main releases</h2>
            </div>
            <div className={styles.all_products_container}>
                <IoIosArrowBack onClick={nextContainer} className={styles.back_arrow}/>
                <IoIosArrowForward onClick={nextContainer} className={styles.foward_arrow}/>
                {productsArray.slice(currentIndex, currentIndex + 4).map((product) => {
                    return (
                        <div className={styles.product_container}>
                            <Link className={styles.link} href={product.pageHref}>
                                <div className={styles.image_container}>
                                <Image
                                    src={product.imageSrc}
                                    alt='test image'
                                    className={styles.image}
                                />
                                </div>
                            </Link>
                            <h3>{product.name}</h3>
                            <h2>AU$ {product.price}.00</h2>
                        </div>
                    )
                })}
            </div>
        </section>
    )
};

export default NewProductsLaptop;