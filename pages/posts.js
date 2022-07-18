import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import ImagenProvisoria from '../public/images/mobilegraf.png'

const Posts = () => (
    <Layout title="Post">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem title="My Fish Workflow" thumbnail={ImagenProvisoria} />
                    <GridItem title="My Fish Workflow" thumbnail={ImagenProvisoria} />
                    <GridItem title="My Fish Workflow" thumbnail={ImagenProvisoria} />
                    <GridItem title="My Fish Workflow" thumbnail={ImagenProvisoria} />
                </SimpleGrid>
            </Section>
            <Section delay={0.3}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem title="My Fish Workflow" thumbnail={ImagenProvisoria} />
                    <GridItem title="My Fish Workflow" thumbnail={ImagenProvisoria} />
                    <GridItem title="My Fish Workflow" thumbnail={ImagenProvisoria} />
                    <GridItem title="My Fish Workflow" thumbnail={ImagenProvisoria} />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts