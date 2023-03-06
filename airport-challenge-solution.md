# Airport Challenge Domain Models [Elle Ordoña]

## Airport Tests

### Part 1 - User Stories

```sh
As an air traffic controller
So i can get passengers to a destination
I want to instruct the airport to land a plane
```

### Part 1 - Domain Model

| Objects | Properties                      | Messages          | Outputs |
| ------- | ------------------------------- | ----------------- | ------- |
| Airport | groundedPlanes @Array[@Plane]   | landPlane(@Plane) | @String |
| Plane   | planeID @String                 | getPlaneId()      | @String |

### Part 1 - Tests

Initial Thoughts:

1. Need an airport
2. Need a plane
3. Need to be able to land the plane (add the plane id to the groundedPlanes array)

**Test 1** - `Plane` should be added to the `Airport` `groundedPlanes` when `landPlane` is called

**Test 2** - `landPlane` should only add `Plane` instances to the `groundedPlanes`

**Test 3** - Edge Case - falsy values should not be added to `groundedPlanes`

---

### Part 2 - User Stories

```sh
As the systems designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

### Part 2 - Domain Model

| Objects | Properties                | Messages                         | Outputs |
| ------- | ------------------------- | -------------------------------- | ------- |
| Airport | airportCapacity @Integer  | changeAirportCapacity(@Integer)  | @String |

### Part 2 - Tests

Initial Thoughts:

1. Need to give any airport created a default value for capacity
2. Need a function to be able to change the capacity

**Test 4** - when an `Airport` is created a default value of 10 is given for `airportCapacity`

**Test 5** - `changeAirportCapacity` will change the `airportCapacity` to the value inputted

**Test 6** - Edge Case - `airportCapacity` can only be a positive number

---

### Part 3 - User Stories

```sh
As an air traffic controller
To ensure safety
i want to prevent landing when the airport is full
```

### Part 3 - Domain Model

| Objects | Properties                      | Messages                           | Outputs  |
| ------- | ------------------------------- | ---------------------------------- | -------- |
| Airport | groundedPlanes @Array[@Plane]   | isAirportFull()                    | @Boolean |
|         | airportCapacity @Integer        | getAirportCapacity()               | @Integer |
|         |                                 | landPlane(@Plane)                  | @String  |
|         |                                 | changeAirportCapacity(@Integer)    | @String  |
| Planes  | planeID @String                 | getID()                            | @String  |

### Part 3 - Tests

Initial Thoughts:

1. Need to check the capacity of the airport before plane lands
2. Allow plane to land if airport is not full
3. Do not allow plane to land if airport is full

**Test 7** - `getAirportCapacity()` returns the capacity of the airport

**Test 8** - `isAirportFull()` checks if `groundedPlanes.length` is equal to `airportCapacity` (test both full and not full)

**Test 9** - if `isAirportFull()` is false, add `Plane` to `groundedPlanes` and give a string confirmation

**Test 10** - if `isAirportFull()` is true, do not add `Plane` to `groundedPlanes` and give a string confirmation

---

### Part 4 - User Stories

```sh
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

### Part 4 - Domain Model

| Objects | Properties                      | Messages             | Outputs |
| ------- | ------------------------------- | -------------------- | ------- |
| Airport | groundedPlanes @Array[@Plane]   | takeoffPlane(@Plane) | @String |
| Plane   | planeID @String                 | getPlaneID()         | @String |

### Part 4 - Tests

Initial Thoughts:

1. `Plane` should be take off `groundedPlanes` when `takeoffPlane` is called
2. Need to give `Plane` a `planeID` so that it can be used to take it off `groundedPlanes`

**Test 11** - `takeoffPlane` will get rid of `Plane` from `groundedPlanes`

**Test 12** - `takeoffPlane` will find the `planeID` and use that to take of the correct plane from `groundedPlanes` and give string confirmation

(The next user story covers falsy values)

---

### Part 5 - User Stories

```sh
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane thats already landed

^^^^ 2 user stories - going to break them down

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let plane take-off which are not at the airport

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to land a plane that has already landed
```

### Part 5 - Domain Model

