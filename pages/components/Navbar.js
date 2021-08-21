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
		<Box pr={10} pl={10}>
			<Flex justifyContent='space-between' p='2%'>
				<Flex justifyContent='center'>
					<NextLink href='/#'>
						<Text
							cursor='pointer'
							fontWeight='600'
							textColor='#00ffd1'
							fontSize='1.5em'>
							a20hek
						</Text>
					</NextLink>
				</Flex>
				<Flex w='100%' justifyContent='flex-end' display={['none', 'none', 'flex']}>
					<Flex align='center'>
						<NextLink href='/blog' passHref>
							<Link mr={20} color='#00ffd1'>
								blog
							</Link>
						</NextLink>
						<NextLink href='/work' passHref>
							<Link mr={20} color='#00ffd1'>
								work
							</Link>
						</NextLink>
						<NextLink href='mailto:abhishek@a20hek.com' passHref>
							<Link mr={20} color='#00ffd1'>
								contact
							</Link>
						</NextLink>
						<NextLink href='/about' passHref>
							<Link mr={20} color='#00ffd1'>
								about
							</Link>
						</NextLink>
					</Flex>
				</Flex>
				<HamburgerIcon
					mr='3%'
					ml='3%'
					h={6}
					w={6}
					color='#00ffd1'
					size='2xl'
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
						color='#00ffd1'
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
					<Flex>
						<NextLink href='/blog' passHref>
							<Link m={5} color='#00ffd1' fontSize='2xl'>
								blog
							</Link>
						</NextLink>
					</Flex>
					<Flex>
						<NextLink href='/work' passHref>
							<Link m={5} color='#00ffd1' fontSize='2xl'>
								work
							</Link>
						</NextLink>
					</Flex>
					<Flex>
						<NextLink href='/contact' passHref>
							<Link m={5} color='#00ffd1' fontSize='2xl'>
								contact
							</Link>
						</NextLink>
					</Flex>
					<Flex>
						<NextLink href='/about' passHref>
							<Link fontSize='2xl' m={5} color='#00ffd1'>
								about
							</Link>
						</NextLink>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
}
