import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work =()=>{
    return(
        <Layout title="momentum events">
            <Container>
                <Title>
                    Web app for event producer  <Badge>2022</Badge>
                </Title>
                <P>
                    Landing page that connects the companys bewsites, where you can access an online catering quote, with confirmation  by email.
                    A booking system for catering service.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://momentum-eventos.com/">https://momentum-eventos.com/  <ExternalLinkIcon /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>code</Meta>
                        <span> </span><Link href="https://github.com/Martogramer">https://github.com/Martogramer  <ExternalLinkIcon /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> NodeJs, React, Reacstrap, Bootstrap, Scss, Firebase </span>
                    </ListItem>
                </List>

                <WorkImage src="/images/martelilanding.png" />
                <WorkImage src="/images/marteliform.png" />
                <WorkImage src="/images/martelicatering.png" />
                <WorkImage src="/images/martelicard.png" />
            </Container>
        </Layout>
    )
}

export default Work