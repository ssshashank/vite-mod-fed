import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const useSyncAppRouter = ({ basename }) => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const appNavigated = ({ detail }) => {
			if (detail === location.pathname) return;
			navigate(detail);
		};

		window.addEventListener("app", appNavigated);

		return () => {
			window.removeEventListener("app", appNavigated);
		};
	}, [location, navigate, basename]);

	useEffect(() => {
		if (location.pathname.startsWith(basename)) {
			window.dispatchEvent(
				new CustomEvent("shell", {
					detail: location.pathname.replace(basename, ""),
				})
			);
		}
	}, [location, basename]);
};

export default useSyncAppRouter;
