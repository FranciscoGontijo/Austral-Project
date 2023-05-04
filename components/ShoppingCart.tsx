
//import react
import { useState, useEffect } from "react";

//import next components
import Image from "next/image";
import Link from "next/link";

//import Redux
import { useSelector } from "react-redux";
import { productsArray } from "../redux/slices/shoppingCartSlice";

//import icons from react icons
import { BsBag, BsTrash } from 'react-icons/bs';
import { FiX } from 'react-icons/fi';

//import CSS
import styles from "../src/styles/ShoppingCart.module.css"

//types for props
type SetterFunctionType = () => void;
type ShoppingCartPropsType = {
    counter: number,
    closeCart: SetterFunctionType
};



const MobileShoppingCart = ({ counter, closeCart }: ShoppingCartPropsType) => {
    const [total, setTotal] = useState<number>(0);
    const productsInCart = useSelector(productsArray);

    useEffect(() => {
        let counter: number = 0;
        productsInCart.forEach((obj) => counter += obj.quantity * obj.price);
        setTotal(prevTotal => prevTotal = counter)
    }, [productsInCart])

    return (
        <section className={styles.shopping_cart_container}>
            <div className={styles.shopping_bag_header}>
                <h2>My bag</h2>
                <div className={styles.bag_counter_container}>
                    <div className={styles.bag_counter}>{counter}</div>
                    <BsBag className={styles.bag_icon} />
                </div>
                <FiX className={styles.exit_icon} onClick={() => closeCart()} />
            </div>
            <div className={styles.all_products_container}>
                {productsInCart.map((product) => {
                    return (
                        <div className={styles.product_container}>
                            <div>
                                <Image className={styles.product_image} src={product.imageSrc} alt={product.name} />
                            </div>
                            <div className={styles.product_details_container}>
                                <h4>{product.name}</h4>
                                <BsTrash className={styles.trash_icon} />
                                <div className={styles.price_size_container}>
                                    <span className={styles.price}>AU$ {product.price}.00</span><span className={styles.size}>Size: {product.size}</span><span className={styles.color}>Color: {product.color}</span>
                                </div>
                                <div>
                                    <span>Qtd:</span>
                                    <button className={styles.minus_button}>-</button>
                                    <span>{product.quantity}</span>
                                    <button className={styles.plus_button}>+</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.div_bar}></div>
            <div className={styles.subtotal_container}>
                <span>Subtotal :</span><span>AU$ {total}.00</span>
            </div>
            <div className={styles.finalize_shopp_buttons_container}>
                <Link href="/store"><button onClick={closeCart} className={styles.keep_shopping_button}>Keep shopping</button></Link>
                <Link href="/finish"><button onClick={closeCart} className={styles.finalize_shopp_button}>Checkout</button></Link>
            </div>
        </section>
    )
};

export default MobileShoppingCart;