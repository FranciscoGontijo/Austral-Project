//Import React
import { useState, useEffect } from 'react';

//Import Redux
import { useDispatch } from 'react-redux';

//Import Redux Slices Actions
import { addProduct } from '../../../redux/slices/shoppingCartSlice';

//import next
import Image from "next/image";
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
    imageSrc: {
        src: string,
        height: number,
        width: number,
        blurDataURL: string,
        blurWidth: number,
        blurHeight: number
    },
    size: string,
    color: string
}

const Product = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [productToAdd, setProductToAdd] = useState<ProductAtCart>({
        name: '',
        color: '',
        price: 0,
        imageSrc: {
            src: '',
            height: 0,
            width: 0,
            blurDataURL: '',
            blurWidth: 0,
            blurHeight: 0
        },
        size: ''
    })

    const addItemToCart = (): void => {
        if (productToAdd.color !== '' && productToAdd.size !== '') {
            dispatch(addProduct(productToAdd));

        } else {
            console.log('Need to select color and size');
        }
    }

    //Use screenSize
    const screenSize: { width: number | undefined; height: number | undefined } = useWindowSize();
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

    const { productid } = router.query;
    
    useEffect(() => {
        const currentProduct: ProductType = data.products.filter((productObj) => productObj.productId === productid)[0]
        setProduct(currentProduct);
        setProductToAdd((prevObj) => prevObj = { ...prevObj, name: currentProduct?.name, price: currentProduct?.price, imageSrc: currentProduct?.imageSrc })
    }, [productid])


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
                                        onClick={() => setProductToAdd(prevObj => prevObj = { ...productToAdd, color: color })}
                                        className={styles.color_display}
                                        style={{ backgroundColor: color }}
                                    >
                                        {productToAdd.color !== color &&
                                            <div className={styles.color_display_mask}></div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                        <h3 className={styles.color_display_label}>Sizes :</h3>
                        <div className={styles.size_display_container}>
                            {product?.sizes.map((size) => {
                                return (
                                    <div
                                        onClick={() => setProductToAdd((prevObj) => prevObj = { ...productToAdd, size: size })}
                                        className={styles.size_display}
                                    >
                                        {productToAdd.size === size && <div className={styles.selected_size}>{size}</div>}
                                        {productToAdd.size !== size && size}
                                    </div>
                                )
                            })}
                        </div>
                        <button onClick={addItemToCart} className={styles.add_to_bag_button}>Add to bag</button>
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

export default Product;