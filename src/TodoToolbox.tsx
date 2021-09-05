import { Select, Box } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

const TodoToolbox = (): ReactElement => (
	<Box>
		<Select placeholder="Select view">
			<option value="all">All</option>
			<option value="active">Active</option>
			<option value="completed">Completed</option>
		</Select>
	</Box>
);

export default TodoToolbox;
