import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroVideo from "./components/HeroVideo";
import ShowCaseAds from "./components/ShowCaseAds";
import NewArrivalsCarousel from "./components/NewArrivalsCarousel";
import PromoAds from "./components/PromoAds";
import CollectionsAds from "./components/CollectionAds";
import ProductGallery from "./components/CollectionGallery";
import ProductGrid from "./pages/ProductGrid";

function App() {

  return (
    <Flex flexDirection={"column"} bg={"#f0fff11a"}>
        <Header />
        <Hero />
        <HeroVideo />
        <ShowCaseAds />
        <NewArrivalsCarousel />
        <PromoAds />
        <CollectionsAds />
        <ProductGallery />
        <ProductGrid />
    </Flex>
  );
}

export default App;
