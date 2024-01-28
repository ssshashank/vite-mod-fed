import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const useSyncGlobalRouter = ({ basename }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const newPath = `${basename}${
		location.pathname === "/" ? "" : location.pathname
	}`;

	useEffect(() => {
		window.dispatchEvent(new CustomEvent("app", { detail: newPath }));
		const shellNavigation = ({ detail }) => {
			if (detail === location.pathname) return;
			navigate(detail);
		};

		window.addEventListener("shell", shellNavigation);

		return () => {
			window.removeEventListener("shell", shellNavigation);
		};
	}, [location, navigate, newPath]);
};

export default useSyncGlobalRouter;
