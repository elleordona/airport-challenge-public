// Code to run different commands within the airport class

const Airport = require('./airport.js');
const Plane = require('./plane.js');
const Weather = require('./weather.js');

//* create different instances of airport
const airport = new Airport(); // default airport
const LHR = new Airport('LHR'); // London Heathrow
const AMS = new Airport('AMS'); // Amsterdam
const GLA = new Airport('GLA', 3); // Glasgow
const SAN = new Airport('SAN'); // San Diego

//* create different instances of plane
const plane = new Plane(); // default plane
const boeing = new Plane('Boeing');
const concord = new Plane('Concord');
const airbus = new Plane('Airbus');
const private = new Plane('Private');
const douglas = 'douglas'; // not an instance of Plane :O

//* change and show airport capacity
console.log('=== Trying to change and show airport capacity ===');
AMS.changeAirportCapacity(1);
LHR.changeAirportCapacity(-10); // error [negative number, wont change capacity]
airport.getAirportCapacity(); // show last command did not change airport capacity
GLA.getAirportCapacity(); // show line 10 changed the capacity of the airport
SAN.getAirportCapacity(); // show there is a default capacity set
console.log(' '); // blank space to separate sections

//* land planes at different airports
console.log('=== Showing function of landPlane ===');
LHR.landPlane(boeing);
LHR.landPlane(airbus);
LHR.landPlane(boeing); // error [already at airport]
LHR.landPlane(plane);
// try to change capacity to value lower than current planes at LHR
LHR.changeAirportCapacity(1); // error [input is lower than current planes at airport, wont change capacity]
GLA.landPlane(concord);
SAN.landPlane(private);
SAN.landPlane(plane);
AMS.landPlane(douglas); // error [invalid input]
AMS.landPlane(boeing);
AMS.landPlane(concord); // error [airport full]
console.log(AMS.isAirportFull()); // show function works (more for use within other functions rather than showing the user)
airport.landPlane(concord);
console.log(' '); // blank space to separate sections

//* takeoff planes from different airports
console.log('=== Showing the function of takeoffPlane ===');
GLA.takeoffPlane(concord);
GLA.takeoffPlane(boeing); // error [plane is not in GLA]
LHR.takeoffPlane(boeing);
LHR.takeoffPlane(douglas); // error [invalid input]
console.log(' '); // blank space to separate sections

//* find the planes at an airport
// console.log(LHR.groundedPlanes);
// console.log(SAN.groundedPlanes);
//? could create function so it displays nicer
console.log('=== Showing function of getPlanesAtAirport ===');
LHR.getPlanesAtAirport();
SAN.getPlanesAtAirport();
console.log(' '); // blank space to separate sections

//* Weather instances
let weather = new Weather();
const BCN = new Airport('BCN'); // Barcelona
const LAX = new Airport('LAX'); // LA
const MNL = new Airport('MNL'); // Manila
const FCO = new Airport('FCO'); // Rome
// land plane to test weather when taking off
console.log('=== Landing plane to test takeoffPlane with weather ===');
BCN.landPlane(boeing);
LAX.landPlane(boeing);
MNL.landPlane(boeing);
FCO.landPlane(boeing);
console.log(' '); // blank space to separate sections
// get weather at each airport
BCN.getWeather(weather);
LAX.getWeather(weather);
MNL.getWeather(weather);
FCO.getWeather(weather);
console.log(' '); // blank space to separate sections
// takeoff with weather
console.log('=== Showing function of takeoffPlane with weather ===');
BCN.takeoffPlane(boeing);
LAX.takeoffPlane(boeing);
MNL.takeoffPlane(boeing);
FCO.takeoffPlane(boeing); //! random outcomes each time
console.log(' '); // blank space to separate sections
// new weather instances
BCN.getWeather(weather);
LAX.getWeather(weather);
MNL.getWeather(weather);
FCO.getWeather(weather);
console.log(' '); // blank space to separate sections
// landing with weather
console.log('=== Showing function of landPlane with weather ===');
BCN.landPlane(private);
LAX.landPlane(private);
MNL.landPlane(private);
FCO.landPlane(private); //! random outcomes each time
console.log(' '); // blank space to separate sections
// toggle weather
BCN.toggleWeather(false);
LAX.toggleWeather(false);
MNL.toggleWeather(false);
FCO.toggleWeather(false);
console.log(' '); // blank space to separate sections
// show code still works without instance of weather
console.log('=== Showing code still works without weather ===');
BCN.landPlane(concord);
LAX.landPlane(concord);
MNL.landPlane(concord);
FCO.landPlane(concord);
console.log(' '); // blank space to separate sections