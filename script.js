function fibonacci(num) {
// your code here
	 return num < 1 ? 0
        : num <= 2 ? 1
        : fibonacci(num - 1) + fibonacci(num - 2)
}

module.exports = fibonacci;
