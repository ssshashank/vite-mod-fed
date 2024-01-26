# Microfrontend with React and React-Router-DOM

- #### Installation and Setup process

This template contains 2 React MFEs. Navigate to each MFE and follow these steps.

<b style="color:orange">Host</b> is consuming the microfrontend while <b>Candidate</b> is exposing their components.

For Candidate
( Candidate is exposing the entire app through vite.config.js )

1. navigate to candidate folder
   ```ansi
   cd candidate
   ```
2. install the required packages by using below command.
   ```js
   npm install
   ```
3. run the candidate MFE
   ```
   npm run dev
   ```

4) for building and preview the candidate directory run below command
   ```
   cd candidate
   npm run build && npm run serve
   ```
   Similarly follow for each MFEs. Navigate inside them and install the required packages.

\*Dont need to build host app. just run it using

```
cd host
npm run dev
```

- #### Problem statement

I am trying to use the routes of candidate MFE.

So initially I tried like below way. And the candidate was running fine. This MFE was getting called on url `http://localhost:5173/candidate`

```js
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<>
			<h1>Candidate Page</h1>
		</>
	);
}

export default App;
```

But when I am trying to access the routes of candidates Its not rendering anything and throwing error.

```js
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
```
