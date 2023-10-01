import React, { useState } from "react";
import "./App.css";

const HooksContainer1 = () => {
	const [stateValue, setValue] = useState(0);

	const incrementValue = () => {
		setValue(stateValue + 1);
	};

	const decrementValue = () => {
		setValue(stateValue - 1);
	};
	return (
		<div>
			{" "}
			React Hooks
			<br />
			<button onClick={() => incrementValue()}> Inc Local State</button>
			<button onClick={() => decrementValue()}> Inc Local State</button>
			<br />
			<div>
				<p>Local State: {stateValue}</p>
			</div>
		</div>
	);
};

export default HooksContainer1;
