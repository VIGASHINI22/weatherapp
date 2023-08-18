import React from 'react';

const Form = props => (
	        <form onSubmit={props.getWeather}>
				<input type="text" name="longitude" placeholder="Longitude...(Ex-159)"/>
				<input type="text" name="lattitude" placeholder="Lattitude...(Ex-35)"/>
				<button>Get Weather</button>
			</form>
	);


export default Form;