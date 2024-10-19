

function reverse(n) {
    var reverse = "";
    while (n > 0) {
        let lastdigit = n % 10; // Get the last digit
        reverse = reverse * 10 + lastdigit; // Build the reversed number
        n = Math.floor(n / 10); // Remove the last digit from n
    }
    return reverse; // Return the reversed number
}

console.log(reverse(231)); // Outputs: 132
