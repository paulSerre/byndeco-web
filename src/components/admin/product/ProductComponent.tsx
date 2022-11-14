import { Flex, HStack, Spacer, VStack, Image, Text } from "@chakra-ui/react"
import { IProduct } from "models/Product.schema"

export default function ProductComponent({ 
    product
}: {
    product: IProduct
}) {
    return (
        <Flex
        direction="row"
        p="3"
        border="1px"
        my="2"
        rounded="lg"
        align="center"
      >
        <HStack spacing="4" align="center">
          <Image
            src={product.image?.[0]}
            boxSize={12}
          />
  
          <Flex direction="column" justify="space-between">
            <HStack>
              <Text fontWeight="600" noOfLines={1} fontSize="sm" >
                {product.name}
              </Text>
            </HStack>
            <HStack mt="2">
              <Text fontWeight="light" fontSize="xs">
                {product.price}$
              </Text>
            </HStack>
          </Flex>
        </HStack>
  
        <Spacer />
  
        <VStack>
            
        </VStack>
      </Flex>
    )
}