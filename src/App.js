import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

/* const API_KEY = 'YOUR_API_KEY'; */

class App extends React.Component {
	// New state method introduced in React 16
	// Initial State
	state = {
		longitude: undefined,
		lattitude: undefined,
		temperature: undefined,
		humidity: undefined,
		description: undefined,
		wind: undefined,
		error: undefined
	}

	getWeather = async (e) => {
		e.preventDefault(); // It is use to remove the whole page load when we press the button
		const longitude = e.target.elements.longitude.value;
		const lattitude = e.target.elements.lattitude.value;
		const api_call = await fetch(`https://fcc-weather-api.glitch.me/api/current?lon=${longitude}&lat=${lattitude}`, {method: 'get'});
		const data = await api_call.json();  // Converting the data into readable with JSON fetch
		console.log(data)
		if (longitude && lattitude) {
			this.setState({
				longitude: data.coord.lon,
				lattitude: data.coord.lat,
				temperature: data.main.temp,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				wind: data.wind.speed,
				error: ""
		     });
		} else {
			this.setState({
				longitude: undefined,
				lattitude: undefined,
				temperature: undefined,
				humidity: undefined,
				description: undefined,
				wind: undefined,
				error: "Please Enter the values"
		     });
		}
		
	}

	render() {
		return(
	        <div>
				    <div className="wrapper">
				        <div className="main">
				             <div className="container shadow ">
						          <div className="row">
						          	    <div className="col-sm-5 title-container">
									        <Titles />
									    </div>
									    <div className="col-sm-7 form-container">
											<Form getWeather={this.getWeather} />  
											<Weather 
											longitude={this.state.longitude}
											lattitude={this.state.lattitude}
											temperature={this.state.temperature}
											humidity={this.state.humidity}
											description={this.state.description}
											wind={this.state.wind}
											error={this.state.error}
											/>
										</div>
								   </div>
							 </div>
						</div>
					</div>
                                   
		   </div>
		);
	}
};



export default App;


									