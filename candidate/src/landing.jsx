// import { useEffect } from "react";

import { Link } from "react-router-dom";

const Landing = () => {
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	navigate("/login");
	// }, [navigate]);
	return (
		<div>
			<div>
				<Link to={"/login"}>Login</Link> &nbsp;&nbsp;
				<Link to={"/signup"}>Signup</Link>
			</div>
			<h1>Landing</h1>
		</div>
	);
};

export default Landing;
