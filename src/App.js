import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { addOne, applyNumber, changeOperator, clearDisplay } from './actions';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const appliedNumber = (num) => {
		dispatch(applyNumber(num));
	};

	const appliedOperator = (operator) => {
		dispatch(changeOperator(operator));
	};

	return (
		<div className='App'>
			<nav className='navbar navbar-dark bg-dark'>
				<a className='navbar-brand' href='!#'>
					<img width='40px' src='./Lambda-Logo-Red.png' alt='Lambda Logo' />{' '}
					Lambda Reducer Challenge
				</a>
			</nav>

			<div className='container row mt-5'>
				<div className='col-md-12 d-flex justify-content-center'>
					<form name='Cal'>
						<TotalDisplay value={state.total} />
						<div className='row details'>
							<span id='operation'>
								<b>Operation:</b> {state.operation}
							</span>
							<span id='memory'>
								<b>Memory:</b> {state.memory}
							</span>
						</div>

						<div className='row'>
							<CalcButton value={'M+'} />
							<CalcButton value={'MR'} />
							<CalcButton value={'MC'} />
						</div>

						<div className='row'>
							{/* <CalcButton value={1} onClick={() => dispatch(addOne())} /> */}
							<CalcButton value={1} onClick={() => appliedNumber(1)} />
							<CalcButton value={2} onClick={() => appliedNumber(2)} />
							<CalcButton value={3} onClick={() => appliedNumber(3)} />
						</div>

						<div className='row'>
							<CalcButton value={4} onClick={() => appliedNumber(4)} />
							<CalcButton value={5} onClick={() => appliedNumber(5)} />
							<CalcButton value={6} onClick={() => appliedNumber(6)} />
						</div>

						<div className='row'>
							<CalcButton value={7} onClick={() => appliedNumber(7)} />
							<CalcButton value={8} onClick={() => appliedNumber(8)} />
							<CalcButton value={9} onClick={() => appliedNumber(9)} />
						</div>

						<div className='row'>
							<CalcButton value={'+'} onClick={() => appliedOperator('+')} />
							<CalcButton value={'*'} onClick={() => appliedOperator('*')} />
							<CalcButton value={'-'} onClick={() => appliedOperator('-')} />
						</div>

						<div className='row ce_button'>
							<CalcButton
								value={'CE'}
								onClick={() => dispatch(clearDisplay())}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
