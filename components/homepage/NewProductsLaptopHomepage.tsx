
import { useState } from 'react';

import Image from "next/image";
import Link from "next/link";

//import icons from react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


//import CSS
import styles from '../../src/styles/homepage/NewProductsLaptop.module.css';

//import products
import { data, ProductType } from '../../util/data';

const newProductsArray: ProductType[] = data.products.filter((product) => product.new)

//COMPONENT
const NewProductsLaptop = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextContainer = (): void => {
            setCurrentIndex((prevIndex) => prevIndex === 0 ? 4 : 0);

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
                {newProductsArray.slice(currentIndex, currentIndex + 4).map((product, index) => {
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
        </section>
    )
};

export default NewProductsLaptop;