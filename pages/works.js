import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/mobilegraf.png'
const Works = () => (
    <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            Sarabara Sarabara
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            Sarabara Sarabara
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
)

export default Works