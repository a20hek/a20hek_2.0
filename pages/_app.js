import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import 'focus-visible/dist/focus-visible';

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
