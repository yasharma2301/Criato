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
  // const res = await fetch(`${API_URL}/restaurants`)
  // const restaurants = await res.json()
  const restaurants = [{"name":"Purple Martini","rating":3,"reviews":718953878,"cuisine":["North Indian","Chinese"],"deliveryTimeInMinutes":63,"costForTwo":334,"promoted":false,"open":true,"image":"https://b.zmtcdn.com/data/pictures/9/130309/ede93f0fd84236b70bc5f046e03b921a_featured_v2.jpg","id":"XXiF8pYyAHJfMAGoYwt6G"},{"name":"Britto's Restaurant & Bar","rating":4,"reviews":96154549,"cuisine":["Desserts","Drinks"],"deliveryTimeInMinutes":49,"costForTwo":1376,"promoted":false,"open":false,"image":"https://b.zmtcdn.com/data/pictures/3/16512333/1cbd58aca0606763252de99898865801_featured_v2.jpg","id":"ypMCAzt9wPYCJWAXTqJj5"},{"name":"Tomato's Beachside Kitchen","rating":2,"reviews":362459116,"cuisine":["Italian","Desserts"],"deliveryTimeInMinutes":42,"costForTwo":4615,"promoted":false,"open":true,"image":"https://b.zmtcdn.com/data/pictures/0/19305830/3a64c51a863148c348fb557b160a1ebf_featured_v2.jpg","id":"2M6LgBZvPlVIQm2w6LfR0"},{"name":"Olive Bar & Kitchen","rating":3,"reviews":9878435,"cuisine":["North Indian","Chinese"],"deliveryTimeInMinutes":111,"costForTwo":2589,"promoted":true,"open":true,"image":"https://b.zmtcdn.com/data/pictures/1/18678821/ec24d3f2ed14f17b6608d4186f93ade3_featured_v2.jpg","id":"2c52Phd8-7baRHEgY8I33"},{"name":"Yazu - Pan Asian Beach Club","rating":1,"reviews":17680963,"cuisine":["Japanese","Chinese"],"deliveryTimeInMinutes":21,"costForTwo":2825,"promoted":true,"open":true,"image":"https://b.zmtcdn.com/data/pictures/4/19309524/9e8e3d5bb9b6ba5a782bc63febd218f5_featured_v2.jpg","id":"H_8RlPHoAtNE1qiIrebiq"},{"name":"Bay 15","rating":4,"reviews":755648555,"cuisine":["Japanese","North Indian"],"deliveryTimeInMinutes":30,"costForTwo":2892,"promoted":true,"open":true,"image":"https://b.zmtcdn.com/data/pictures/9/16524239/29fd724641727d01a70b1b3fe6306c6e_featured_v2.jpg","id":"FzSGFAMCb0cjaVetPZo2-"},{"name":"Salt Bar And Restaurant With a Very Very Very Long Name Who Received The Award For Longest Named Restaurant In The World","rating":3,"reviews":393023192,"cuisine":["Drinks","North Indian"],"deliveryTimeInMinutes":50,"costForTwo":1255,"promoted":true,"open":false,"image":"https://b.zmtcdn.com/data/pictures/5/18919365/027f77b9a3736d4845e27e67dcb18280_featured_v2.jpg","id":"HWCr1GQgqo71yC0VPwXed"},{"name":"Martin's Corner","rating":2,"reviews":938616727,"cuisine":["Italian","North Indian"],"deliveryTimeInMinutes":91,"costForTwo":4350,"promoted":false,"open":false,"image":"https://b.zmtcdn.com/data/pictures/chains/8/16519168/6d2acbc3913d3ee1158f75d1bd218e49_featured_v2.jpg","id":"q3Lpggzij6k65z6YVlhDC"},{"name":"Toro Toro","rating":1,"reviews":476782505,"cuisine":["Japanese","North Indian","Italian","Drinks","Desserts","Goan","Mexican","European"],"deliveryTimeInMinutes":83,"costForTwo":3509,"promoted":false,"open":true,"image":"https://b.zmtcddn.com/data/pictures/4/19309524/9e8e3d5bb9b6ba5a782bc63febddd218f5_featured_v2.jpg","id":"L3HEpfHPUsrm2TUalofvw"}]

  return { props: { restaurants } }
}