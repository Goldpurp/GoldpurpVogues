import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ChakraProvider>
    <Provider store= {store}>
      <RouterProvider router={router} />
    </Provider>
    </ChakraProvider>

  </StrictMode>,
)
