const assert = require('assert');
const { add, multiply, greet } = require('./index');

console.log('Running tests...');

// Test add function
try {
    assert.strictEqual(add(5, 2), 7);
    console.log('✅ add test passed');
} catch (e) {
    console.error('❌ add test failed:', e.message);
    process.exit(1);
}

// Test multiply function
try {
    assert.strictEqual(multiply(5, 2), 10);
    console.log('✅ multiply test passed');
} catch (e) {
    console.error('❌ multiply test failed:', e.message);
    process.exit(1);
}

// Test greet function
try {
    assert.strictEqual(greet("John"), "Hello John");
    console.log('✅ greet test passed');
} catch (e) {
    console.error('❌ greet test failed:', e.message);
    process.exit(1);
}

// Test edge cases for add function
try {
    assert.strictEqual(add(-5, 2), -3);
    assert.strictEqual(add(5, -2), 3);
    assert.strictEqual(add(0, 0), 0);
    console.log('✅ add edge cases test passed');
} catch (e) {
    console.error('❌ add edge cases test failed:', e.message);
    process.exit(1);
}

// Test edge cases for multiply function
try {
    assert.strictEqual(multiply(-5, 2), -10);
    assert.strictEqual(multiply(5, -2), -10);
    assert.strictEqual(multiply(0, 2), 0);
    assert.strictEqual(multiply(0, 0), 0);
    console.log('✅ multiply edge cases test passed');
} catch (e) {
    console.error('❌ multiply edge cases test failed:', e.message);
    process.exit(1);
}

console.log('All tests passed!');

