import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { ReactElement, useCallback, useState } from 'react';
import todoHooks from './todo.hooks';

const TodoInput = (): ReactElement => {
	const [text, setText] = useState('');
	const createTodo = todoHooks.useCreateTodo();

	const changeHandler = useCallback((e) => {
		const { value } = e.target;
		setText(value);
	}, []);

	const clickHandler = useCallback(() => {
		createTodo(text);
		setText('');
	}, [createTodo, text]);

	const keyDownHandler = useCallback((e) => {
		if (e.code === 'Enter') {
			createTodo(text);
			setText('');
			e.preventDefault();
		}
	}, [createTodo, text]);

	return (
		<InputGroup size="md">
			<Input
				pr="4.5rem"
				placeholder="Enter todo"
				onChange={changeHandler}
				onKeyDown={keyDownHandler}
				value={text}
			/>
			<InputRightElement width="4.5rem">
				<Button h="1.75rem" size="sm" onClick={clickHandler}>
					Add
				</Button>
			</InputRightElement>
		</InputGroup>
	);
};

export default TodoInput;
