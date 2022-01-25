import type { NextPage } from 'next'
import Head from 'next/head'
import DemoReel from '../components/demo_reel'
import Header from '../components/header'


const Home: NextPage = () => {

// const projectMetadataArray = [];

// projectMetadataArray.push(
//   {
//     title: "A Project by Mikel-Jon West",
//     description: "Description of the project",
//     linkUrl: "/test-project",
//     image: "/images/projects-cover.jpg",
//   }
// );

//   const projectPreviewElements = [];

const title: string = "Mikel-Jon (Mike) West";
const description: string = "Portfolio website for Mikel-JOn (Mike) West";
const tagline: string = "Video Content Creator and IT Technician";
const image: string = "/images/signature.png"
const imageAlt: string = "Signature"

  return (
   
      <>
      <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header title={title} tagline={tagline} image={image} imageAlt={imageAlt}>
    <DemoReel />
      </Header> 
    <div className='mt-4'>
          {/* <ProjectPreview {...projectPreviewElements} /> */}
          </div>     
      </>
  )
}

export default Home
