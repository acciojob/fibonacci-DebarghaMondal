function fibonacci(num) {
// your code here
	 return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2)
}

module.exports = fibonacci;
