import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

const TodoInput = (): ReactElement => (
	<InputGroup size="md">
		<Input pr="4.5rem" placeholder="Enter todo" />
		<InputRightElement width="4.5rem">
			<Button h="1.75rem" size="sm">
				Add
			</Button>
		</InputRightElement>
	</InputGroup>
);

export default TodoInput;
