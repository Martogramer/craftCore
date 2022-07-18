import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work =()=>{
    return(
        <Layout title="byfree">
            <Container>
                <Title>
                    byfree <Badge>2022</Badge>
                </Title>
                <P>
                    un poco mas de sarabara para rellenar espacios. Bien tanteamos comod
                    va quedando toda esta wea q me gusta
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

                <WorkImage src="/images/freelogin.png" />
                <WorkImage src="/images/contratafree.png" />
                <WorkImage src="/images/dashboard.png" />
                <WorkImage src="/images/freeruta.png" />
            </Container>
        </Layout>
    )
}

export default Work