import { useState } from 'react';

//import next components
import Link from "next/link";
import Image from "next/image";

//import icons from react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//import CSS
import styles from "../src/styles/MainBanner.module.css";

//Import images
import mainBannerFirstImageSrc from '../src/assets/images/homepage/Banner 1.png';
import mainBannerSecondImageSrc from '../src/assets/images/homepage/Banner 2.webp';
import mainBannerThirdImageSrc from '../src/assets/images/homepage/Banner 3.webp';
import mainBannerFourthImageSrc from '../src/assets/images/homepage/Highlights Sales.webp';

type CategorieType = {
  imageSrc: any;
  pageHref: string;
  collectionTitle: string;
  bannerTitle: string;
  bannerText: string;
  buttonText: string;
  textColor: string;
};

const bannerImagesArray: CategorieType[] = [
  { 
    imageSrc: mainBannerFirstImageSrc, 
    pageHref: '/newproductspage', 
    collectionTitle: 'Winter 23', 
    bannerTitle: 'Tomorrow', 
    bannerText: 'The new collection from austral to warm your winter', 
    buttonText: 'Shop Now',
    textColor: 'white'
  },
  { 
    imageSrc: mainBannerSecondImageSrc, 
    pageHref: '/store/jackets', 
    collectionTitle: 'Winter 23', 
    bannerTitle: 'Jackets', 
    bannerText: 'Produced with technological and sustainable fabric, which guarantee durability and style.', 
    buttonText: 'Shop Now', 
    textColor: 'white'
  },
  { 
    imageSrc: mainBannerThirdImageSrc, 
    pageHref: '/store/tshirts', 
    collectionTitle: 'Winter 23', 
    bannerTitle: 'T-shirts', 
    bannerText: 'Os casacos da Austral, além de se adaptarem a diferentes temperaturas e ocasiões, também são produzidos com tecidos tecnológicos e sustentáveis, que garantem durabilidade e estilo ao mesmo tempo.', 
    buttonText: 'Shop Now',
    textColor: 'black'
  },
  { 
    imageSrc: mainBannerFourthImageSrc, 
    pageHref: '/salespage', collectionTitle: '', 
    bannerTitle: '', 
    bannerText: '', 
    buttonText: '',
    textColor: 'white'
  }
]


const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = (): void => {
    if (currentIndex === bannerImagesArray.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex = 0);
      return
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }

  const backImage = (): void => {
    if (currentIndex === 0) {
      setCurrentIndex((prevIndex) => prevIndex = bannerImagesArray.length - 1);
      return
    }
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }


  return (
    <section className={styles.banner_container}>
      <IoIosArrowBack onClick={backImage} className={styles.back_arrow} />
      <IoIosArrowForward onClick={nextImage} className={styles.foward_arrow} />
      <Link href={bannerImagesArray[currentIndex].pageHref}>
      <div style={{color: bannerImagesArray[currentIndex].textColor}} className={styles.banner_text}>
        <h3>{bannerImagesArray[currentIndex].collectionTitle}</h3>
        <h2>{bannerImagesArray[currentIndex].bannerTitle}</h2>
        <p>{bannerImagesArray[currentIndex].bannerText}</p>
        {bannerImagesArray[currentIndex].buttonText !== '' && <button className={styles.button_28}>{bannerImagesArray[currentIndex].buttonText}</button>}
      </div>
        <Image
          src={bannerImagesArray[currentIndex].imageSrc}
          alt="Example Image"
          className={styles.image}
        />
      </Link>
    </section>
  )
};

export default MainBanner;