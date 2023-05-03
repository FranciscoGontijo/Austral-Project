//import React
import { useState, useEffect } from 'react';

//import CSS
import styles from '../../src/styles/store/Store.module.css';

//import products list
import { data } from '../../util/data';

//import util functions
import findQuantityPerCategorie, { CategorieArrayType, CategorieObjectType } from '../../util/findQuantityPerCategorie';

//Types
type SetterFunctionType = (value: string) => void;
type FilterComponentProps = {
    categorieSetter: SetterFunctionType;
};

const FilterComponent = ({ categorieSetter }: FilterComponentProps) => {

    const [quantityPerCategorieArray, setQuantityPerCategorieArray] = useState<CategorieArrayType>([]);

    useEffect(() => {
        setQuantityPerCategorieArray(findQuantityPerCategorie(data.products));
    }, [])

    return (
        <section className={styles.filter_section}>
            <h2>Filter per</h2>
            <ul className={styles.list_container}>
                {quantityPerCategorieArray.map((categorieObject: CategorieObjectType, index: number) => {
                    return (
                        <li
                            className={styles.list_item}
                            key={index}
                            onClick={() => categorieSetter(categorieObject.name)}
                        >
                            {`${categorieObject.name} (${categorieObject.quantity})`}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
};

export default FilterComponent;