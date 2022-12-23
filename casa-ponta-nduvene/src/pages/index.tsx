import { About } from 'components/templates/About/About';
import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from '../components/organisms/Hero/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Casa Ponta Duvini</title>
      </Head>
      <Hero />
      <About />
    </>
  )
}

export default Home;