import { Box, Button, Skeleton, Flex, Heading, Text } from "@chakra-ui/react";
// import { ProductInterface } from "../redux/productInterface";
import { Link } from "react-router-dom";
import ProducImageCarousel from "./ProducImageCarousel";
import { ProductInterface } from "../redux/productSlice";

export function ProductCard({
    item,
    loading,
    liked,
    expanded,
    activeColor,
    activeSize,
    onLikeToggle,
    onExpand,
    onAddToCart,
    onColorClick,
    onSizeClick,
    useCarousel = false,
    showLikeIcon = true,
    onDelete,
}: {
    item: ProductInterface;
    loading: boolean;
    liked: boolean;
    expanded: boolean;
    activeColor: string | null;
    activeSize: string | null;
    onLikeToggle: (id: number, item: ProductInterface) => void;
    onExpand: (id: number) => void;
    onAddToCart: (item: ProductInterface) => void;
    onColorClick: (id: number, color: string) => void;
    onSizeClick: (id: number, size: string) => void;
    useCarousel?: boolean;
    showLikeIcon?: boolean;
    onDelete?: (id: number) => void;
}) {
    return (
        <Box
            bg="transparent"
            border="1px solid #e2e6e9"
            position="relative"
            cursor="pointer"
        >
            {/* Image and Wishlist Toggle */}

            <Skeleton isLoaded={!loading}>
                <Link to={`/products/${item.label}`}>
                    {useCarousel ? (
                        <ProducImageCarousel images={item.src} title={item.label} />
                    ) : (
                        <Box>
                            <img
                                src={item.src[0]}
                                alt={item.label}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    )}
                </Link>
            </Skeleton>

            {item.discount != 0 && (
                <Box
                    position="absolute"
                    left={2}
                    top={3}
                    bg="#bc4749"
                    py={1}
                    px={2}
                    borderRadius="full"
                    fontSize={"12px"}
                    color={"#fff"}
                    fontWeight={"700"}
                    zIndex={9}
                >
                    <Text>⁃{item.discount}%</Text>
                </Box>
            )}

            {showLikeIcon ? (
                <Button
                    position="absolute"
                    right={2}
                    top={2}
                    bg="#fff"
                    _hover={{ background: "none" }}
                    _focus={{ boxShadow: "none" }}
                    transition="none"
                    variant={"ghost"}
                    colorScheme={liked ? "red" : "red"}
                    p={"1px"}
                    borderRadius="full"
                    onClick={() => onLikeToggle(item.id, item)}
                >
                    {liked ? (
                        <Box boxSize="24px">
                            {/* Liked icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.312 3c2.973 0 5.437 2.322 5.437 5.25 0 3.924-2.438 7.11-4.738 9.257a25.166 25.166 0 0 1-4.244 3.17 15.25 15.25 0 0 1-.383.218l-.022.012-.007.003a.753.753 0 0 1-.653 0z" />
                            </svg>
                        </Box>
                    ) : (
                        <Box boxSize="24px">
                            {/* Unliked icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M16.312 3a5.5 5.5 0 0 0-4.312 2.052A5.5 5.5 0 0 0 7.688 3C4.714 3 2.25 5.322 2.25 8.25c0 3.924 2.438 7.11 4.738 9.257a25.18 25.18 0 0 0 4.244 3.17c.132.075.258.142.383.218l.022.012.007.003a.753.753 0 0 0 .653 0l.007-.003.022-.012a15.24 15.24 0 0 0 .383-.218 25.168 25.168 0 0 0 4.244-3.17c2.3-2.147 4.738-5.333 4.738-9.257 0-2.928-2.464-5.25-5.438-5.25z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Box>
                    )}
                </Button>
            ) : (
                <Button
                    position="absolute"
                    right={2}
                    top={2}
                    bg="#fff"
                    _hover={{ background: "none" }}
                    _focus={{ boxShadow: "none" }}
                    transition="none"
                    variant={"ghost"}
                    p={"1px"}
                    borderRadius="full"
                    onClick={() => onDelete?.(item.id)}
                >
                    <Box boxSize="24px">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            color="red"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Box>

                </Button>
            )}

            <Button
                position={"absolute"}
                bottom={0}
                right={"-5px"}
                onClick={() => onExpand(item.id)}
                variant={"ghost"}
                cursor="pointer"
                _hover={{ background: "none" }}
                _focus={{ boxShadow: "none" }}
                transition="none"
            >
                {expanded ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="24px"
                        height="24px"
                        stroke="currentColor"
                        stroke-width="1.5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="24px"
                        height="24px"
                        stroke="currentColor"
                        stroke-width="0.5"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                )}
            </Button>

            {/* Product Details */}

            <Box px={2} pb={3} pt={1} w="full" bg="#fff">
                <Skeleton isLoaded={!loading}>
                    <Text
                        noOfLines={1}
                        fontSize={{ base: "12px", md: "15px", lg: "17px" }}
                    >
                        {item.label}
                    </Text>
                </Skeleton>
                <Skeleton isLoaded={!loading}>
                    <Heading
                        as="h5"
                        size="sm"
                        color="#386648"
                        mt={1}
                        fontSize={{ base: "13px", md: "16px", lg: "18px" }}
                    >
                        ₦
                        {Number(item.price.toFixed(2)).toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                        })}
                        {item.oldPrice !== 0 && (
                            <Text
                                as="span"
                                color="#780000"
                                textDecoration="line-through"
                                ml={2}
                                fontWeight="400"
                                fontSize={{ base: "10px", md: "13px", lg: "15px" }}
                            >
                                ₦
                                {Number(item.oldPrice?.toFixed(2)).toLocaleString("en-US", {
                                    minimumFractionDigits: 2,
                                })}
                            </Text>
                        )}
                    </Heading>
                </Skeleton>
            </Box>

            {/* Expandable Section */}

            <Skeleton isLoaded={!loading}>
                {expanded && (
                    <Flex
                        background={"#fff"}
                        py={3}
                        px={2}
                        position={"absolute"}
                        bottom={{ base: "50px", md: "60px" }}
                        right={0}
                        left={0}
                        flexDirection="column"
                        gap={2}
                        zIndex={9}
                    >
                        <Box w={"full"}>
                            <Flex gap={1.5} pb={3} overflowX={"scroll"}>
                                {item.sizes.map((size, idx) => (
                                    <Button
                                        borderRadius={0}
                                        alignItems={"center"}
                                        key={idx}
                                        size="sm"
                                        p={0}
                                        border={
                                            activeSize === size
                                                ? "2px solid #c4a163"
                                                : "1px solid #adb5bd"
                                        }
                                        variant={activeSize === size ? "solid" : "outline"}
                                        onClick={() => onSizeClick(item.id, size)}
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </Flex>
                            <Flex gap={1.5}>
                                {item.colors.map((color, idx) => (
                                    <Box
                                        key={idx}
                                        as="button"
                                        w={6}
                                        h={6}
                                        bg={color.value}
                                        border={
                                            activeColor === color.name
                                                ? "2px solid #c4a163"
                                                : "1px solid #adb5bd"
                                        }
                                        onClick={() => onColorClick(item.id, color.name)}
                                    />
                                ))}
                            </Flex>

                            <Button
                                position={"absolute"}
                                bottom={2}
                                right={2}
                                w="23px"
                                h="23px"
                                p={0}
                                variant={"ghost"}
                                cursor="pointer"
                                onClick={() => onAddToCart(item)}
                                isDisabled={!activeColor || !activeSize}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    width="24px"
                                    height="24px"
                                    stroke="currentColor"
                                    strokeWidth="0"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                        </Box>
                    </Flex>
                )}
            </Skeleton>

            {/* Expand/Collapse Button */}
        </Box>
    );
}
