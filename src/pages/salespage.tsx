import type { NextPage } from 'next';

//import components
import SalesBanner from "../../components/salespage/MainBanner";
import SalesProductsSection from "../../components/salespage/ProductsSection";

const SalesProductsPage: NextPage = () => {
    return (
        <section>
            <SalesBanner />
            <SalesProductsSection />
        </section>
    )
};

export default SalesProductsPage;
