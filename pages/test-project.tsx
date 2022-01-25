import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projectCover from "../images/projects-cover.jpg";



const TestProject: NextPage = () => {
  return (
   
      <>
      <Head>
      <title>Test Project</title>
      <meta name="description" content="Testing project" />
    </Head>
    <div>
        <Image src={projectCover} />
          <div className='mt-4'>
          Testing a project
          </div>
          <Link href="/">
              <a className="font-bold hover:text-indigo-600">Back</a>
          </Link>
          </div>    
      </>
  )
}

export default TestProject