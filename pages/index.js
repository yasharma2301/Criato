import Head from 'next/head'
import Filters from '../src/components/Filter/Filters'
import Header from '../src/components/Header'
import Cards from '../src/components/Cards/Cards'
import { RestaurantProvider } from '../src/Context/useRestaurants'
import { API_URL } from '../src/components/Constants'

export default function Home({ restaurants, error }) {
  return (
    <>
      <Head>
        <title>Criato</title>
        <meta name="description" content="Your doorstep to cuisines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        error.errorCode !== false ? (<RestaurantProvider initialData={restaurants}>
          <div>
            <Header />
            <Filters />
            <Cards />
          </div>
        </RestaurantProvider>) :
          (
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
              <div className='border border-red-300 rounded-lg p-5 hover:bg-red-100/[.55] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className='text-bg-zinc-300 font-semibold text-xl'>{error?.message}</div>
                <div>Sit tight we will look into the problem</div>
              </div>
            </div>)
      }

    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/restaurants`)
  const errorCode = res.ok ? false : res.statusCod
  const restaurants = await res.json()
  return {
    props: { restaurants, error: { code: errorCode, message: 'Something went wrong' } },

  }
}