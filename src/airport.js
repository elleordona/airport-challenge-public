// Airport Class
class Airport {
	//* properties of airport
	groundedPlanes = [];
	#weatherOn = false;

	//* constructor for airport
	constructor(airportID = 'The Airport', airportCapacity = 10) {
		this.airportID = airportID;
		this.airportCapacity = airportCapacity;
	} // set default values for these properties and they can be set when creating the airport

	//* functions of airport
	isAirportFull() {
		return this.airportCapacity === this.groundedPlanes.length; // true or false
	}

	changeAirportCapacity(capacity) {
		if (typeof capacity === 'number' && capacity >= this.groundedPlanes.length) {
			this.airportCapacity = capacity; // changes the capacity of the airport only if the input is a number
			console.log(`The capacity of ${this.airportID} has changed to ${this.airportCapacity}.`); // tell the user command has changed the airport capacity
		} else {
			console.log(`Invalid input, ${this.airportID} capacity has not changed.`); // tell the user that the input is invalid and nothing has changed
		}
	}

	getAirportCapacity() {
		console.log(`${this.airportID} has a capacity of ${this.airportCapacity}.`);
		return this.airportCapacity; // returns the value of airportCapacity
	}

	planeExists(plane) {
		return -1 < this.groundedPlanes.findIndex((airportPlane) => airportPlane.planeID === plane.planeID); // true or false
	}

	getPlanesAtAirport() {
		const planesAtAirport = JSON.stringify(
			this.groundedPlanes.map(function (plane) {
				return plane['planeID'];
			})
		);
		console.log(`${[planesAtAirport]} are at ${this.airportID}`);
		return planesAtAirport;
	}

	isPlane(plane) {
		if (typeof plane != 'object' || plane === null) {
			return false;
		} else {
			this.plane = plane;
			return this.plane.isPlane();
		}
	}

	weatherOn() {
		return this.#weatherOn; // return if weather is effecting the airport
	}

	toggleWeather(boolean) {
		return (this.#weatherOn = boolean); // toggles #weatherOne to the chosen state
	}

	getWeather(weather) {
		this.toggleWeather(true);
		this.weather = weather;
		return (this.weather = this.weather.getWeather());
	}

	landPlane(plane) {
		if (this.#weatherOn === true && this.weather >= 45) {
			// only shows when #weatherOn is true and the rng is 45 or above
			console.log(`Cannot land ${plane.planeID}, the weather is stormy in ${this.airportID}`); // shows user the weather is stormy and nothing has landed at the airport
			return;
		}

		if (this.#weatherOn === true && this.weather < 45) {
			console.log('The weather is sunny!'); // will only print if weatherOn is true and rng is below 45
		}

		if (this.isPlane(plane) === true && this.isAirportFull() === false && this.planeExists(plane) === false) {
			this.groundedPlanes.push(plane); // add plane to groundedPlanes array
			console.log(`${this.airportID} is not full, ${plane.planeID} has landed. There are ${this.groundedPlanes.length} plane(s) at ${this.airportID}.`); // shows user what plane has landed at what airport and how many plane are at that airport
		} else if (this.isAirportFull() === true) {
			console.log(`${this.airportID} is full, ${plane.planeID} has not landed.`); // shows the user that the airport is full and the plane has not landed
		} else if (this.planeExists(plane) === true) {
			console.log(`${plane.planeID} is already at ${this.airportID} and cannot land.`); // shows the user that the plane cant land as it is already at the airport
		} else {
			console.log(`Invalid input, nothing has landed at ${this.airportID}`); // shows the user that the input they put in was not correct and nothing has landed
		}
	}

	takeoffPlane(plane) {
		if (this.#weatherOn === true && this.weather >= 45) {
			// only shows when #weatherOn is true and the rng is 45 or above
			console.log(`Cannot take off ${plane.planeID}, the weather is stormy in ${this.airportID}.`); // shows user the weather is stormy and nothing has landed at the airport
			return;
		}

		if (this.#weatherOn === true && this.weather < 45) {
			// will only print if #weatherOn is true and the rng is below 45
			console.log('The weather is sunny!');
		}

		if (this.isPlane(plane) === true && this.planeExists(plane) === true) {
			this.groundedPlanes.splice(
				this.groundedPlanes.findIndex((airportPlane) => airportPlane.planeID === plane.planeID),
				1
			); // find the name of the plane and takes it out of the groundedPlanes array
			console.log(`${plane.planeID} has taken off from ${this.airportID}.`); // shows user what plane had taken off from the airport
		} else if (this.planeExists(plane) === false) {
			console.log(`${plane.planeID} is not at ${this.airportID} and cannot take off.`); // shows user that the plane they tried to take off was not at the airport therefore nothing has happened
		} else {
			console.log(`Invalid input, nothing has taken off from ${this.airportID}.`); // shows user that the input they gave was invalid therefore nothing was changed
		}
	}
}

module.exports = Airport; // export Airport so it can be used in other codes
