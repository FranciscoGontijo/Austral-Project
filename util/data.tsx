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
    { imageSrc: highlightsSecondImageSrc, pageHref: '/about', descriptionTitle: 'About Us', description: "Come and find about our story and objectives. Austral family" },
    { imageSrc: highlightsThirdImageSrc, pageHref: '/newproductspage', descriptionTitle: 'New releases', description: "Austral's new releases. Adapt to different temperatures and occasions, made with technological and sustainable fabrics that ensure durability and style at the same time." },
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
    sizes: string[];
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
            color: ['green', 'black', 'lightblue'],
            productId: 'product1',
            new: true,
            sales: true,
            description: 'T-shirt in 100% combed cotton 01/30, pre-shrunk, pre-washed and softened. The piece has seam reinforcements on the collar and shoulders, for better structure and durability. The print is made with water-based ink to minimize the environmental impact and reduce the use of chemical products in the manufacture of the piece.',
            related: ['product3', 'product7', 'product8', 'product10'],
            sizes: ['S', 'M', 'L']
        },
        {
            name: 'T-Shirt Time Stone',
            imageSrc: tshirtTimeStoneBlueSrc,
            price: 75,
            categorie:'T-shirt',
            color: ['blue', 'gray', 'green'],
            productId: 'product2',
            new: true,
            sales: false,
            description: 'T-shirt in 100% combed cotton 01/30, pre-shrunk, pre-washed and softened. The piece has seam reinforcements on the collar and shoulders, for better structure and durability. The print is made with water-based ink to minimize the environmental impact and reduce the use of chemical products in the manufacture of the piece.',
            related: ['product3', 'product7', 'product8', 'product9'],
            sizes: ['S', 'M', 'L']
        },
        {
            name: 'T-Shirt Journey Stone',
            imageSrc: tshirtJourneyStoneBlackSrc,
            price: 80,
            categorie:'T-shirt',
            color: ['black', 'green', 'white'],
            productId: 'product3',
            new: true,
            sales: false,
            description: 'T-shirt in 100% combed cotton 01/30, pre-shrunk, pre-washed and softened. The piece has seam reinforcements on the collar and shoulders, for better structure and durability. The print is made with water-based ink to minimize the environmental impact and reduce the use of chemical products in the manufacture of the piece.',
            related: ['product1', 'product7', 'product8', 'product11'],
            sizes: ['S', 'M', 'L']
        },
        {
            name: 'T-Shirt River',
            imageSrc: tshirtRiverwhiteSrc,
            price: 75,
            categorie:'T-shirt',
            color: ['white', 'lightblue', 'green'],
            productId: 'product4',
            new: false,
            sales: true,
            description: 'T-shirt in 100% combed cotton 01/30, pre-shrunk, pre-washed and softened. The piece has seam reinforcements on the collar and shoulders, for better structure and durability. The print is made with water-based ink to minimize the environmental impact and reduce the use of chemical products in the manufacture of the piece.',
            related: ['product3', 'product7', 'product8', 'product10'],
            sizes: ['S', 'M', 'L']
        },
        {
            name: 'Hoodie Eco Linen',
            imageSrc: hoodieEcoLinenGraySrc,
            price: 120,
            categorie: 'Hoodie',
            color: ['gray', 'navy'],
            productId: 'product5',
            new: false,
            sales: true,
            description: 'The Hoodie is the perfect choice for moderately cold days, with its fluff-free fabric that ensures comfort and freedom of movement. The kangaroo fit offers practicality and style, as well as keeping your hands warm. The zero touch silk print with water-based ink gives the piece durability, without compromising quality.',
            related: ['product6', 'product7', 'product8', 'product10'],
            sizes: ['S', 'M', 'L']
        },
        {
            name: 'Hoodie Eco Recycle',
            imageSrc: hoodieEcoRecycleGraySrc,
            price: 110,
            categorie: 'Hoodie',
            color: ['green', 'white'],
            productId: 'product6',
            new: false,
            sales: true,
            description: 'The Hoodie is the perfect choice for moderately cold days, with its fluff-free fabric that ensures comfort and freedom of movement. The kangaroo fit offers practicality and style, as well as keeping your hands warm. The zero touch silk print with water-based ink gives the piece durability, without compromising quality.y',
            related: ['product1', 'product2', 'product3', 'product9'],
            sizes: ['S', 'M', 'L']
        },
        {
            name: 'Sweatshirt Statue',
            imageSrc: sweatshirtStatueNavySrc,
            price: 100,
            categorie: 'Sweatshirt',
            color: ['black', 'navy', 'white'],
            productId: 'product7',
            new: true,
            sales: true,
            description: 'The Sweatshirt is an excellent clothing option for moderately cold days, offering comfort and style with its crew neck and regular fit. Made of plush-free fabric, the piece has a zero touch silk print with water-based ink, bringing a modern and sophisticated look.',
            related: ['product1', 'product6', 'product8', 'product10'],
            sizes: ['S', 'M', 'L']
        },
        {
            name: 'Hoodie Journey',
            imageSrc: hoodieJourneyOffWhiteSrc,
            price: 120,
            categorie: 'Hoodie',
            color: ['white', 'navy'],
            productId: 'product8',
            new: true,
            sales: false,
            description: 'The Hoodie is the perfect choice for moderately cold days, with its fluff-free fabric that ensures comfort and freedom of movement. The kangaroo fit offers practicality and style, as well as keeping your hands warm. The zero touch silk print with water-based ink gives the piece durability, without compromising quality.',
            related: ['product2', 'product3', 'product9', 'product10'],
            sizes: ['S', 'M', 'L']
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
            description: 'Long-sleeved flannel shirt, pre-washed and softened, in a two-tone enlarged plaid print. The piece has regular modeling, with buttons of exclusive development in burst mass.',
            related: ['product1', 'product3', 'product4', 'product10'],
            sizes: ['S', 'M', 'L']
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
            description: 'Water shorts, with elastic waistband, metallic eyelets and drawstring with metallic tip for tying and adjustment. The piece is made of polyamide, ensuring quick drying, greater durability and breathability. The Swimshorts have an internal lining in polyamide fabric, bringing comfort and safety in use. The front pockets are knife-shaped and the back pocket is flat.',
            related: ['product3', 'product5', 'product8', 'product11'],
            sizes: ['S', 'M', 'L']
        },
        {
            name: 'Hoodie Nuestro',
            imageSrc: hoodieNuestroNavySrc,
            price: 110,
            categorie: 'Hoodie',
            color: ['navy', 'black'],
            productId: 'product11',
            new: true,
            sales: true,
            description: 'The Hoodie is the perfect choice for moderately cold days, with its fluff-free fabric that ensures comfort and freedom of movement. The kangaroo fit offers practicality and style, as well as keeping your hands warm. The zero touch silk print with water-based ink gives the piece durability, without compromising quality.',
            related: ['product2', 'product4', 'product7', 'product10'],
            sizes: ['S', 'M', 'L']
        }
    ]
};





