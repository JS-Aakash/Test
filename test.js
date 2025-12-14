const assert = require('assert');
const { add, multiply } = require('./index');

try {
    assert.strictEqual(add(2, 3), 5);
    assert.strictEqual(multiply(2, 3), 6);
    console.log('✅ tests passed');
} catch (e) {
    console.error('❌ test failed:', e.message);
    process.exit(1);
}