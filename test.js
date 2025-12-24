const assert = require('assert');
const { add, greet } = require('./index');

try {
    assert.strictEqual(add(2, 3), 5);
    assert.strictEqual(greet('John'), 'Hello John');
    console.log('✅ test passed');
} catch (e) {
    console.error('❌ test failed:', e.message);
    process.exit(1);
}