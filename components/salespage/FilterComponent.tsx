//import React
import { useState, useEffect } from 'react';

//import CSS
import styles from '../../src/styles/newproducts/NewProducts.module.css';

//import products list
import { data, ProductType } from '../../util/data';

const SalesProductsArray: ProductType[] = data.products.filter((product) => product.sales);


//import util functions
import findQuantityPerCategorie, { CategorieArrayType, CategorieObjectType } from '../../util/findQuantityPerCategorie';

//Types
type SetterFunctionType = (value: string) => void;
type FilterComponentProps = {
    categorieSetter: SetterFunctionType;
  };

const SalesProductsFilterComponent = ({ categorieSetter }: FilterComponentProps) => {
    
    const [quantityPerCategorieArray, setQuantityPerCategorieArray] = useState<CategorieArrayType>([]);

    useEffect(() => {
        setQuantityPerCategorieArray(findQuantityPerCategorie(SalesProductsArray));
    }, [])

    return (
        <section className={styles.filter_section}>
            <h2>Filter per</h2>
            <ul className={styles.list_container}>
            {quantityPerCategorieArray.map((categorieObject: CategorieObjectType, index: number) => {
                return (
                    <li className={styles.list_item} key={index} onClick={() => categorieSetter(categorieObject.name)}>{`${categorieObject.name} (${categorieObject.quantity})`}</li>
                )
            })}
            </ul>
        </section>
    )
};

export default SalesProductsFilterComponent;