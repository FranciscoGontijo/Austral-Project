import { ReactNode } from "react";

import Head from 'next/head';

import NavBar from "../Navbar";
import Footer from "../Footer";

interface Props {
    children?: ReactNode
};

const Layout = ({ children, ...props }: Props) => {

    return (
        <>
            <Head>
                <title>Austral Store</title>
            </Head>
            <NavBar />
            <main {...props}>
                {children}
            </main>
            <Footer />
        </>

    )
};

export default Layout;