| Objects | Properties                      | Messages              | Outputs  |
| ------- | ------------------------------- | --------------------- | -------- |
| Airport | groundedPlanes @Array[@Plane]   | takeoffPlane(@Plane)  | @String  |
|         |                                 | landPlane(@Plane)     | @String  |
|         |                                 | planeExists(@Plane)   | @Boolean |
| Plane   | planeID @String                 | getPlaneID()          | @String  |

### Part 5 - Tests

Initial Thoughts:

1. Need to check through `groundedPlanes` when `takeoffPlane` and `landPlane` are called
2. Create a message when they try to `takeoffPlane` that is not in `groundedPlanes`
3. Create a message when they try to `landPlane` that is already in `groundedPlanes`

**Test 13** - `planeExists` checks if `Plane` is already in `groundedPlanes` (test both true and false)

**Test 14** - an error message will appear when `planeExists` is false when `takeoffPlane` is called

**Test 15** - an error message will appear when `planeExists` is true when `landPlane` is called

---

### Extra Tests

stuff i thought of and added after the construction of the original program

**Test 16** - `changeAirportCapacity` cannot change `airportCapacity` to a value lower than the length of `groundedPlanes`

**Test 17** - `getPlanesAtAirport` will give a nice array of the `Plane` that are in `groundedPlanes`

**Test 18** - decouple `Airport` and `Plane` so they do not appear in each others code

---

## Plane Tests

**Test 1** - when an instance of `Plane` is created `isPlane` has default value of true

---

## Extended Criteria

### Extended Criteria: Part 1 - User Story

```sh
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```

### Extended Criteria: Part 1 - Domain Model

| Objects | Properties                      | Messages              | Outputs  |
| ------- | ------------------------------- | --------------------- | -------- |
| Airport | groundedPlanes @Array[@Plane]   | takeoffPlane(@Plane)  | @String  |
|         |                                 | getWeather()          | @Integer |
| Plane   | planeID @String                 | getPlaneID()          | @String  |
| Weather | currentWeather @Integer         | getWeather()          | @Integer |

### Extended Criteria: Part 1 - Tests

Initial Thoughts:

1. `getWeather` needs to generate a random whole number between 1 and 50 for the weather
2. stormy weather needs to be rare, so numbers 45-50 will be considered stormy weather (aka has a 10% chance of occurring)
3. when `takeoffPlane` is called it needs to look at the number generated by `getWeather`

**Test A** - `getWeather` generates a number between 1 and 50 in `Weather` class

[**Test B** - when `Weather` instance is created `weatherOn` is default true] - deleted as it is not ever used

**Test C** - when `Airport` instance is created `weatherOn` is default false

**Test D** - in `Airport` `toggleWeather` will switch the state of `weatherOn` to the opposite state

**Test E** - `getWeather` in `Airport` class calls the function `getWeather` within an object

**Test F** - when `getWeather` is below 45, `takeoffPlane` is executed

**Test G** - when `getWeather` is 45 or above, when `takeoffPlane` is called an error occurs and the plane cannot takeoff

---

### Extended Criteria: Part 2 - User Story

```sh
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

### Extended Criteria: Part 2 - Domain Model

| Objects | Properties                      | Messages              | Outputs  |
| ------- | ------------------------------- | --------------------- | -------- |
| Airport | groundedPlanes @Array[@Plane]   | landPlane(@Plane)     | @String  |
|         |                                 | getWeather()          | @Integer |
| Plane   | planeID @String                 | getPlaneID()          | @String  |
| Weather | currentWeather @Integer         | getWeather()          | @Integer |

### Extended Criteria: Part 2 - Tests

Initial Thoughts:

1. Weather functions are already created from previous tests
2. Just need to add into the landPlane function

**Test H** - when `getWeather` is below 45, `Plane` is executed

**Test I** - when `getWeather` is 45 or above, when `takeoffPlane` is called an error occurs and the plane cannot takeoff

---

### Extended Criteria: Part 3 - User Story

```sh
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

### Extended Criteria: Part 3 - Domain Model

| Objects | Properties                      | Messages          | Outputs |
| ------- | ------------------------------- | ----------------- | ------- |
| Airport | groundedPlanes @Array[@Plane]   | landPlane(@Plane) | @String |
| Plane   | planeID @String                 | getPlaneId()      | @String |

### Extended Criteria: Part 3 - Tests
