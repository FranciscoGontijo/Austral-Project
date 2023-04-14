import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

//import images;


//import components
import MainBanner from '../../components/MainBanner';
import HighlightsMobileHomepage from '../../components/HighlightsMobileHomepage';
import HighlightsLaptopHomepage from '../../components/HighlightsLaptopHomepage';

//import utils
import useWindowSize from '../../util/useWindowSize';

const Home: NextPage = () => {
  const screenSize: {width: number | undefined; height: number | undefined} = useWindowSize();
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
    <main className={styles.homepage}>
      <Head>
        <title>Austral Store</title>
      </Head>
      <MainBanner />
      {display === 'mobile' && <HighlightsMobileHomepage />}
      {display === 'laptop' && <HighlightsLaptopHomepage />}
    </main>
  )
};

export default Home;
