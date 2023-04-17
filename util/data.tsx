// Mock all datas here

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

export type ProductType = {
    name: string;
    imageSrc: any;
    price: number;
    categorie: string;
    color: string;
    pageHref: string;
}

export type MockDataType = {
    products: ProductType[];
}


export const data: MockDataType = {
    products: [
        {
            name: 'T-Shirt Jungle Stone',
            imageSrc: tshirtJungleStoneGreenSrc,
            price: 75,
            categorie:'T-shirt',
            color: 'green',
            pageHref: '/store/productid'
        },
        {
            name: 'T-Shirt Time Stone',
            imageSrc: tshirtTimeStoneBlueSrc,
            price: 75,
            categorie:'T-shirt',
            color: 'blue',
            pageHref: '/store/productid'
        },
        {
            name: 'T-Shirt Journey Stone',
            imageSrc: tshirtJourneyStoneBlackSrc,
            price: 80,
            categorie:'T-shirt',
            color: 'black',
            pageHref: '/store/productid'
        },
        {
            name: 'T-Shirt River',
            imageSrc: tshirtRiverwhiteSrc,
            price: 75,
            categorie:'T-shirt',
            color: 'white',
            pageHref: '/store/productid'
        },
        {
            name: 'Hoodie Eco Linen',
            imageSrc: hoodieEcoLinenGraySrc,
            price: 120,
            categorie: 'Hoodie',
            color: 'gray',
            pageHref: '/store/productid'
        },
        {
            name: 'Hoodie Eco Recycle',
            imageSrc: hoodieEcoRecycleGraySrc,
            price: 110,
            categorie: 'Hoodie',
            color: 'green',
            pageHref: '/store/productid'
        },
        {
            name: 'Sweatshirt Statue',
            imageSrc: sweatshirtStatueNavySrc,
            price: 100,
            categorie: 'Sweatshirt',
            color: 'black',
            pageHref: '/store/productid'
        },
        {
            name: 'Hoodie Journey',
            imageSrc: hoodieJourneyOffWhiteSrc,
            price: 120,
            categorie: 'Hoodie',
            color: 'off white',
            pageHref: '/store/productid'
        },
        {
            name: 'Shirt Hawke',
            imageSrc: shirtHawkeBlackSrc,
            price: 140,
            categorie: 'Shirt',
            color: 'black',
            pageHref: '/store/productid'
        },
        {
            name: 'Swimshorts Miramar',
            imageSrc: swimshortsMiramarGreenSrc,
            price: 60,
            categorie: 'Swimshorts',
            color: 'green',
            pageHref: '/store/productid'
        },
        {
            name: 'Hoodie Nuestro',
            imageSrc: hoodieNuestroNavySrc,
            price: 110,
            categorie: 'Hoodie',
            color: 'navy',
            pageHref: '/store/productid'
        }
    ]
};