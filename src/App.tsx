import { Flex } from "@chakra-ui/react";
import Hero from "./components/Hero";
import HeroVideo from "./components/HeroVideo";
import ShowCaseAds from "./components/ShowCaseAds";
import PromoAds from "./components/PromoAds";
import CollectionsAds from "./components/CollectionAds";
import ProductGallery from "./components/CollectionGallery";
import ProductList from "./components/ProductList";
import ShowCaseCarousel from "./components/ShowCaseCarousel";
import ComingSoon from "./components/ComingSoon";
import SingleBrandAds from "./components/SingleBrandAds";


function Home() {
  return (
    <Flex flexDirection={"column"} bg={"#f0fff11a"} width="100%" height="100%">
      <Hero />
      <HeroVideo />
      <ShowCaseAds />
      <ShowCaseCarousel />
      <PromoAds />
      <SingleBrandAds/>
      <CollectionsAds />
      <ProductGallery />
      <ProductList
        onTabChange={(filter: string) => {
          { filter };
        }}
      />
      <ComingSoon/>
    </Flex>
  );
}

export default Home;
