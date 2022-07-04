import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Fonts from '../components/fonts'
import { AnimatePrecense } from "framer-motion";


function Website({ Component, pageProps, router }){
    return (
        <ChakraProvider theme={theme}>
        <Fonts />
            <Layout router={router}>
            <AnimatePrecense
                exitBeforeEnter
                initial={true}>
                <Component {...pageProps} key={router.route} />
            </AnimatePrecense>
            </Layout>
        </ChakraProvider>
    )
}

export default Website