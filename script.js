function fibonacci(num) {
    if (num === 1) return 0; // The 1st Fibonacci number
    if (num === 2) return 1; // The 2nd Fibonacci number

    let a = 0; // F(1)
    let b = 1; // F(2)
    let fib = 0;

    for (let i = 3; i <= num; i++) {
        fib = a + b; // F(n) = F(n-1) + F(n-2)
        a = b; // Move to the next Fibonacci number
        b = fib; // Update b to the current Fibonacci number
    }

    return fib; // Return the nth Fibonacci number
}

module.exports = fibonacci;
