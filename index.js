/**
 * Function to add two numbers.
 *
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    return a + b;
}

/**
 * Function to greet someone.
 *
 * @param {string} name The person's name to greet.
 * @returns {string} A greeting message.
 */
function greet(name) {
    return `Hello ${name}`;
}

/**
 * Function to multiply two numbers.
 *
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
    return a * b;
}

module.exports = { add, greet, multiply };
