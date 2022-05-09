import Head from 'next/head'
import Filters from '../src/components/Filters'
import Header from '../src/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Criato</title>
        <meta name="description" content="Your doorstep to cuisines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-7xl mx-auto px-5'>
        <Header/>
        <Filters/>
      </div>
    </>
  )
}
