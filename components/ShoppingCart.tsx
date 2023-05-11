
//import react
import { useState, useEffect, useRef } from "react";

//import next components
import Image from "next/image";
import Link from "next/link";

//import Redux
import { useSelector, useDispatch } from "react-redux";
import { productsArray } from "../redux/slices/shoppingCartSlice";

//Import Redux Slices Actions
import { addProduct, removeOneProduct, removeProduct } from '../redux/slices/shoppingCartSlice';

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

//type for product
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
    color: string,
    quantity: number
}



const ShoppingCart = ({ counter, closeCart }: ShoppingCartPropsType) => {
    const [total, setTotal] = useState<number>(0);
    const productsInCart = useSelector(productsArray);
    const dispatch = useDispatch();

    const handleAddProduct = (productToAdd: ProductAtCart): void => {
        dispatch(addProduct(productToAdd));
    }

    const handleRemoveOneProduct = (productToRemove: ProductAtCart): void => {
        dispatch(removeOneProduct(productToRemove));
    }

    const handleRemoveProduct = (productToRemove: ProductAtCart): void => {
        dispatch(removeProduct(productToRemove));
    }

    //useEffec to update cart products counter
    useEffect(() => {
        let counter: number = 0;
        productsInCart.forEach((obj) => counter += obj.quantity * obj.price);
        setTotal(prevTotal => prevTotal = counter)
    }, [productsInCart])

    //Close shopping cart when clicked outside of it:
    const cartRef = useRef<HTMLDivElement | null>(null); // Add the type for the ref

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (cartRef.current && !cartRef.current.contains(e.target as Node)) { // Add null check and type assertion
                closeCart();
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    return (
        <section ref={cartRef} className={styles.shopping_cart_container}>
            <div className={styles.shopping_bag_header}>
                <h2>My bag</h2>
                <div className={styles.bag_counter_container}>
                    <div className={styles.bag_counter}>{counter}</div>
                    <BsBag className={styles.bag_icon} />
                </div>
                <FiX className={styles.exit_icon} onClick={() => closeCart()} />
            </div>
            {productsInCart.length === 0 &&
                <div className={styles.empty_cart_container}>
                    <h3 style={{ fontFamily: 'Lato, sans-serif' }}>Your shopping cart is empty</h3>
                    <Link href="/store"><button onClick={closeCart} className={styles.keep_shopping_button_empty}>Keep shopping</button></Link>
                </div>
            }
            {productsInCart.length > 0 &&
                <div>
                    <div className={styles.all_products_container}>
                        {productsInCart.map((product, index) => {
                            return (
                                <div key={index} className={styles.product_container}>
                                    <div>
                                        <Image className={styles.product_image} src={product.imageSrc} alt={product.name} />
                                    </div>
                                    <div className={styles.product_details_container}>
                                        <h4>{product.name}</h4>
                                        <BsTrash onClick={() => handleRemoveProduct(product)} className={styles.trash_icon} />
                                        <div className={styles.price_size_container}>
                                            <span className={styles.price}>AU$ {product.price}.00</span><span className={styles.size}>Size: {product.size}</span><span className={styles.color}>Color: {product.color}</span>
                                        </div>
                                        <div>
                                            <span>Qtd:</span>
                                            <button onClick={() => handleRemoveOneProduct(product)} className={styles.minus_button}>-</button>
                                            <span>{product.quantity}</span>
                                            <button onClick={() => handleAddProduct(product)} className={styles.plus_button}>+</button>
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
                </div>}
        </section>
    )
};

export default ShoppingCart;