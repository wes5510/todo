import { List, ListItem } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

const todos = [
	{
		checked: false,
		text: 'Just Do it',
	},
	{
		checked: true,
		text: 'Completed / Just Do it',
	},
];

const TodoList = (): ReactElement => (
	<List w="full">
		{todos.map((t) => (
			<ListItem>{t.text}</ListItem>
		))}
	</List>
);

export default TodoList;
