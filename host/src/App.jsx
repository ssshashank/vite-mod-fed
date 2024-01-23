import "./App.css";
import Button from "remoteApp/Button";
import Header from "remoteApp/Header";
import useStore from "remoteApp/store";
import { Routes, Route } from "react-router-dom";
import CandidateApp from "candidateApp/CandidateApp";
function App() {
	const [count, setCount] = useStore();

	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Header count={count} />
							<h1>Host Application</h1>
							<Button />
						</>
					}
				/>
				<Route path='/candidate' element={<CandidateApp />} />
			</Routes>
		</div>
	);
}

export default App;
