// IMPORT MODULES under test here:
// import { add } from '../calculator.js';

import { isEven } from '../is-even.js'

const test = QUnit.test;

test('is even'), (expect) => {
    const expected = true;
    const actual = isEven(2)
    expect.equal(acutal, expected);
}

// name your test by what it is testing
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true; // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
