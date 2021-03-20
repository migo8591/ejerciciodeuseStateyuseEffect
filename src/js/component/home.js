import React, { useState, useEffect } from "react";

import rigoImage from "../../img/rigo-baby.jpg";

export function Home() {
	const [count, setCount] = useState(0);
	const [inputValue, setInputValue] = useState("Miguel");

	////////////////////////////////////////
	useEffect(() => {
		console.log("count: ", count);
		console.log("input value: ", inputValue);
	}, []);

	/////////////////////////////////////
	const handleClick = () => {
		setCount(count + 1);
	};
	const handleChange = e => {
		setInputValue(e.target.value);
	};
	return (
		<div className="text-center mt-5">
			<h1>You clicked {count} times!</h1>
			<h1>Hello {inputValue} from CR!</h1>

			<p>
				<img src={rigoImage} />
			</p>
			<button className="btn btn-primary" onClick={handleClick}>
				Click here
			</button>

			<input onChange={event => handleChange(event)} />
		</div>
	);
}
