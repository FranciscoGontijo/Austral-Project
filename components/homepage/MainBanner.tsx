import { useState } from 'react';

//import next components
import Link from "next/link";
import Image from "next/image";

//import icons from react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//import CSS
import styles from "../../src/styles/homepage/MainBanner.module.css";

import { bannerImagesArray } from "../../util/data"

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
      <IoIosArrowBack style={{ color: bannerImagesArray[currentIndex].textColor }} onClick={backImage} className={styles.back_arrow} />
      <IoIosArrowForward style={{ color: bannerImagesArray[currentIndex].textColor }} onClick={nextImage} className={styles.foward_arrow} />
      <Link href={bannerImagesArray[currentIndex].pageHref}>
        <div style={{ color: bannerImagesArray[currentIndex].textColor }} className={styles.banner_text}>
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