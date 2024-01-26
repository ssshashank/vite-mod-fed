import "./App.css";

import { Routes, Route } from "react-router-dom";
import CandidateApp from "candidateApp/CandidateApp";
function App() {
	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<h1>Host Application</h1>
						</>
					}
				/>
				<Route path='/candidate' element={<CandidateApp />} />
			</Routes>
		</div>
	);
}

export default App;
