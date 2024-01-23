import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Header from "./components/header/header";
// import useCount from "./store/store";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header count={count} />
			<div className='App'>
				<h1>Remote Application</h1>
				{/* <Button /> */}
				<div className='card'>
					<button onClick={() => setCount((s) => s + 1)}>
						Click me : {count}
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
