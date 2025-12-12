const assert = require('assert');
const { add } = require('./index');

try {
    assert.strictEqual(add(2, 3), 5);
    console.log('✅ test passed');
} catch (e) {
    console.error('❌ test failed:', e.message);
    process.exit(1);
}
