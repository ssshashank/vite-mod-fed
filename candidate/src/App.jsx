import {
	createMemoryRouter,
	createBrowserRouter,
	RouterProvider,
	Outlet,
} from "react-router-dom";
import Landing from "./landing";
import Login from "./login";
import Signup from "./signup";
import useSyncGlobalRouter from "./useSyncGlobalRouter";
import ErrorBoundary from "./errorBoundary";

const RouteHandler = () => {
	useSyncGlobalRouter({ basename: "/candidate" });
	return <Outlet />;
};
const router =
	import.meta.env.VITE_NODE_ENV === "development"
		? createBrowserRouter(
				[
					{
						path: "/",
						element: <RouteHandler />,
						children: [
							{
								index: "/",
								element: <Landing />,
							},
							{
								path: "login",
								element: (
									<ErrorBoundary>
										<Login />
									</ErrorBoundary>
								),
							},
							{ path: "signup", element: <Signup /> },
						],
					},
				],
				{ initialEntries: [location.pathname.replace("/candidate", "") || "/"] }
		  )
		: createMemoryRouter(
				[
					{
						path: "/",
						element: <RouteHandler />,
						children: [
							{
								index: "/",
								element: <Landing />,
							},
							{
								path: "login",
								element: (
									<ErrorBoundary>
										<Login />
									</ErrorBoundary>
								),
							},
							{ path: "signup", element: <Signup /> },
						],
					},
				],
				{ initialEntries: [location.pathname.replace("/candidate", "") || "/"] }
		  );
function App() {
	return <RouterProvider router={router} />;
}

export default App;
