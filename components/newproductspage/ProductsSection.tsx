//import react hooks
import { useState, useEffect } from 'react';

//import components
import FilterComponent from './FilterComponent';

//import next components
import Link from 'next/link';
import Image from 'next/image';

//import products
import { data, ProductType } from '../../util/data';

//import CSS
import styles from '../../src/styles/newproducts/NewProducts.module.css';

//Types
type SetterFunctionType = (value: string) => void;


//MAIN COMPONENT
const NewProductsSection = () => {
    const [categorie, setCategorie] = useState<string>("All");
    const [filteredProductsList, setFilteredProductsList] = useState<ProductType[]>(data.products);
    const [sortProducts, setSortProducts] = useState<string>('');

    //categorie setter to pass to children componenents
    const categorieSetter: SetterFunctionType = (value: string): void => {
        setCategorie(value);
    };

    //Filter button
    const handleCategoriesFilter = (): void => {
        if (categorie === 'All' || categorie === '') {
            setFilteredProductsList(prevProductsArray => prevProductsArray = data.products);
            return
        }
        if (categorie !== 'All') {
            let filteredArray: ProductType[] = data.products.filter(product => product.categorie === categorie);
            setFilteredProductsList(prevProductsArray => prevProductsArray = filteredArray);
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
            setFilteredProductsList(prevProductList => [...prevProductList].sort((productA, productB) => (productA.price > productB.price ? 1 : -1)));
        }
        if (sortProducts === 'Price max to min') {
            setFilteredProductsList(prevProductList => [...prevProductList].sort((productA, productB) => (productA.price < productB.price ? 1 : -1)));
        }
    };

    useEffect(() => {
        handleSortProducts();
    }, [sortProducts]);

    
    return (
        <section className={styles.products_section_container}>
            <div className={styles.buttons_container}>
                <select
                    className={styles.filter_button}
                    value={categorie}
                    onChange={(e) => categorieSetter(e.target.value)}>
                    <option value="" disabled>Filter per categorie</option>
                    <option value='All'>All</option>
                    <option value='Hoodie'>Hoodie</option>
                    <option value='T-shirt'>T-Shirt</option>
                    <option value='Sweatshirt'>Sweatshirt</option>
                    <option value='Shirt'>Shirt</option>
                    <option value='Swimshorts'>Swimshorts</option>
                </select>
                <p className={styles.product_quantity_text}>{`${filteredProductsList.length} Products`}</p>
                <select
                    className={styles.sort_button}
                    value={sortProducts}
                    onChange={(e) => setSortProducts(e.target.value)}>
                    <option value="" disabled>Sort by</option>
                    <option value='Price min to max'>Price (min to max)</option>
                    <option value='Price max to min'>Price (max to min)</option>
                </select>
            </div>
            <div className={styles.big_screen_products_container}>
               {<FilterComponent categorieSetter={categorieSetter} />}
                <div className={styles.all_products_container}>
                    {filteredProductsList.map((product) => {
                        return (
                            <div key={product.name} className={styles.product_container}>
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
            </div>
        </section>
    )
};

export default NewProductsSection;