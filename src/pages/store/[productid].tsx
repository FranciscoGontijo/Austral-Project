import { useState, useEffect } from 'react';

//import next
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/router";

//import CSS
import styles from '../../styles/store/ProductPage.module.css';

//import products
import { data, ProductType } from '../../../util/data';

//import utils
import useWindowSize from '../../../util/useWindowSize';

//import components
import RelatedProductsMobile from '../../../components/store/RelatedProductsMobile';
import RelatedProductsLaptop from '../../../components/store/RelatedProductsLaptop';

type ProductAtCart = {
    name: string,
    price: number,
    imageSrc: string,
    size: string,
    selectedColor: string
}

const Profile = () => {
    //filter param
    const router = useRouter();
    const { productid } = router.query;
    const screenSize: { width: number | undefined; height: number | undefined } = useWindowSize();
    const [productToAdd, setProductToAdd] = useState<ProductAtCart>({
        name: '',
        selectedColor: '',
        price: 0,
        imageSrc: '',
        size: ''
    })

    //Need a default color
    //maybe besides a clickable div, use check box instead
    //other colors be less visible when not selected
    //if productColor === not chosen yet then color dispay smoked
    //when cliked the chosen one change de index number and get out of the smoked display


    //Use screenSize
    const [display, setDisplay] = useState<string>('laptop');

    useEffect(() => {
        if (screenSize.width === undefined) {
            return
        }
        if (screenSize.width > 700) {
            setDisplay('laptop');
        }
        if (screenSize.width <= 700) {
            setDisplay('mobile');
        }
    }, [screenSize]);

    //Set product
    const [product, setProduct] = useState<ProductType>({
        name: '',
        imageSrc: '',
        price: 0,
        categorie: '',
        color: [''],
        productId: '',
        new: true,
        sales: true,
        description: '',
        related: [''],
        sizes: ['']
    });


    useEffect(() => {
        setProduct(data.products.filter((productObj) => productObj.productId === productid)[0])
    }, [productid])

    //COLOR DISPLAY: ON CLICK SET STATE TO THAT COLOR TO PASS LATER TO THE SHOOPING BAG
    //WHEN HOVERED OVER COLOR, APPEARS TEXT BOX WITH THE NAME. ACESSIBILITY

    return (
        <section className={styles.product_page}>
            <div className={styles.main_product_container}>
                <div>
                    <Image
                        className={styles.main_image}
                        src={product?.imageSrc}
                        alt='Product' />
                </div>
                <div className={styles.main_text_container}>
                    <div className={styles.product_info_container}>
                        <h3 className={styles.product_name}>{product?.name}</h3>
                        <h2 className={styles.product_price}>$ {product?.price}.00</h2>
                        <h3 className={styles.color_display_label}>Color :</h3>
                        <div className={styles.color_display_container}>
                            {product?.color.map((color) => {
                                return (
                                    <div
                                        title={color}
                                        onClick={() => setProductToAdd(prevObj => prevObj = { ...productToAdd, selectedColor: color })}
                                        className={styles.color_display}
                                        style={{ backgroundColor: color }}
                                    >
                                        {productToAdd.selectedColor !== color &&
                                            <div className={styles.color_display_mask}></div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                        <button className={styles.add_to_bag_button}>Add to bag</button>
                    </div>
                    <div className={styles.bar}></div>
                    <div className={styles.product_description_container}>
                        <h3>Product description</h3>
                        <p>{product?.description}</p>
                    </div>
                </div>
            </div>
            {display === 'mobile' && <RelatedProductsMobile related={product?.related} />}
            {display === 'laptop' && <RelatedProductsLaptop related={product?.related} />}
        </section>
    )
};

export default Profile;