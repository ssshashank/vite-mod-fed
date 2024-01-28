import "./App.css";

import { Routes, Route } from "react-router-dom";
import CandidateApp from "candidateApp/CandidateApp";
import useSyncAppRouter from "./useSyncAppRouter";
import { Suspense } from "react";

const AppRouterHandler = () => {
	useSyncAppRouter({ basename: "/candidate" });
	return (
		<Suspense>
			<CandidateApp />
		</Suspense>
	);
};
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
				<Route path='/candidate/*' element={<AppRouterHandler />} />
			</Routes>
		</div>
	);
}

export default App;
