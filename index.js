// 1. Extract the first three characters of each string
const words = ["apple", "banana", "kiwi", "orange", "grape"];
const firstThreeChars = words.map((word) => word.slice(0, 3));
console.log(firstThreeChars);

// 2. Calculate the cube of each number
const nums = [1, 2, 3, 4, 5];
const cubes = nums.map((num) => num ** 3);
console.log(cubes);

// 3. Remove the first two characters from each string
const fruitsArray = ["apple", "banana", "kiwi", "orange", "grape"];
const removedFirstTwo = fruitsArray.map((fruit) => fruit.slice(2));
console.log(removedFirstTwo);

// 4. Add a 10% bonus to each salary
const salaries = [5000, 7500, 12000, 3000, 9000];
const salariesWithBonus = salaries.map((salary) => salary * 1.1);
console.log(salariesWithBonus);

// 5. Create an array of greetings
const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
const greetings = names.map((name) => `Hello, ${name}`);
console.log(greetings);

// 6. Find the length of each sentence
const sentences = [
  "Hello, how are you?",
  "JavaScript is fun!",
  "Arrays are versatile.",
];
const sentenceLengths = sentences.map((sentence) => sentence.length);
console.log(sentenceLengths);

// 7. Convert Celsius temperatures to Fahrenheit
const temperaturesCelsius = [0, 20, 37, -5, 10];
const temperaturesFahrenheit = temperaturesCelsius.map(
  (temp) => (temp * 9) / 5 + 32
);
console.log(temperaturesFahrenheit);

// 8. Apply a 10% discount to each price
const prices = [50, 75, 120, 30, 90];
const discountedPrices = prices.map((price) => price * 0.9);
console.log(discountedPrices);

// 9. Fix decimal numbers to two decimal places
const decimalNumbers = [50.2456, 750.5677, 12.56705, 300.5065, 9.23406789];
const fixedDecimals = decimalNumbers.map((num) => num.toFixed(2));
console.log(fixedDecimals);

// 10. Add the length of each name to the name
const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva"];
const namesWithLength = namesArray.map((name) => `${name}${name.length}`);
console.log(namesWithLength);
