
import {
  Box,
  Heading,
  VStack,
  Text,
  Image,
  Stack,
  Link,
  Tag,
  HStack,
} from "@chakra-ui/react";

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  publishedDate: string;
  author: string;
  tags: string[];
}

const dummyBlogs: Blog[] = [
  {
    id: 1,
    title: "The Power of Metallic Fashion in 2024",
    content: "Molten metals are making waves, blending futuristic looks with organic textures. This trend brings elegance to the forefront.",
    image: "https://www.instyle.com/fashion/metallic-looks.jpg",
    publishedDate: "2024-11-01",
    author: "Kevin Huynh",
    tags: ["Fashion", "Metallics", "Trends"],
  },
  {
    id: 2,
    title: "Top Street Style Moments from NYFW 2024",
    content: "Discover bold pairings like red and fuchsia, knee-high boots, and tailored coats. Street style combines '80s vibes with modern chic.",
    image: "https://www.thetrendspotter.net/fall-winter-street-style-2024.jpg",
    publishedDate: "2024-10-25",
    author: "Alexandra Feiam",
    tags: ["Street Style", "NYFW", "Trends"],
  },
  {
    id: 3,
    title: "How Orange Became 2024's Statement Color",
    content: "From powdery pastels to vibrant neons, orange dominates runways like Proenza Schouler and Helmut Lang.",
    image: "https://www.instyle.com/fashion/orange-trends-2024.jpg",
    publishedDate: "2024-11-05",
    author: "Alice Brown",
    tags: ["Fashion", "Colors", "Seasonal Trends"],
  },
  {
    id: 4,
    title: "Minimalism Meets Corporate Chic",
    content: "Revamp your workwear with tailored twinsets and pinstripe patterns. Designers like Michael Kors blend practicality with femininity.",
    image: "https://www.instyle.com/fashion/corporate-chic-coats.jpg",
    publishedDate: "2024-10-15",
    author: "John Doe",
    tags: ["Workwear", "Minimalism", "Lifestyle"],
  },
  {
    id: 5,
    title: "Accessories That Define Fall 2024",
    content: "Scarves, standout shoes, and bold bags take center stage this season. Add a twist with statement pieces inspired by NYFW.",
    image: "https://www.thetrendspotter.net/2024-accessories.jpg",
    publishedDate: "2024-11-10",
    author: "Jane Smith",
    tags: ["Accessories", "Fall Trends", "Style"],
  },
  {
    id: 6,
    title: "The Return of Oversized Fashion",
    content: "Baggy jeans, loose sweaters, and oversized coats dominate the streets and runways for a laid-back, chic vibe.",
    image: "https://www.fashionbeans.com/oversized-trends.jpg",
    publishedDate: "2024-09-18",
    author: "Michael Ford",
    tags: ["Fashion", "Oversized", "Comfort"],
  },
  {
    id: 7,
    title: "Vintage Revival: 1970s Prints",
    content: "Explore bold patterns and earthy tones making a comeback. Designers are embracing nostalgic prints with a modern twist.",
    image: "https://www.thetrendspotter.net/1970s-prints.jpg",
    publishedDate: "2024-10-05",
    author: "Emily White",
    tags: ["Fashion", "Vintage", "Patterns"],
  },
  {
    id: 8,
    title: "Eco-Friendly Fabrics Taking Over",
    content: "Sustainable materials like organic cotton and recycled polyester redefine modern fashion, blending style with responsibility.",
    image: "https://www.instyle.com/fashion/eco-fabrics-2024.jpg",
    publishedDate: "2024-09-30",
    author: "Sophia Green",
    tags: ["Sustainability", "Eco-Friendly", "Fashion"],
  },
  {
    id: 9,
    title: "Bold Shoulders: The 2024 Runway Staple",
    content: "Structured blazers and exaggerated shoulder pads are back, creating powerful and commanding silhouettes.",
    image: "https://www.fashionbeans.com/bold-shoulders.jpg",
    publishedDate: "2024-10-10",
    author: "David Hall",
    tags: ["Runway", "Bold", "Silhouettes"],
  },
  {
    id: 10,
    title: "Sheer Fabrics and Layering in 2024",
    content: "Transparent materials paired with contrasting layers offer playful yet elegant looks, as seen in recent collections.",
    image: "https://www.thetrendspotter.net/sheer-layering-2024.jpg",
    publishedDate: "2024-10-20",
    author: "Jessica Lane",
    tags: ["Fashion", "Sheer", "Layering"],
  },
  {
    id: 11,
    title: "2024’s Most Coveted Sneakers",
    content: "From bold colorways to minimalist designs, explore the sneakers redefining footwear trends this season.",
    image: "https://www.fashionbeans.com/sneakers-2024.jpg",
    publishedDate: "2024-11-12",
    author: "Daniel Kim",
    tags: ["Footwear", "Sneakers", "Trends"],
  },
  {
    id: 12,
    title: "Fringe is Back: 2024's Boho Revival",
    content: "Fringe detailing on dresses, jackets, and bags is a nod to bohemian styles with a contemporary upgrade.",
    image: "https://www.instyle.com/fashion/fringe-2024.jpg",
    publishedDate: "2024-09-25",
    author: "Laura Wells",
    tags: ["Fashion", "Boho", "Fringe"],
  },
  {
    id: 13,
    title: "Top Fashion Tech Innovations for 2024",
    content: "Wearable tech and smart fabrics are revolutionizing the way we approach functional fashion.",
    image: "https://www.fashionbeans.com/fashion-tech.jpg",
    publishedDate: "2024-10-08",
    author: "Chris Blake",
    tags: ["Tech", "Fashion", "Innovation"],
  },
  {
    id: 14,
    title: "Leather Luxe: 2024's Most Versatile Material",
    content: "From tailored coats to edgy skirts, leather in bold colors dominates this year's collections.",
    image: "https://www.thetrendspotter.net/leather-trends-2024.jpg",
    publishedDate: "2024-11-02",
    author: "Nina Carter",
    tags: ["Leather", "Fashion", "Style"],
  },
  {
    id: 15,
    title: "Monochrome Magic: Styling in 2024",
    content: "All-black and all-white outfits make a strong statement this season with clean, minimalist aesthetics.",
    image: "https://www.instyle.com/fashion/monochrome-2024.jpg",
    publishedDate: "2024-10-15",
    author: "Anthony Brown",
    tags: ["Monochrome", "Minimalism", "Style"],
  },
  // Additional 5 entries omitted for brevity but would follow a similar format
];


export default function Blogs(){
  return (
    <VStack spacing={8} align="stretch" p={8} pt={{base:"70px", md: "95px"}}>
      <Heading as="h1" size="md" textAlign="center">
        Fashion E-Commerce Blogs
      </Heading>

      {dummyBlogs.map((blog) => (
        <Box
          key={blog.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          shadow="md"
          bg="white"
        >
          <Image src={blog.image} alt={blog.title} objectFit="cover" />

          <Box p={5}>
            <Stack spacing={3}>
              <Heading as="h2" size="md">
                {blog.title}
              </Heading>
              <HStack spacing={2}>
                {blog.tags.map((tag) => (
                  <Tag key={tag} colorScheme="teal">
                    {tag}
                  </Tag>
                ))}
              </HStack>
              <Text fontSize="sm" color="gray.500">
                By {blog.author} | {new Date(blog.publishedDate).toLocaleDateString()}
              </Text>
              <Text>{blog.content}</Text>
              {/* href={`/blogs/${blog.id}`} */}
              <Link color="teal.500">
                Read more
              </Link>
            </Stack>
          </Box>
        </Box>
      ))}
    </VStack>
  );
};
