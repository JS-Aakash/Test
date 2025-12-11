/**
 * Returns the sum of two numbers.
 *
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    return a + b;
}

/**
 * Returns a greeting message for the given name.
 *
 * @param {string} name The name to greet.
 * @returns {string} A greeting message.
 */
function greet(name) {
    return "Hello " + name;
}

// Export the functions for use in other modules.
module.exports = { add, greet };
