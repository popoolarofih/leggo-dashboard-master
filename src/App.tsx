import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid

} from "@chakra-ui/react"

import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/main"
import Auth from "./pages/auth"
import { theme } from "./chakra"
import Structures from "./pages/main/Structures"
import Contents from "./pages/main/Contents"
import Authors from "./pages/main/Authors"
import Settings from "./pages/main/Settings"
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export const App = () => (
  <ChakraProvider theme={theme("light")}>
    <QueryClientProvider client={ queryClient }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/structures" element={<Structures />}/>
          <Route path="/contents" element={<Contents />}/>
          <Route path="/authors" element={<Authors />}/>
          <Route path="/contents" element={<Contents />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </ChakraProvider>
)
