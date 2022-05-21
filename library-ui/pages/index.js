import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import { Box } from '@chakra-ui/react';
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import FreeBooks from "../components/FreeBooks";



export default function Home() {

  return (
    <Box>
      <Head>
        <title>OPEN BOOKS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Carousel />
        <Featured />
        <FreeBooks />
      </Layout>
     
    </Box>
  );
}
