import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'black',
        color: 'white'
      }
    },
  },
})

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <Component className=".h-screen .w-screen" {...pageProps} />
  </ChakraProvider>
  
}

export default MyApp
