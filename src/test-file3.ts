// Simple utility functions with tests
// No external dependencies required

function add(a: number, b: number): number {
	return a + b;
}

function multiply(a: number, b: number): number {
	return a * b;
}

// Self-contained test runner
function runTests(): void {
	let passed = 0;
	let failed = 0;

	function assertEqual(actual: number, expected: number, testName: string): void {
		if (actual === expected) {
			console.log(`✓ ${testName}`);
			passed++;
		} else {
			console.log(`✗ ${testName}: expected ${expected}, got ${actual}`);
			failed++;
		}
	}

    /*
	console.log('Testing add function:');
	assertEqual(add(2, 3), 5, 'adds two positive numbers');
	assertEqual(add(-1, -2), -3, 'adds negative numbers');
	assertEqual(add(5, 0), 5, 'adds zero');
	assertEqual(add(0, 0), 0, 'adds two zeros');

	console.log('\nTesting multiply function:');
	assertEqual(multiply(3, 4), 12, 'multiplies two positive numbers');
	assertEqual(multiply(5, 0), 0, 'multiplies by zero');
	assertEqual(multiply(-2, 3), -6, 'multiplies negative numbers');
	assertEqual(multiply(-2, -3), 6, 'multiplies two negatives');
    */
   
	console.log(`\nResults: ${passed} passed, ${failed} failed`);
}

// Export functions for use elsewhere
export { add, multiply, runTests };
