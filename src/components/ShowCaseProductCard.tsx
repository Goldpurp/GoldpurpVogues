import { Box, Image, Text, Skeleton, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProductInterface } from "../redux/productInterface";
import { useState } from "react";

interface ShowCaseProductCardProps {
    product: ProductInterface;
    onLikeToggle: (id: number, item: ProductInterface) => void;
    likedItems: { [id: number]: boolean };
    loading: boolean;
}

const ShowCaseProductCard: React.FC<ShowCaseProductCardProps> = ({
    product,
    onLikeToggle,
    likedItems,
    loading,
}) => {
    const [liked, setLiked] = useState<boolean>(likedItems[product.id] || false);

    const handleLikeToggle = () => {
        setLiked(!liked);
        onLikeToggle(product.id, product);
    };

    return (
        <Box
            borderRadius="md"
            overflow="hidden"
            flexShrink={0}
            w={{ base: "160px", md: "190px", lg: "210px", xl: "250px" }}
            mr={2}
            position="relative"
        >
            <Skeleton isLoaded={!loading}>
                <Link to={`/products/${product.label}`}>
                    <Image
                        src={product.src[0]}
                        alt={product.label}
                        fallbackSrc="/icon/WebLogo.png"
                        objectFit="cover"
                        cursor={"pointer"}
                    />
                </Link>
            </Skeleton>

            <Box
                position="absolute"
                right={2}
                bottom={0}
                bg="#f8f8f8"
                p={1}
                cursor="pointer"
                borderRadius="full"
                onClick={handleLikeToggle}
            >
                {liked ? (
                    <Box boxSize="26px" color="red">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={"25px"}>
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.312 3c2.973 0 5.437 2.322 5.437 5.25 0 3.924-2.438 7.11-4.738 9.257a25.166 25.166 0 0 1-4.244 3.17 15.25 15.25 0 0 1-.383.218l-.022.012-.007.003a.753.753 0 0 1-.653 0z" />
                        </svg>
                    </Box>
                ) : (
                    <Box boxSize="26px" color="red">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path
                                d="M16.312 3a5.5 5.5 0 0 0-4.312 2.052A5.5 5.5 0 0 0 7.688 3C4.714 3 2.25 5.322 2.25 8.25c0 3.924 2.438 7.11 4.738 9.257a25.18 25.18 0 0 0 4.244 3.17c.132.075.258.142.383.218l.022.012.007.003a.753.753 0 0 0 .653 0l.007-.003.022-.012a15.24 15.24 0 0 0 .383-.218 25.168 25.168 0 0 0 4.244-3.17c2.3-2.147 4.738-5.333 4.738-9.257 0-2.928-2.464-5.25-5.438-5.25z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                color="red"
                            />
                        </svg>
                    </Box>
                )}
            </Box>

            <Box p={1} w="full" bg="#f8f8f8">
                <Skeleton isLoaded={!loading}>
                    <Text noOfLines={1} fontWeight={"500"} fontSize={{ base: "13px", md: "15px", lg: "17px" }}>
                        {product.label}
                    </Text>
                </Skeleton>
                <Skeleton isLoaded={!loading}>
                    <Text color="#386648" fontWeight={"700"} fontSize={{ base: "15px", md: "16px", lg: "18px" }}>
                        ₦{product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </Text>
                </Skeleton>

                <Skeleton isLoaded={!loading}>
                    <Flex pt={1}>
                        {product.color.map((color) => (
                            <Box
                                key={color.name}
                                w="19px"
                                h="19px"
                                bg={color.value}
                                borderRadius={"50%"}
                                border="1px solid #adb5bd"
                                mr={2}
                                display="inline-block"
                            />
                        ))}
                    </Flex>
                </Skeleton>
            </Box>
        </Box>
    );
};

export default ShowCaseProductCard;
