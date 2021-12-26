import React from 'react';
import './style.css';
import { ChakraProvider } from 'chakra-ui';

export default function App() {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
