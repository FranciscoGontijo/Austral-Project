import type { NextPage } from 'next';

//import components
import StoreBanner from "../../../components/store/MainBanner";
import ProductsSection from "../../../components/store/ProductsSection";

const StoreMainPage: NextPage = () => {
    
    return (
        <div>
            <StoreBanner />
            <ProductsSection />
        </div>
    )
};

export default StoreMainPage;