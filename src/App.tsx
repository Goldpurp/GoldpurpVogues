import { Flex } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

const ProductGrid = lazy(() => import("./pages/ProductGrid"));
const ProductGallery = lazy(() => import("./components/CollectionGallery"));
const CollectionsAds = lazy(() => import("./components/CollectionAds"));
const PromoAds = lazy(() => import("./components/PromoAds"));
const NewArrivalsCarousel = lazy(() => import("./components/NewArrivalsCarousel"));
const ShowCaseAds = lazy(() => import("./components/ShowCaseAds"));
const Hero = lazy(() => import("./components/Hero"));
const Header = lazy(() => import("./components/Header"));
const HeroVideo = lazy(() => import("./components/HeroVideo"));

function App() {
  return (
    <Flex flexDirection={"column"}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Hero />
        <HeroVideo />
        <ShowCaseAds />
        <NewArrivalsCarousel />
        <PromoAds />
        <CollectionsAds />
        <ProductGallery />
        <ProductGrid />
      </Suspense>
    </Flex>
  );
}

export default App;
