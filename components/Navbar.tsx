import Link from "next/link";

//import CSS
import styles from "../src/styles/Navbar.module.css";

const NavBar = () => {
    return (
        <header className={styles.navbarContainer}>
            <i>Bars menu</i>
            <img />
            <i></i>
            <i></i>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/profile">Profile</Link></li>
            </ul>
        </header>
    )
};

export default NavBar;