const Header = ({ count }) => {
	return (
		<div
			style={{
				width: "100%",
				height: "30px",
				background: "black",
				display: "flex",
				justifyContent: "space-around",
			}}>
			<div style={{ color: "white" }}>Header</div>
			<div style={{ color: "white" }}>{count}</div>
		</div>
	);
};

export default Header;
