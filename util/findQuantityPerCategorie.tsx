
//import products list
import { DataType, ProductType } from './data';

export type CategorieObjectType = {name: string, quantity: number}

export type CategorieArrayType = CategorieObjectType[];

const findCategorieQuantity = (arrayOfObjectjs: DataType): CategorieArrayType => {
    let hoodieCount = 0;
    let tshirtCount = 0;
    let shirtCount = 0;
    let swimshortCount = 0;
    let sweatshirtCount = 0;
    arrayOfObjectjs.products.forEach((product: ProductType): void => {
        switch (product.categorie) {
            case 'Hoodie':
                hoodieCount += 1;
                break;
            case 'T-shirt':
                tshirtCount += 1;
                break;
            case 'Sweatshirt':
                sweatshirtCount += 1;
                break;
            case 'Swimshorts':
                swimshortCount += 1;
                break;
            case 'Shirt':
                shirtCount += 1;
                break;
            default:
        }
    });
    let allCount = hoodieCount + shirtCount + tshirtCount + swimshortCount + sweatshirtCount;
    let quantityPerCategorieArray: CategorieArrayType = [
        {name: 'All', quantity: allCount},
        {name: 'Hoodie', quantity: hoodieCount},
        {name: 'T-shirt', quantity: tshirtCount},
        {name: 'Sweatshirt', quantity: sweatshirtCount},
        {name: 'Swimshorts', quantity: swimshortCount},
        {name: 'Shirt', quantity: shirtCount}
        
    ]
    return quantityPerCategorieArray;
};

export default findCategorieQuantity;