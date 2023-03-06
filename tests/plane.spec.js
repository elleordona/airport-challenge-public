// tests to develop plane code
console.log('Plane Class Tests');

// initialize variables used in tests
const { assertEquals } = require('../testing-frameworks.js');
const Plane = require('../src/plane.js');

let expected, actual, result, airport, plane; //create empty variables for the tests

//* Test One - when a plane is created it has a default value of true for isPlane
console.log('======= Test One =======');
console.log('set default value of isPlane to true'); // stating the test being carried out

// Arrange
plane = new Plane('Boeing'); // creating a plane for the test
expected = true; // the expected result

// Act
actual = plane.isPlane(); // checking the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test One - ${result ? '\u001b[32m Passed' : '\u001b[31m Failed'}`); // states if the test passed

// Clean Up
expected, actual, (result = undefined); // resetting variables for a next test
airport, (plane = null);
console.log('\u001b[37m ======= Test One Done =======');
console.log(' '); //blank space to split up tests
