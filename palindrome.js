let string1 = prompt("Enter the first string (default: RACECAR)", "RACECAR");
let string2 = prompt("Enter the second string (default: RECORDER)", "RECORDER");
function reverseString(str) {
    return str.split('').reverse().join('');
}
let reversedString1 = reverseString(string1);

let reversedString2 = reverseString(string2);


console.log(`Original string 1: ${string1}`);

console.log(`Reversed string 1: ${reversedString1}`);

console.log(`Original string 2: ${string2}`);

console.log(`Reversed string 2: ${reversedString2}`);


console.log(`Is the first string a palindrome? ${string1 === reversedString1}`);
console.log(`Is the second string a palindrome? ${string2 === reversedString2}`);