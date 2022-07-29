import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work =()=>{
    return(
        <Layout title="inkdrop">
            <Container>
                <Title>
                    mind map <Badge>2022</Badge>
                </Title>
                <P>
                    Personal website. Route  of freelance projects carried out. Implement framer motion effects and consume random images API.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/Martogramer">https://github.com/Martogramer  <ExternalLinkIcon /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Oderside</Meta>
                        <span> Windows/mac0S/Linux/iOS/Android </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> NodeJs, Electron, React Native </span>
                    </ListItem>
                </List>

                <WorkImage src="/images/martport.png" />
                <WorkImage src="/images/Mind_Map.jpg" />
            </Container>
        </Layout>
    )
}

export default Work