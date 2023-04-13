//import main
import { useState } from 'react';

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

const NavBar = () => {
    const [display, setDisplay] = useState('hidden');

    return (
        <>
            <header className={styles.small_screen_header}>
                <div className={styles.menu_icon_container}>
                    <FiMenu className={styles.menu_icon} onClick={() => setDisplay('shown')} />
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
                    <BsBag className={styles.user_icon} />
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
                    <FiPhone className={styles.user_icon} />
                    <BiUserCircle className={styles.user_icon} />
                    <BsBag className={styles.user_icon} />
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
                        <li><FiPhone className={styles.phone_icon} /><Link onClick={() => setDisplay('hidden')} className={styles.contact_link} href="/">CONTACT US</Link></li>
                        <li><Link onClick={() => setDisplay('hidden')} href="/">FAQ</Link></li>
                    </ul>
                </div>
            </div>}
        </>
    )
};

export default NavBar;