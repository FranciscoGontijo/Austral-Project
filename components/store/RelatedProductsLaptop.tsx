
//import next components
import Image from "next/image";
import Link from "next/link";

//import CSS 
import styles from '../../src/styles/store/ProductPage.module.css'

//import products
import { data, ProductType } from '../../util/data';

type PropsType = {
    related: string[]
}

const RelatedProductsLaptop = (props: PropsType) => {
    const { related } = props;

    let relatedProducts: ProductType[] = [];
    relatedProducts = data.products.filter(({ productId }) => related?.includes(productId));

    return (
        <section className={styles.laptop_related_products_section}>
            <div className={styles.laptop_related_products_label_container}>
                <h3>Highlights</h3>
                <h2>Related products</h2>
            </div>
            <div className={styles.all_products_container}>
                {relatedProducts?.map((product, index) => {
                    return (
                        <div key={index} className={styles.product_container}>
                            <Link className={styles.link} href={`/store/${product.productId}`}>
                                <div className={styles.image_container}>
                                    <Image
                                        src={product.imageSrc}
                                        alt='test image'
                                        className={styles.image}
                                    />
                                </div>
                            </Link>
                            <h3>{product.name}</h3>
                            <h2>AU$ {product.price}.00</h2>
                        </div>
                    )
                })}
            </div>

        </section>
    )
};

export default RelatedProductsLaptop;