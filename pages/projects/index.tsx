import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projectsCover from "../../images/projects-cover.jpg";



const Projects: NextPage = () => {
  return (
   
      <>
      <Head>
      <title>Projects</title>
      <meta name="description" content="Projects" />
    </Head>
    <div>
        <Image src={projectsCover} />
          <div className='mt-4'>
          Testing projects
          </div>
          <Link href="/">
              <a className="font-bold hover:text-indigo-600">Back</a>
          </Link>
          </div>    
      </>
  )
}

export default Projects