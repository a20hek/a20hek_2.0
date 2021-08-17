import React, { useState } from 'react';
import {
	Box,
	Flex,
	Heading,
	Text,
	Input,
	Center,
	Image,
	SimpleGrid,
	Link,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	InputGroup,
	InputLeftAddon,
	CloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export default function Navbar() {
	const [display, setDisplay] = useState('none');
	return (
		<Box>
			<Flex justifyContent='space-between'>
				<Flex justifyContent='center' mt='2%' mr='3%' ml='3%'>
					<NextLink href='/#'>
						<Heading textColor='#00ffd1'>a20hek</Heading>
					</NextLink>
				</Flex>
				<Flex w='100%' justifyContent='flex-end' display={['none', 'none', 'flex']}>
					<Flex align='center'>
						<NextLink href='/signup' passHref>
							<Button
								mr={20}
								variant='outline'
								color='white'
								_hover={{ bg: '#222222' }}
								colorScheme='blackAlpha'
								onClick={() => router.push('/signup')}>
								Signup
							</Button>
						</NextLink>
					</Flex>
					<Flex align='center'>
						<Button
							mr={20}
							color='white'
							variant='ghost'
							_hover={{ bg: '#222222' }}
							colorScheme='blackAlpha'>
							Login
						</Button>
					</Flex>
					<Flex align='center'>
						<NextLink href='/contact' passHref>
							<Link mr={20} color='white'>
								Contact
							</Link>
						</NextLink>
						<NextLink href='/about' passHref>
							<Link mr={20} color='white'>
								About
							</Link>
						</NextLink>
					</Flex>
				</Flex>
				<HamburgerIcon
					mt='2%'
					mr='3%'
					ml='3%'
					h={10}
					w={10}
					color='#ffffff'
					size='4xl'
					cursor='pointer'
					display={['flex', 'flex', 'none']}
					onClick={() => setDisplay('flex')}
				/>
			</Flex>
			<Flex
				w='100vw'
				bgColor='#000000'
				h='100vh'
				pos='fixed'
				top='0'
				left='0'
				overflow='auto'
				zIndex={20}
				direction='column'
				display={display}>
				<Flex justifyContent='flex-end' w='100vw'>
					<CloseButton
						color='#ffffff'
						h={10}
						w={10}
						onClick={() => setDisplay('none')}
						mt='2%'
						mr='3%'
						ml='3%'
						size='lg'
					/>
				</Flex>
				<Flex direction='column' align='center'>
					<Flex align='center'>
						<NextLink href='/signup' passHref>
							<Button
								m={5}
								variant='outline'
								color='white'
								_hover={{ bg: '#222222' }}
								colorScheme='blackAlpha'
								onClick={() => router.push('/signup')}
								fontSize='2xl'>
								Signup
							</Button>
						</NextLink>
					</Flex>
					<Flex align='center'>
						<Button
							m={5}
							color='white'
							variant='ghost'
							_hover={{ bg: '#222222' }}
							colorScheme='blackAlpha'
							fontSize='2xl'>
							Login
						</Button>
					</Flex>
					<Flex>
						<NextLink href='/contact' passHref>
							<Link m={5} color='white' fontSize='2xl'>
								Contact
							</Link>
						</NextLink>
					</Flex>
					<Flex>
						<NextLink href='/about' passHref>
							<Link fontSize='2xl' m={5} color='white'>
								About
							</Link>
						</NextLink>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
}
