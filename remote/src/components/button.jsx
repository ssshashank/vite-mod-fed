import "./button.css";
import useCount from "../store/store";
const Button = () => {
	const [state, setState] = useCount(0);
	return (
		<div>
			<button className='shared-btn' onClick={() => setState((s) => s + 1)}>
				Remote Side Click me : {state}
			</button>
			* This is from remote side
		</div>
	);
};

export default Button;
