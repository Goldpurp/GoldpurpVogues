import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Image } from "@chakra-ui/react";


const ProducImageCarousel = ({ images }: { images: string[], title: string }) => {


    return (
        <Box position="relative" w="full" overflow="hidden">
            <Carousel
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                interval={8000}
                transitionTime={800}
                swipeable
                emulateTouch={true}
                autoPlay={false}
                dynamicHeight={true}
            >
                {images.map((src, index) => (
                    <Box key={index} position="relative"
                    >
                        <Image
                            src={src}
                            alt={`product-image-${index}`}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            transition="all 0.3s ease"
                            _hover={{ transform: "scale(1.05)" }}
                            onError={(e) => {
                                e.currentTarget.src = "../../public/icon/WebLogo.png";
                            }}
                        />
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default ProducImageCarousel;
