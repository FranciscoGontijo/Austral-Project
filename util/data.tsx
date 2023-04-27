//Mock all datas here

//HOMPAGE HIGHLIGHTS BANNERS 
//import images
import highlightsFirstImageSrc from '../src/assets/images/homepage/Highlights Main.webp';
import highlightsSecondImageSrc from '../src/assets/images/homepage/Highlights T-shirt.webp';
import highlightsThirdImageSrc from '../src/assets/images/homepage/Highlights Jackets.webp';
import highlightsFourthImageSrc from '../src/assets/images/homepage/Highlights Sales.webp';

export type HighlightBannerType = {
    imageSrc: any;
    pageHref: string;
    descriptionTitle: string;
    description: string
};

export const HighlightBannerArray: HighlightBannerType[] = [
    { imageSrc: highlightsFirstImageSrc, pageHref: '/store', descriptionTitle: 'Winter 23', description: "Tomorrow is not just about the future, but also a reminder that the present is the moment to choose new paths." },
    { imageSrc: highlightsSecondImageSrc, pageHref: '/store/t-shirts', descriptionTitle: 'T-shirts', description: "Explore Austral's classic t-shirts. Made domestically with the highest quality materials available in the national market. The cotton used is BCI® certified, ensuring low environmental impact." },
    { imageSrc: highlightsThirdImageSrc, pageHref: '/store/jackets', descriptionTitle: 'Jackets', description: "Austral's jackets not only adapt to different temperatures and occasions, but are also made with technological and sustainable fabrics that ensure durability and style at the same time." },
    { imageSrc: highlightsFourthImageSrc, pageHref: '/salespage', descriptionTitle: 'Sales', description: "Selected items with discounts. Austral's promotions are available for a limited time. Explore products with special buying opportunities. We suggest using size filters for better navigation." },
]



//PRODUCTS DATA
//import products images
import hoodieEcoLinenGraySrc from '../src/assets/images/products/Hoodie Eco Linen gray.webp';
import hoodieEcoRecycleGraySrc from '../src/assets/images/products/Hoodie Eco Recycle gray.webp';
import hoodieJourneyOffWhiteSrc from '../src/assets/images/products/Hoodie Journey off white.webp';
import hoodieNuestroNavySrc from '../src/assets/images/products/Hoodie Nuestro navy.webp';
import tshirtRiverwhiteSrc from '../src/assets/images/products/T-Shirt River white.webp';
import tshirtJourneyStoneBlackSrc from '../src/assets/images/products/T-Shirt Journey Stone black.webp';
import tshirtJungleStoneGreenSrc from '../src/assets/images/products/T-Shirt Jungle Stone green.webp';
import tshirtTimeStoneBlueSrc from '../src/assets/images/products/T-Shirt Time Stone blue.webp';
import shirtHawkeBlackSrc from '../src/assets/images/products/Shirt Hawke black.webp';
import sweatshirtStatueNavySrc from '../src/assets/images/products/Sweatshirt Statue navy.webp';
import swimshortsMiramarGreenSrc from '../src/assets/images/products/Swimshorts Miramar green.webp';

//Product object type
export type ProductType = {
    name: string;
    imageSrc: any;
    price: number;
    categorie: string;
    color: string[];
    productId: string;
    new: boolean;
    sales: boolean;
    description: string;
    related: string[];
}

//Full mocked data structure type
export type DataType = {
    products: ProductType[];
}


export const data: DataType = {
    products: [
        {
            name: 'T-Shirt Jungle Stone',
            imageSrc: tshirtJungleStoneGreenSrc,
            price: 75,
            categorie:'T-shirt',
            color: ['green'],
            productId: 'product1',
            new: true,
            sales: true,
            description: 'hey',
            related: ['product3', 'product7', 'product8', 'product10']
        },
        {
            name: 'T-Shirt Time Stone',
            imageSrc: tshirtTimeStoneBlueSrc,
            price: 75,
            categorie:'T-shirt',
            color: ['blue'],
            productId: 'product2',
            new: true,
            sales: false,
            description: 'hey',
            related: ['product3', 'product7', 'product8', 'product9']
        },
        {
            name: 'T-Shirt Journey Stone',
            imageSrc: tshirtJourneyStoneBlackSrc,
            price: 80,
            categorie:'T-shirt',
            color: ['black'],
            productId: 'product3',
            new: true,
            sales: false,
            description: 'hey',
            related: ['product1', 'product7', 'product8', 'product11']
        },
        {
            name: 'T-Shirt River',
            imageSrc: tshirtRiverwhiteSrc,
            price: 75,
            categorie:'T-shirt',
            color: ['white'],
            productId: 'product4',
            new: false,
            sales: true,
            description: 'hey',
            related: ['product3', 'product7', 'product8', 'product10']
        },
        {
            name: 'Hoodie Eco Linen',
            imageSrc: hoodieEcoLinenGraySrc,
            price: 120,
            categorie: 'Hoodie',
            color: ['gray'],
            productId: 'product5',
            new: false,
            sales: true,
            description: 'hey',
            related: ['product6', 'product7', 'product8', 'product10']
        },
        {
            name: 'Hoodie Eco Recycle',
            imageSrc: hoodieEcoRecycleGraySrc,
            price: 110,
            categorie: 'Hoodie',
            color: ['green'],
            productId: 'product6',
            new: false,
            sales: true,
            description: 'hey',
            related: ['product1', 'product2', 'product3', 'product9']
        },
        {
            name: 'Sweatshirt Statue',
            imageSrc: sweatshirtStatueNavySrc,
            price: 100,
            categorie: 'Sweatshirt',
            color: ['black', 'red'],
            productId: 'product7',
            new: true,
            sales: true,
            description: 'hey',
            related: ['product1', 'product6', 'product8', 'product10']
        },
        {
            name: 'Hoodie Journey',
            imageSrc: hoodieJourneyOffWhiteSrc,
            price: 120,
            categorie: 'Hoodie',
            color: ['off white'],
            productId: 'product8',
            new: true,
            sales: false,
            description: 'hey',
            related: ['product2', 'product3', 'product9', 'product10']
        },
        {
            name: 'Shirt Hawke',
            imageSrc: shirtHawkeBlackSrc,
            price: 140,
            categorie: 'Shirt',
            color: ['black'],
            productId: 'product9',
            new: true,
            sales: false,
            description: 'hey',
            related: ['product1', 'product3', 'product4', 'product10']
        },
        {
            name: 'Swimshorts Miramar',
            imageSrc: swimshortsMiramarGreenSrc,
            price: 60,
            categorie: 'Swimshorts',
            color: ['green'],
            productId: 'product10',
            new: true,
            sales: false,
            description: 'hey',
            related: ['product3', 'product5', 'product8', 'product11']
        },
        {
            name: 'Hoodie Nuestro',
            imageSrc: hoodieNuestroNavySrc,
            price: 110,
            categorie: 'Hoodie',
            color: ['navy'],
            productId: 'product11',
            new: true,
            sales: true,
            description: 'hey',
            related: ['product2', 'product4', 'product7', 'product10']
        }
    ]
};





