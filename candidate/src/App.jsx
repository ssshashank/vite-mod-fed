import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<h1>Candidate LANDING</h1>} />
				<Route path='/login' element={<h1>Candidate LOGIN</h1>} />
				<Route path='/signup' element={<h1>Candidate SIGNUP</h1>} />
			</Routes>
			{/* <h1>Candidate Page</h1> */}
		</>
	);
}

export default App;
