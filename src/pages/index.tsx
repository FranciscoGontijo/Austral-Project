import { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import styles from '@/styles/homepage/Home.module.css';

//import images;


//import components
import MainBanner from '../../components/homepage/MainBanner';
import HighlightsMobileHomepage from '../../components/homepage/HighlightsMobileHomepage';
import HighlightsLaptopHomepage from '../../components/homepage/HighlightsLaptopHomepage';
import NewProductsLaptop from '../../components/homepage/NewProductsLaptopHomepage';
import NewProductMobile from '../../components/homepage/NewProductsMobileHomepage';

//import utils
import useWindowSize from '../../util/useWindowSize';

const Home: NextPage = () => {
  const screenSize: { width: number | undefined; height: number | undefined } = useWindowSize();
  const [display, setDisplay] = useState<string>('laptop');

  useEffect(() => {
    if (screenSize.width === undefined) {
      return
    }
    if (screenSize.width > 700) {
      setDisplay('laptop');
    }
    if (screenSize.width <= 700) {
      setDisplay('mobile');
    }
  }, [screenSize]);

  return (
    <main>
      <div className={styles.homepage}>
        <MainBanner />
        {display === 'mobile' && <HighlightsMobileHomepage />}
        {display === 'laptop' && <HighlightsLaptopHomepage />}
        {display === 'mobile' && <NewProductMobile />}
        {display === 'laptop' && <NewProductsLaptop />}
      </div>
    </main>
  )
};

export default Home;
