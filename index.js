/**
 * Returns the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    return a + b;
}

/**
 * Returns a personalized greeting message.
 * @param {string} name - The person's name.
 * @returns {string} A greeting message addressed to the person.
 */
function greet(name) {
    return "Hello " + name;
}

/**
 * Returns the product of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
    return a * b;
}

module.exports = { add, greet, multiply };
