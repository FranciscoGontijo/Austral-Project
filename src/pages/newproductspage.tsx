import type { NextPage } from 'next';

//import components
import NewProductsBanner from "../../components/newproductspage/MainBanner";
import NewProductsSection from "../../components/newproductspage/ProductsSection";

const NewProductsPage: NextPage = () => {
    return (
        <section>
            <NewProductsBanner />
            <NewProductsSection />
        </section>
    )
};

export default NewProductsPage;