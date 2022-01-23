import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import DemoReel from '../components/demo_reel'
import ProjectList from '../components/project_list'
import Footer from '../components/footer'
import Layout from '../components/layout'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mikel-Jon (Mike) West</title>
        <meta name="description" content="Portfolio for Mike West" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
    <div>Navigation</div>
    <Header />
    <DemoReel />
    <div>Signature</div>
    <ProjectList />
    <Footer />
    </Layout>
    </div>
  )
}

export default Home
