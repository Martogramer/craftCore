import { ChakraProvider } from "@chakra-ui/react";
import Layaut from '../components/layouts/main'

const Website = ({ Component, pageProps, router }) =>{
    return (
        <ChakraProvider>
            <Layaut router={router}>
                <Component {...pageProps} key={router.router} />
            </Layaut>
        </ChakraProvider>
    )
}

export default Website