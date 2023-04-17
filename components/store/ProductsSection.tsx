import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

//import products
import { data, ProductType } from '../../util/data';

//import CSS
import styles from '../../src/styles/ProductsSection.module.css';

const ProductsSection = () => {
    const [categorie, setCategorie] = useState<string>("");
    const [filteredProductsArray, setFilteredProductsArray] = useState<ProductType[]>(data.products);
    const [sortProducts, setSortProducts] = useState<string>('');

    //Filter button
    const handleCategoriesFilter = (): void => {
        if (categorie === 'All' || categorie === '') {
            setFilteredProductsArray(prevProductsArray => prevProductsArray = data.products);
            return
        }
        if (categorie !== 'All') {
            let array: ProductType[] = data.products.filter(product => product.categorie === categorie);
            setFilteredProductsArray(prevProductsArray => prevProductsArray = array);
        }
    };

    useEffect(() => {
        handleCategoriesFilter();
        setSortProducts(prevSort => prevSort = '');
    }, [categorie]);


    //Sort button (not working properly)
    const handleSortProducts = (): void => {
        if (sortProducts === '') {
            return
        }
        if (sortProducts === 'Price min to max') {
            setFilteredProductsArray(array => [...array].sort((productA, productB) => (productA.price > productB.price ? 1 : -1)));
        }
        if (sortProducts === 'Price max to min') {
            setFilteredProductsArray(array => [...array].sort((productA, productB) => (productA.price < productB.price ? 1 : -1)));        }
    };

    useEffect(() => {
        handleSortProducts();
    }, [sortProducts]);



    return (
        <section className={styles.products_section_container}>
            <select
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}>
                <option value="" disabled>Filter per categorie</option>
                <option value='All'>All</option>
                <option value='Hoodie'>Hoodie</option>
                <option value='T-shirt'>T-Shirt</option>
                <option value='Sweatshirt'>Sweatshirt</option>
                <option value='Shirt'>Shirt</option>
                <option value='Swimshorts'>Swimshorts</option>
            </select>
            <select
                value={sortProducts}
                onChange={(e) => setSortProducts(e.target.value)}>
                <option value="" disabled>Sort by</option>
                <option value='Price min to max'>Price (min to max)</option>
                <option value='Price max to min'>Price (max to min)</option>
            </select>
            <div className={styles.all_products_container}>
                {filteredProductsArray.map((product) => {
                    return (
                        <div key={product.key} className={styles.product_container}>
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

export default ProductsSection;