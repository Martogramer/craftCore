import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work =()=>{
    return(
        <Layout title="Real State Platform">
            <Container>
                <Title>
                    Real state services <Badge>2022</Badge>
                </Title>
                <P>
                    Web app for real state agents where to publish properties for sale. 
                    this project was built with sass n php sv
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/Martogramer">https://github.com/Martogramer  <ExternalLinkIcon /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>code</Meta>
                        <span> github - </span><Link href="https://github.com/Martogramer">https://github.com/Martogramer  <ExternalLinkIcon /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> NodeJs, Electron, React Native </span>
                    </ListItem>
                </List>

                <WorkImage src="/images/inmofirstpage.png" />
                <WorkImage src="/images/inmocontact.png" />
                <WorkImage src="/images/inmoabout.png" />
            </Container>
        </Layout>
    )
}

export default Work