import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/mobilegraf.png'
import inmofrente from '../public/images/inmofrente.png'
import byfree from '../public/images/dashboard.png'
import mindmap from '../public/images/martportada.png'
import martelihead from '../public/images/martelihead.png'


const Works = () => (
    <Layout>
    <Container>
      
      <Heading as="h3" fontSize={20} mt={3} mb={4}>
        Works
      </Heading>
      <Divider my={6} />     
      
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="bienesraices" title="bienesraices" thumbnail={inmofrente}>
            App Bienes raíces php 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="martelli" title="Event Budgeter" thumbnail={martelihead}>
            Web app for event producer
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="mindmap" title="mind map portfolio" thumbnail={mindmap}>
            Sarabara Sarabara mas sarabara lorem impsun y todo lo que se te ocurra, mas además también quizás y porqué.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="byfree" title="by free collab development" thumbnail={byfree}>
            plataforma de desarrollo colaborativo
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem id="covid" title="Covid Global Data" thumbnail={thumbInkdrop}>
            Sarabara Sarabara
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
    </Layout>
)

export default Works