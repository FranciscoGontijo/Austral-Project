import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

//import components
import NavBar from '../../components/Navbar';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <NavBar/>
      <h1>Hello world</h1>
    </div>
  )
};

export default Home;
