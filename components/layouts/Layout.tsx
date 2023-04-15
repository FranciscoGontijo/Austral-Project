import { ReactNode } from "react";

import NavBar from "../Navbar";
import Footer from "../Footer";

interface Props {
    children?: ReactNode
};

const Layout = ({ children, ...props }: Props) => {

    return (
        <>
            <NavBar />
            <main {...props}>
                {children}
            </main>
            <Footer />
        </>

    )
};

export default Layout;