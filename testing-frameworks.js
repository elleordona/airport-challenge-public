// frameworks for testing
const assertEquals = (expectedOutput, actualOutput) => expectedOutput === actualOutput; // checks if actual is equal to expected

const assertMoreThan = (expectedOutput, actualOutput) => expectedOutput < actualOutput; // checks if actual is more than expected

const assertBetween = (minValue, actualOutput, maxValue) => minValue <= actualOutput && actualOutput <= maxValue;
    
module.exports = {
    assertEquals,
    assertMoreThan,
    assertBetween
}; // exporting to be used in other files