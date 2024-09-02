import { Flex } from "@chakra-ui/react"
import ProductGrid from "./pages/ProductGrid"
import ProductGallery from "./components/CollectionGallery"
import CollectionsAds from "./components/CollectionAds"
import PromoAds from "./components/PromoAds"
import NewArrivalsCarousel from "./components/NewArrivalsCarousel"
import ShowCaseAds from "./components/ShowCaseAds"
import Hero from "./components/Hero"
import Header from "./components/Header"

function App() {

  return (
    <Flex flexDirection={"column"}>
      <Header/>
      <Hero/>
      <ShowCaseAds/>
      <NewArrivalsCarousel/>
      <PromoAds/>
      <CollectionsAds/>
      <ProductGallery/>
      <ProductGrid/>
    </Flex>
  )
}

export default App
