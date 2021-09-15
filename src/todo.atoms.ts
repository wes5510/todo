import { atom } from 'recoil';

interface Todo {
	checked: boolean;
	text: string;
}

const todoListState = atom<Todo[]>({
	key: 'todoListState',
	default: [
		{
			checked: false,
			text: 'Just Do it',
		},
		{
			checked: true,
			text: 'Completed / Just Do it',
		},
		{
			checked: true,
			text: '마늘 사기',
		},
	],
});

export default {
	todoListState,
};
