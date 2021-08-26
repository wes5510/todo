import {
	Box,
	Button,
	ChakraProvider,
	Container,
	HStack,
	Input,
	InputGroup,
	InputRightElement,
	List,
	ListItem,
	Select,
	VStack,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';

function App(): ReactElement {
	return (
		<ChakraProvider>
			<Container
				mt="20"
				border="1px"
				borderColor="gray.400"
				borderRadius="md"
				p="4"
				w="md"
				h="md"
			>
				<VStack>
					<InputGroup size="md">
						<Input pr="4.5rem" placeholder="Enter todo" />
						<InputRightElement width="4.5rem">
							<Button h="1.75rem" size="sm">
								Add
							</Button>
						</InputRightElement>
					</InputGroup>
					<List w="full">
						<ListItem>Just Do it</ListItem>
					</List>
					<HStack w="full" justifyContent="flex-end">
						<Box>
							<Select placeholder="Select view">
								<option value="all">All</option>
								<option value="active">Active</option>
								<option value="completed">Completed</option>
							</Select>
						</Box>
					</HStack>
				</VStack>
			</Container>
		</ChakraProvider>
	);
}

export default App;
