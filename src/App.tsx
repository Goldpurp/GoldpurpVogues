import { Flex } from "@chakra-ui/react"
import ProductGrid from "./pages/ProductGrid"

function App() {

  return (
    <Flex flexDirection={"column"} px={4}>
      <ProductGrid/>
    </Flex>
  )
}

export default App
