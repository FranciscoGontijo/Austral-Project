//import main
import { useEffect, useState } from 'react';

//import Next components
import Link from "next/link";
import Image from "next/image";

//import icons from react-icons
import { FiMenu, FiPhone, FiX } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';
import { BsBag } from 'react-icons/bs';

//Import images from assets
import headerLogoSrc from '../src/assets/images/Austral Navbar Logo.png';

//import CSS
import styles from "../src/styles/Navbar.module.css";

//import cart products counter
import { useSelector } from "react-redux";
import { productsArray } from "../redux/slices/shoppingCartSlice";

//import Shopping Cart
import ShoppingCart from "./ShoppingCart"

const NavBar = () => {
    const [display, setDisplay] = useState('hidden');
    const [cartDisplay, setCartDisplay] = useState<string>('hidden');

    const cartProducts = useSelector(productsArray);

    const [productsCounter, setProductsCounter] = useState<number>(0);
    useEffect(() => {
        let counter: number = 0;
        cartProducts.forEach(product => counter += product.quantity);
        setProductsCounter(counter);
        if (counter > 0) {
            setCartDisplay('shown');
        }
    }, [cartProducts])


    return (
        <>
            <header className={styles.small_screen_header}>
                <div className={styles.menu_icon_container}>
                    <FiMenu
                        className={styles.menu_icon}
                        onClick={() => {
                            setDisplay('shown')
                            setCartDisplay('hidden')
                        }
                        } />
                </div>
                <Link href="/">
                    <Image
                        src={headerLogoSrc}
                        alt="Example Image"
                        className={styles.header_logo}
                    />
                </Link>
                <div className={styles.header_bag_container}>
                    <BiUserCircle className={styles.user_icon} />
                    <div className={styles.bag_counter_container}>
                        <div className={styles.bag_counter}>{productsCounter}</div>
                        <BsBag onClick={() => setCartDisplay('shown')} className={styles.user_icon} />
                    </div>
                </div>
            </header>
            <header className={styles.big_screen_header}>
                <Link href="/">
                    <Image
                        src={headerLogoSrc}
                        alt="Example Image"
                        className={styles.header_logo}
                    />
                </Link>
                <ul className={styles.header_navlinks_container}>
                    <li><Link href="/store">STORE</Link></li>
                    <li><Link href="/newproductspage">NEW</Link></li>
                    <li><Link href="/salespage">SALE</Link></li>
                    <li><Link href="/about">ABOUT</Link></li>
                </ul>
                <div className={styles.header_icons_container}>
                    <Link href="/contact"><FiPhone className={styles.user_icon} /></Link>
                    <BiUserCircle className={styles.user_icon} />
                    <div className={styles.bag_counter_container}>
                        <div className={styles.bag_counter}>{productsCounter}</div>
                        <BsBag onClick={() => setCartDisplay('shown')} className={styles.user_icon} />
                    </div>
                </div>
            </header>
            {display === 'shown' && <div className={styles.mask_background}>
                <FiX onClick={() => setDisplay('hidden')} className={styles.x_mark} />
                <div className={styles.hidden_navbar_container}>
                    <ul className={styles.hidden_navlinks}>
                        <li><Link onClick={() => setDisplay('hidden')} href="/store">STORE</Link></li>
                        <li><Link onClick={() => setDisplay('hidden')} href="/newproductspage">NEW</Link></li>
                        <li><Link onClick={() => setDisplay('hidden')} href="/salespage">SALE</Link></li>
                        <li><Link onClick={() => setDisplay('hidden')} href="/about">ABOUT</Link></li>
                    </ul>
                    <ul className={styles.navbar_contact_container}>
                        <li><Link onClick={() => setDisplay('hidden')} className={styles.contact_link} href="/contact"><FiPhone className={styles.phone_icon} />CONTACT US</Link></li>
                        <li><Link onClick={() => setDisplay('hidden')} href="/">FAQ</Link></li>
                    </ul>
                </div>
            </div>}
            {cartDisplay === 'shown' &&
                <ShoppingCart
                    counter={productsCounter}
                    closeCart={() => setCartDisplay('hidden')} />}
        </>
    )
};

export default NavBar;