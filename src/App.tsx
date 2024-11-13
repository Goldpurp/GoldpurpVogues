import { Flex } from "@chakra-ui/react";
import Hero from "./components/Hero";
import HeroVideo from "./components/HeroVideo";
import ShowCaseAds from "./components/ShowCaseAds";
import NewArrivalsCarousel from "./components/NewArrivalsCarousel";
import PromoAds from "./components/PromoAds";
import CollectionsAds from "./components/CollectionAds";
import ProductGallery from "./components/CollectionGallery";
import ProductGrid from "./pages/ProductGrid";

function Home() {
  return (
    <Flex flexDirection={"column"} bg={"#f0fff11a"} width="100%" height="100%">
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

export default Home;
