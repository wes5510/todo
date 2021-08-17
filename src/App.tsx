import {
	Button,
	ChakraProvider,
} from '@chakra-ui/react';
import React, { ReactElement, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(): ReactElement {
	const [count, setCount] = useState(0);

	return (
		<ChakraProvider>
			<Button colorScheme="blue">Chakra Button</Button>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hello Vite + React!</p>
					<p>
						<button type="button" onClick={() => setCount((cnt) => cnt + 1)}>
							{`count is: ${count}`}
						</button>
					</p>
					<p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
						{' | '}
						<a
							className="App-link"
							href="https://vitejs.dev/guide/features.html"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vite Docs
						</a>
					</p>
				</header>
			</div>
		</ChakraProvider>
	);
}

export default App;
