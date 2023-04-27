import { useState, useEffect } from 'react';

//import next
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/router";

//import CSS
import styles from '../../styles/store/ProductPage.module.css';

//import products
import { data, ProductType } from '../../../util/data';

//import components
import RelatedProducts from '../../../components/store/RelatedProducts';


const Profile = () => {
    //filter param
    const router = useRouter();
    const { productid } = router.query;

    //State
    //need to fix this
    const [product, setProduct] = useState<ProductType>({
        name: '',
        imageSrc: '',
        price: 0,
        categorie:'',
        color: [''],
        productId: '',
        new: true,
        sales: true,
        description: '',
        related: ['']
    });


    useEffect(() => {
        setProduct(data.products.filter((productObj) => productObj.productId === productid)[0])
    }, [productid])

    //COLOR DISPLAY: ON CLICK SET STATE TO THAT COLOR TO PASS LATER TO THE SHOOPING BAG
    
    return (
        <section className={styles.product_page}>
            <div className={styles.main_product_container}>
                    <Image
                    className={styles.main_image}
                    src={product?.imageSrc}
                    alt='Product'/>
                <div className={styles.main_text_container}>
                    <div className={styles.product_info_container}>
                        <h3 className={styles.product_name}>{product?.name}</h3>
                        <h2 className={styles.product_price}>$ {product?.price}.00</h2>
                        <h3 className={styles.color_display_label}>Color:</h3>
                        <div className={styles.color_display_container}>
                            {product?.color.map((color) => <div className={styles.color_display} style={{backgroundColor: color}}></div>)}
                        </div>
                        <button className={styles.add_to_bag_button}>Add to bag</button>
                    </div>
                    <div>
                        <h3>Product description</h3>
                        <p>{product?.description}</p>
                    </div>
                </div>
            </div>
            <RelatedProducts related={product?.related} />
        </section>
    )
};

export default Profile;