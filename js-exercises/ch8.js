//word info
const word = String(prompt("Emter a word: "));
console.log("\nLength: " + word.length);
console.log("\nLowercase: " + word.toLowerCase());
console.log("\nUppercase: " + word.toUpperCase());

lowerWord = word.toLowerCase();
let vowels = 0;
for(const char of lowerWord){
    if (char === "a" || 
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" ){
            vowels++;
    }
}
console.log("\nVowels: " + vowels);