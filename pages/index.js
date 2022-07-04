import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { 
    Button,
    Container, 
    Box, 
    Heading, 
    Image, 
    useColorModeValue, 
    Link
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box 
            borderRadius="lg" 
            bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')} p={3} mb={6} 
            align="center" 
            >
                Hello, I&apos;m a full-stack developer based in Argentina!
            </Box>
            <Box display={{ md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" vriant="page-title">
                        Martin Iribas
                    </Heading>
                    <p>Digital Craftzman ( Artist / Developer / Designer )</p>
                </Box>
            <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                <Image 
                borderColor="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                maxWidth="100px" 
                display="inline-block" 
                borderRadius="full" 
                src="/images/takuya.jpeg" 
                alt="profile image" 
                />
            </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Martin es un desarrollador apasionado por las nuevas tecnologias
                    dispuesto a actualizar sus conocimientos constantemente. Con +2 años de experiencia
                    en la industria presenta sus proyectos y colaboraciones mas recientes.
                    <NextLink href="/works/linkdrop">
                        <Link>Inkdrop</Link>
                    </NextLink>
                        .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
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
                <BioSection>
                    <BioYear>2010</BioYear>
                lorem ipsum dolor sit amet, consectetur adip lorem impsum, sed diam
                lorem ipsum dolor sit amet, consectetur adip lorem impsum, sed diam
                lorem ipsum dolor sit amet, consectetur adip lorem impsum, sed diam
                </BioSection>
                <BioSection>
                <BioYear>2010</BioYear>
                lorem ipsum dolor sit amet, consectetur adip lorem impsum, sed diam
                lorem ipsum dolor sit amet, consectetur adip lorem impsum, sed diam
                </BioSection>
                <BioSection>
                <BioYear>2012</BioYear>
                Working as a freelancer
                lorem ipsum dolor sit amet, consectetur adip lorem impsum, sed diam
                </BioSection>
                <BioSection>
                <BioYear>2018</BioYear>
                lorem ipsum dolor sit amet, consectetur adip lorem impsum, sed diam
                </BioSection>
                <BioSection>
                <BioYear>2020 to present</BioYear>
                lorem ipsum dolor sit amet, consectetur adip lorem impsum, sed diam
                lorem ipsum dolor sit amet, consectetur adip lorem impsum, sed diam
                lorem ipsum dolor sit amet, consectetur adip lorem impsum, sed diam
                </BioSection>
            </Section>
        </Container>
</Layout>
    )
}
export default Page