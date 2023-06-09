import type { NextPage } from 'next';

//import components
import AboutUsBanner from "../../components/aboutpage/MainBanner";
import AboutUsTextBanner from "../../components/aboutpage/MainTextBanner";
import InformationSectionAboutPage from "../../components/aboutpage/InformationSection";

const AboutPage: NextPage = () => {
    return (
        <div>
            <AboutUsBanner />
            <AboutUsTextBanner />
            <InformationSectionAboutPage />
        </div>
    )
};

export default AboutPage;