import { useRecoilCallback } from 'recoil';
import todoAtoms from './todo.atoms';

const useCreateTodo = (): ((text: string) => void) =>
	useRecoilCallback(({ set }) => (text) => {
		set(todoAtoms.todoListState, (prev) => {
			const newTodoList = [...prev];
			newTodoList.push({
				text,
				checked: false,
			});

			return newTodoList;
		});
	});

export default {
	useCreateTodo,
};
