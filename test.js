const assert = require('assert');
const { add, greet, multiply } = require('./index');

console.log('Running tests...');

// Test add function
try {
    assert.strictEqual(add(5, 2), 7);
    console.log('✅ add test passed');
} catch (e) {
    console.error('❌ add test failed:', e.message);
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

// Test multiply function
try {
    assert.strictEqual(multiply(5, 2), 10);
    console.log('✅ multiply test passed');
} catch (e) {
    console.error('❌ multiply test failed:', e.message);
    process.exit(1);
}

console.log('All tests passed!');

