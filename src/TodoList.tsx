import { List, ListItem } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import todoAtoms from './todo.atoms';

const TodoList = (): ReactElement => {
	const todos = useRecoilValue(todoAtoms.todoListState);
	return (
		<List w="full">
			{todos.map((t) => (
				<ListItem>{t.text}</ListItem>
			))}
		</List>
	);
};

export default TodoList;
