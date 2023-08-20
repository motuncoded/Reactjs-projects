import React,{ useState, FC } from 'react';
import './App.css';

interface Props {
	initialCount: number;
}

const App: FC<Props> = ({ initialCount = 0 }) => {
	const [count, setCount] = useState(initialCount);

	const increment = () => {
		setCount(count + 1);
  }; 
  	const decrement = () => {
		setCount(count - 1);
    };
  const reset = () => {
		setCount(initialCount);
	};

	return (
		<div>
			<div className='number-box'>
				<h1 className='number'>{count}</h1>
			</div>
			<div className='btn'>
				<button className='increase' onClick={() => increment()}>
					Increment
				</button>
				<button className='decrease' onClick={() => decrement()}>
					Decrement
				</button>
				<button className='reset' onClick={() => reset()}>
					Reset
				</button>
			</div>
		</div>
	);
};
export default App;
