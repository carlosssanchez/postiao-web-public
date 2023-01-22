// import { Box } from "@chakra-ui/react";
import { Box, Center, Image, Flex, Badge, Text, Link } from "@chakra-ui/react";
import { useLoaderData } from "@remix-run/react";
import Navbar from "../components/navbar";

export async function loader() {
  return [ {"id":"one"}, {"id":"two"} ];
}

export default function Index() {
  let myData: [] = useLoaderData();
  let ids = myData.map( ({id} ) => (<Text key={id}> Hello {id}</Text>) );
  return (
    <>
      <Navbar /><Center h="100vh" backgroundColor='rgb(240, 244, 249)'>
        <Box p="5" maxW="320px" borderWidth="1px">
          {ids}
          <Image id='housethumb-1' borderRadius="md" src="https://bit.ly/2k1H1t6" />
          <Flex align="baseline" mt={2}>
            <Badge colorScheme="pink">Plus</Badge>
            <Text
              ml={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="pink.800"
            >
              Verified &bull; Cape Town
            </Text>
          </Flex>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            Modern, Chic Penthouse with Mountain, City & Sea Views
          </Text>
          <Text mt={2}>$119/night</Text>
          <Flex mt={2} align="center">
            <Text color="orange.400"> ★ </Text>
            <Text ml={1} fontSize="sm">
              <b>4.84</b> (190)
            </Text>
          </Flex>
        </Box>
      </Center>
    </>
  );
}
