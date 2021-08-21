import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import 'focus-visible/dist/focus-visible';
import './globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} />
			</AnimatePresence>
		</ChakraProvider>
	);
}

export default MyApp;
