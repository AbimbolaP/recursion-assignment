function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (str.length === 0 || str.length === 1) {
        return "this word is a palindrome";
    }
    if (str.charAt(0) === str.charAt(str.length - 1)) {
        return isPalindrome(str.substring(1, str.length - 1));
    }
    return "this word is not a palindrome";
}
console.log('palindrome ', isPalindrome('nursesrun'));
function gcd(a, b) {
    if (b === 0)
        return a;
    return gcd(b, a % b);
}
;
console.log("gcd " + (gcd(48, 18)));
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
;
console.log("factorial " + (factorial(5)));
function reverseString(str) {
    if (str.length === 0)
        return "";
    return reverseString(str.substring(1)) + str.charAt(0);
}
console.log("reverseString " + (reverseString("Hello")));
function powerOf(x, y) {
    if (y === 0)
        return 1;
    return x * powerOf(x, y - 1);
}
console.log("powerOf " + (powerOf(9, 3)));
function fibonacci(n) {
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log('fibonacci ' + (fibonacci(20)));
function binary(n) {
    if (n === 0)
        return n;
    return binary(Math.floor(n / 2)) + String(n % 2);
}
console.log('binary ' + binary(20));
function sumOfDigits(n) {
    if (n === 0)
        return 0;
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}
console.log('sumOfDigits ' + sumOfDigits(2387));
