import Head from 'next/head'
import Filters from '../src/components/Filters'
import Header from '../src/components/Header'
import Cards from '../src/components/Cards'
import { RestaurantProvider } from '../src/Context/useRestaurants'
import { API_URL } from '../src/components/Constants'

export default function Home({ restaurants }) {
  return (
    <>
      <Head>
        <title>Criato</title>
        <meta name="description" content="Your doorstep to cuisines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RestaurantProvider initialData={restaurants}>
        <div>
          <Header />
          <Filters />
          <Cards />
        </div>
      </RestaurantProvider>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/restaurants`)
  const restaurants = await res.json()

  return { props: { restaurants } }
}