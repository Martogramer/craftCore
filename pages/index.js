import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    Button,
    Image,
    useColorModeValue,
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
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={6} mb={6} align="center">
                Hi there! i am a full-stack developer based in Arg!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box floxGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Martin Iribas,
                        developer !
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
                    Currently collaborating on a freelance project that you can see here
                    <NextLink href="/works/martelli" passHref scroll={false}>
                        <Link> momentum</Link>
                    </NextLink>
                    . Publish content in blog format to share programming knowledge in
                    <NextLink href="" passHref>
                        <Link target="_blank"> telescopiens</Link>
                    </NextLink>. This portfolio was built with Next.
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
            <Section delay={0.3}>
                <BioSection>
                    <BioYear>2013</BioYear>
                    Graduate from high schol
                </BioSection>
            </Section>
            <Section delay={0.5}>
                <BioSection>
                    <BioYear>2015</BioYear>
                    Self-employed worker in areas sush as commerce and production, in charge of the public relations team, in sales and distribution.
                </BioSection>
            </Section>
            <Section delay={0.7}>
                <BioSection>
                    <BioYear>2017</BioYear>
                    I work in gastronomy. Gastronomic entrepeneurship.
                </BioSection>
            </Section>
            <Section delay={0.8}>
                <Heading as="h3" variant="section-title">
                    study
                </Heading>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Full Web Development Course.
                </BioSection>
            </Section>
            <Section delay={0.8}>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Full Stack Web Developer in Henry.
                </BioSection>
            </Section>
        </Container>
</Layout>
    )
}
export default Page