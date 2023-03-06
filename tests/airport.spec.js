// tests to develop airport code
console.log('Airport Class Tests');

// initialize codes that need to be pulled in
const { assertEquals } = require('../testing-frameworks.js');
const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');

// initialize variables used in tests
let expected, actual, result, airport, plane, input; //create empty variables for the tests

//* Test One - when landPlane is called, Plane should be added to the Airports groundedPlanes increasing the length to 1
console.log('======= Test One =======');
console.log('landPlane puts the Plane into the Airports groundedPlanes'); // stating the test being carried out

// Arrange
airport = new Airport(); // creating a new airport for the test
plane = new Plane('Boeing'); // creating a plane for the test
expected = 1; // the expected result

// Act
airport.landPlane(plane); // lands plane to airport
actual = airport.groundedPlanes.length; // checking the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test One - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log('\u001b[37m ======= Test One Done =======');
console.log(' '); //blank space to split up tests

//* Test Two - landPlane should only add Planes instances to groundedPlanes
console.log('======= Test Two =======');
console.log('landPlane only adds Plane instances to groundedPlanes'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for test
plane = 'Boeing'; // input is not a plane
expected = 0; // result should be zero as 'plane' should not be added to groundedPlanes

// Act
airport.landPlane(plane); // lands plane to airport
actual = airport.groundedPlanes.length; // checking the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Two - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log('\u001b[37m ======= Test Two Done =======');
console.log(' '); //blank space to split up tests

//* Test Three - falsy values should not be added to groundedPlanes
console.log('======= Test Three =======');
console.log('falsy value items should not be added'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for test
plane = null; // input is null
expected = 0; // result should be zero as null should not be added to groundedPlanes

// Act
airport.landPlane(plane); // lands plane to airport
actual = airport.groundedPlanes.length; // checking the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Three - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log('\u001b[37m ======= Test Three Done =======');
console.log(' '); //blank space to split up tests

//* Test Four - when an Airport is created a default value of 10 is given for airportCapacity
console.log('======= Test Four =======');
console.log('when an airport is created there should be a default capacity of 10'); // stating the test being carried out

// Arrange
airport = new Airport(); // create a new airport for the test
expected = 10; // the capacity of the airport should be set as 10 when no input is initialized

// Act
actual = airport.airportCapacity; // look for the value of the airportCapacity

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Four - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log('\u001b[37m ======= Test Four Done =======');
console.log(' '); //blank space to split up tests

//* Test Five - changeAirportCapacity will change the value of airportCapacity
console.log('======= Test Five =======');
console.log('changeAirportCapacity will change the value of airportCapacity'); // stating the test being carried out

// Arrange
airport = new Airport(); // create a new airport for the test
input = 5; // the number we are changing the capacity to
expected = 5; // we will try to change the capacity of the airport to 5

// Act
airport.changeAirportCapacity(input); // call function of change the airport capacity
actual = airport.airportCapacity; // look for the value of the airportCapacity

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Five - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, plane, (input = null);
console.log('\u001b[37m ======= Test Five Done =======');
console.log(' '); //blank space to split up tests

//* Test Six - airportCapacity can only be a number
console.log('======= Test Six =======');
console.log('airportCapacity can only be a positive number'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for test
input = -5; // try to input a value that shouldn't work
expected = 10; // the airportCapacity should not change

// Act
airport.changeAirportCapacity(input); // call function to change airportCapacity
actual = airport.airportCapacity; // look for the value of airportCapacity

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Six - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, plane, (input = null);
console.log('\u001b[37m ======= Test Six Done =======');
console.log(' '); //blank space to split up tests

//* Test Seven - create function that will output the capacity of the airport to the user
console.log('======= Test Seven =======');
console.log('getAirportCapacity() shows the capacity of the airport'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
expected = 10; // expected value of test

// Act
actual = airport.getAirportCapacity(); // call getAirportCapacity function

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Seven - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log('\u001b[37m ======= Test Seven Done =======');
console.log(' '); //blank space to split up tests

//* Test Eight - create a function that compares the values of airportCapacity and groundedPlanes.length
console.log('======= Test Eight =======');
console.log('isAirportFull() checks if groundedPlanes.length is equal to airportCapacity'); // stating the test being carried out
console.log(' '); //blank space to split up tests

// Airport is not Full
// Arrange
console.log('=== Test Eight.One ===');
console.log('Airport is not full');
airport = new Airport(); // create new airport for the test
expected = false; // airportCapacity should be less than groundedPlanes.length

// Act
actual = airport.isAirportFull(); // call isAirportFull function

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Eight.One - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log(' '); //blank space to split up tests

// Airport is Full
// Arrange
console.log('\u001b[37m === Test Eight.Two ===');
console.log('Airport is Full');
airport = new Airport(); // create new airport for the test
expected = true; // airportCapacity should be equal to groundedPlanes.length

// Act
airport.changeAirportCapacity(0); // change capacity to 1
actual = airport.isAirportFull(); // call isAirportFull function

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Eight.Two - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log('\u001b[37m ======= Test Eight Done =======');
console.log(' '); //blank space to split up tests

//* Test Nine - if the airport is not full then the plane should land
console.log('======= Test Nine =======');
console.log('if the Airport is not full, the Plane should land'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new plane for the test
expected = 1; // expected value of test

// Act
airport.landPlane(plane); // if the airport is not full the plane should land nad give a string confirmation
actual = airport.groundedPlanes.length; // find the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Nine - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log('\u001b[37m ======= Test Nine Done =======');
console.log(' '); //blank space to split up tests

//* Test Ten - if the airport is full the plane shouldn't land
console.log('======= Test Ten =======');
console.log('if the Airport is full, the Plane should not land'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new plane for the test
airport.changeAirportCapacity(0); // change capacity of the airport
expected = 0; // expected value of test

// Act
airport.landPlane(plane); // try to land a plane
actual = airport.groundedPlanes.length; // find the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Ten - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log('\u001b[37m ======= Test Ten Done =======');
console.log(' '); //blank space to split up tests

//* Test Eleven - takeoffPlane should take plane off of groundedPlanes
console.log('======= Test Eleven =======');
console.log('groundedPlane length decreases by 1 when takeoffPlane() is called'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new plane for the test
expected = 0;

// Act
airport.landPlane(plane); // land plane at airport
airport.takeoffPlane(plane); // takeoff plane from airport
actual = airport.groundedPlanes.length; // find the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Eleven - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log('\u001b[37m ======= Test Eleven Done =======');
console.log(' '); //blank space to split up tests

//* Test Twelve - takeoff specific plane from groundedPlanes
console.log('======= Test Twelve =======');
console.log('takeoffPlane() will take off specific plane from groundedPlanes'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new planes for the test
expected = JSON.stringify(['Concord', 'Airbus']); // expected array

// Act
airport.landPlane(new Plane('Concord'));
airport.landPlane(plane);
airport.landPlane(new Plane('Airbus')); // land multiple planes at airport
airport.takeoffPlane(plane); // takeoff plane from airport
actual = JSON.stringify(
	airport.groundedPlanes.map(function (plane) {
		return plane['planeID'];
	})
); // find the array as a list of plane names

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Twelve - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log('\u001b[37m ======= Test Twelve Done =======');
console.log(' '); //blank space to split up tests

//* Test Thirteen - create a function that will check if the Plane exists in groundedPlanes
console.log('======= Test Thirteen =======');
console.log('planeExists() will check if the Plane exists in groundedPlanes'); // stating the test being carried out

// Plane Exists in groundedPlanes
// Arrange
console.log(' '); //blank space to split up tests
console.log('=== Test Thirteen.One ===');
console.log('Plane Exists (aka true)');
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing');
expected = true; // should show that the plane exists in array

// Act
airport.landPlane(plane); // land plane
actual = airport.planeExists(plane); // call planeExists function

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Thirteen.One - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);

// Plane does not exist in groundedPlanes
// Arrange
console.log(' '); //blank space to split up tests
console.log('\u001b[37m === Test Thirteen.Two ===');
console.log('Plane does not exist (aka false)');
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new plane for the test
expected = false; // should show that the plane does not exist in array

// Act
actual = airport.planeExists(plane); // call planeExists function

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Thirteen.Two - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log('\u001b[37m ======= Test Thirteen Done =======');
console.log(' '); //blank space to split up tests

//* Test Fourteen - an error message will appear when planeExists is false when takeoffPlane is called
console.log('======= Test Fourteen =======');
console.log('when takeoffPlane() is called, planeExists() runs before proceeding'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new plane for the test
expected = false;

// Act
airport.takeoffPlane(plane); // takeoff plane from airport
actual = airport.planeExists(plane);

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Fourteen - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log('\u001b[37m ======= Test Fourteen Done =======');
console.log(' '); //blank space to split up tests

//* Test Fifteen - an error message will appear when planeExists is true when landPlane
console.log('======= Test Fifteen =======');
console.log('when landPlane() is called, planeExists() runs before proceeding'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new plane for the test;
expected = true;

// Act
airport.landPlane(plane);
airport.landPlane(plane); // try to land the same plane twice
actual = airport.planeExists(plane);

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Fifteen - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined);
airport, (plane = null);
console.log('\u001b[37m ======= Test Fifteen Done =======');
console.log(' '); // blank space to split up tests

//* Test Sixteen - changeAirportCapacity cannot change airportCapacity to a value lower than the amount of planes already at the airport
console.log('======= Test Sixteen =======');
console.log('changeAirportCapacity() cannot change airportCapacity to a value lower than groundedPlanes.length'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new plane for the test;
expected = 10; // expect airportCapacity to have not changed from the default

// Act
airport.landPlane(plane);
airport.landPlane(new Plane('Concord')); // land two planes at airport
airport.changeAirportCapacity(1); // try to change capacity to a lower value
actual = airport.getAirportCapacity(); // check the value of airportCapacity

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Sixteen - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined);
airport, (plane = null);
console.log('\u001b[37m ======= Test Sixteen Done =======');
console.log(' '); // blank space to split up tests

//* Test Seventeen - getPlanesAtAirport() gives an array of the planes at the airport
console.log('======= Test Seventeen =======');
console.log('getPlanesAtAirport() shows an array of the Plane.planeID in groundedPlanes'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new plane for the test;
expected = JSON.stringify(['Boeing', 'Concord']); // expect a string of the planeID at the airport

// Act
airport.landPlane(plane);
airport.landPlane(new Plane('Concord')); // land two planes at airport
actual = airport.getPlanesAtAirport(); // check the output of getPlanesAtAirport()

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Seventeen - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined);
airport, (plane = null);
console.log('\u001b[37m ======= Test Seventeen Done =======');
console.log(' '); // blank space to split up tests

//* Test Eighteen - getPlanesAtAirport() gives an array of the planes at the airport
console.log('======= Test Eighteen =======');
console.log('Airport class does not rely on Plane class'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = { isPlane: () => true }; // dummy plane
expected = true; // expect a string of the planeID at the airport

// Act
actual = airport.isPlane(plane);

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Eighteen - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined);
airport, (plane = null);
console.log('\u001b[37m =====Eighteen Done =======');
console.log(' '); // blank space to split up tests

//! EXTENDED CRITERIA TESTS
console.log(' '); // blank space to split up tests
console.log('These are tests for the Extended Criteria');
console.log(' '); // blank space to split up tests

//* Test C - when Airport instance is created, weatherOn is default false
console.log('======= Test C =======');
console.log('when Airport instance is created, weatherOn is false by default'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new instance of Weather
expected = false;

// Act
actual = airport.weatherOn();

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test C - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, result, (actual = undefined);
airport, plane, (input = null);
console.log('\u001b[37m ======= Test C Done =======');
console.log(' '); //blank space to split up tests

//* Test D - toggleWeather will toggle the state of weatherOn
console.log('======= Test D =======');
console.log('toggleWeather toggle the state of weatherOn'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new instance of airport
expected = true; // state of weatherOn will switch to true

// Act
airport.toggleWeather(true); // call function
actual = airport.weatherOn(); // check the state of weatherOn

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test D - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, result, (actual = undefined);
airport, plane, (input = null);
console.log('\u001b[37m ======= Test D Done =======');
console.log(' '); //blank space to split up tests

//* Test E - getWeather calls the function getWeather within an object
console.log('======= Test E =======');
console.log('getWeather calls the function getWeather within an object'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new instance of airport
let weather = { getWeather: () => true }; // dummy weather
expected = true; // output of getWeather in object is true

// Act
actual = airport.getWeather(weather); // get the value of getWeather within object

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test E - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, result, (actual = undefined);
airport, plane, input, (weather = null);
console.log('\u001b[37m ======= Test E Done =======');
console.log(' '); //blank space to split up tests

//* Test F - when getWeather is below 45, takeoffPlane is executed
console.log('======= Test F =======');
console.log('when getWeather is below 45, takeoffPlane is executed'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new instance of airport
plane = new Plane('Boeing'); // create new instance of plane
weather = { getWeather: () => 10 }; // dummy weather simulate rng got 10
expected = 0; // expect plane to take off as weather is considered sunny

// Act
airport.getWeather(weather); // get the value of getWeather
airport.landPlane(plane); // land plane at airport so it can take off
airport.takeoffPlane(plane); // attempt to take off plane
actual = airport.groundedPlanes.length; // get the value of groundedPlanes array length

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test F - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, result, (actual = undefined);
airport, plane, input, (weather = null);
console.log('\u001b[37m ======= Test F Done =======');
console.log(' '); //blank space to split up tests

//* Test G - when getWeather is below 45, takeoffPlane is executed
console.log('======= Test G =======');
console.log('when getWeather is above 45, takeoffPlane is not executed'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new instance of airport
plane = new Plane('Boeing'); // create new instance of plane
weather = { getWeather: () => 47 }; // dummy weather simulate rng got 10
expected = 1; // expect plane not to take off as weather is considered stormy

// Act
airport.landPlane(plane); // land plane at airport so it can take off
airport.getWeather(weather); // get the value of getWeather
airport.takeoffPlane(plane); // attempt to take off plane
actual = airport.groundedPlanes.length; // get the value of groundedPlanes array length

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test G - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, result, (actual = undefined);
airport, plane, input, (weather = null);
console.log('\u001b[37m ======= Test G Done =======');
console.log(' '); //blank space to split up tests

//* Test H - when getWeather is below 45, takeoffPlane is executed
console.log('======= Test H =======');
console.log('when getWeather is below 45, landPlane is executed'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new instance of airport
plane = new Plane('Boeing'); // create new instance of plane
weather = { getWeather: () => 10 }; // dummy weather simulate rng got 10
expected = 1; // expect plane to land as weather is considered sunny

// Act
airport.getWeather(weather); // get the value of getWeather
airport.landPlane(plane); // land plane at airport
actual = airport.groundedPlanes.length; // get the value of groundedPlanes array length

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test H - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, result, (actual = undefined);
airport, plane, input, (weather = null);
console.log('\u001b[37m ======= Test H Done =======');
console.log(' '); //blank space to split up tests

//* Test I - when getWeather is below 45, takeoffPlane is executed
console.log('======= Test I =======');
console.log('when getWeather is above 45, landPlane is not executed'); // stating the test being carried out

// Arrange
airport = new Airport(); // create new instance of airport
plane = new Plane('Boeing'); // create new instance of plane
weather = { getWeather: () => 47 }; // dummy weather simulate rng got 10
expected = 0; // expect plane not to land as weather is considered stormy

// Act
airport.getWeather(weather); // get the value of getWeather
airport.landPlane(plane); // land plane at airport
actual = airport.groundedPlanes.length; // get the value of groundedPlanes array length

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test I - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, result, (actual = undefined);
airport, plane, input, (weather = null);
console.log('\u001b[37m ======= Test I Done =======');
console.log(' '); //blank space to split up tests
