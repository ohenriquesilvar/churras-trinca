import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Router } from "./Router"
import { ContextProvider } from "./context"

function App() {
  const theme = extendTheme({
    fonts: {
      body: "Raleway, sans-serif",
      heading: "Raleway, sans-serif",
    },
  })

  return (
    <ContextProvider>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </ContextProvider>
  )
}

export default App
