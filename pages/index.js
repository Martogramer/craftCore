import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    Image,
    useColorModeValue,
    chakra
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Buenas, soy un full-stack developer based in Arg!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box floxGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Aquí Tu Header Sakatuka !
                    </Heading>
                    <p> Artesano Digital ( developer / designer / entrepeneur )</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image
                            src="/images/martn.jpg"
                            alt="Profile image"
                            borderRadius="full"
                            width="100%"
                            height="100%"
                        />
                    </Box>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    
                    <NextLink href="/works/inkdrop" passHref scroll={false}>
                        <Link>Inkdrop</Link>
                    </NextLink>
                    . He publishes content for marketing his products and his
                    channel called 
                    <NextLink href="" passHref>
                        <Link target="_blank"> telescopiens</Link>
                    </NextLink>
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works" passHref scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1995</BioYear>
                    Born in Santa Fe, Arg.
                </BioSection>
            </Section>
        </Container>
</Layout>
    )
}
export default Page