
//import products
import { useState } from 'react';

//import next components
import Image from "next/image";
import Link from "next/link";

//import icons from react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//import CSS 
import styles from '../../src/styles/store/ProductPage.module.css'

//import products
import { data, ProductType } from '../../util/data';

type PropsType = {
    related: string[]
}

const RelatedProducts = (props: PropsType) => {
    const { related } = props;

    console.log(related);

    let relatedProducts: ProductType[] = [];
    relatedProducts = data.products.filter(({ productId }) => related?.includes(productId));

    // missing one products on product 1
    console.log(relatedProducts);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextContainer = (): void => {
        if (currentIndex === relatedProducts.length - 2) {
            setCurrentIndex((prevIndex) => prevIndex = 0);
            return
        }
        setCurrentIndex((prevIndex) => prevIndex + 2);
    }

    const backContainer = (): void => {
        if (currentIndex === 0) {
            setCurrentIndex((prevIndex) => prevIndex = relatedProducts.length - 2);
            return
        }
        setCurrentIndex((prevIndex) => prevIndex - 2);
    }

    return (
        <div className={styles.all_products_container}>
            <IoIosArrowBack onClick={backContainer} className={styles.back_arrow} />
            <IoIosArrowForward onClick={nextContainer} className={styles.foward_arrow} />
            {relatedProducts.slice(currentIndex, currentIndex + 2).map((product, index) => {
                return (
                    <div key={index} className={styles.product_container}>
                        <Link className={styles.link} href={`/store/${product.productId}`}>
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
    )
};

export default RelatedProducts;