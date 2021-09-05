import { ChakraProvider, Container, HStack, VStack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoToolbox from './TodoToolbox';

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
					<TodoInput />
					<TodoList />
					<HStack w="full" justifyContent="flex-end">
						<TodoToolbox />
					</HStack>
				</VStack>
			</Container>
		</ChakraProvider>
	);
}

export default App;
