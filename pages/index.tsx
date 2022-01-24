import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import DemoReel from '../components/demo_reel'
import ProjectList from '../components/project_list'
import Layout from '../components/layout'


const Home: NextPage = () => {
  return (
   
      <>
      <Head>
      <title>Mikel-Jon (Mike) West</title>
      <meta name="description" content="Portfolio for Mike West" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
          
          <Layout>
          
        <div className='text-slate-700 flex flex-col gap-6'>
          <Header />
          <DemoReel />
          <div>Signature</div>
          <ProjectList />
         
        </div>
      </Layout>
      
      </>
  )
}

export default Home
