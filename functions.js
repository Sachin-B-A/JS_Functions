// String operations
let str = "Hello,Hello,world    ";

// Print the length of the string
console.log(str.length);

// Find the last occurrence of "Hello"
console.log(str.lastIndexOf("Hello"));

// Slice the string from index 0 to 7
console.log(str.slice(0, 7));

// Replace "world" with "hello"
console.log(str.replace("world", "hello"));

// Split the string by commas
console.log(str.split(","));

// Trim the whitespace from both ends of the string
console.log(str.trim());

// Convert the string to uppercase
console.log(str.toUpperCase());

// Parse a float from a string
console.log(parseFloat("36.56kfd"));

// Array operations
const array = [3, 5, 6, 7];

array.push(2); // Add element to the end
array.pop(); // Remove last element
array.shift(); // Remove first element
array.shift(); // Remove first element again
array.unshift(0); // Add element to the beginning
array.unshift(1); // Add another element to the beginning
console.log(array); // Print the array

// Concatenate two arrays
const arr1 = [4, 5, 6];
const arr2 = [1, 2, 3];
console.log(arr2.concat(arr1));

// Function operations
function log1() {
  console.log("str");
}
function log2() {
  console.log("str");
}
function caller(fn) {
  fn();
}
caller(log2);

// Class and object operations

// Define Animal class
class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}

// Define objects dog and cat
const dog = {
  Name: "Samarth",
  legcount: 4,
  Sound: "Bow Bow",
};
const cat = {
  Name: "Prajwal",
  legcount: 4,
  Sound: "Meow",
};
console.log("Animal" + dog.Name + " has " + dog.legcount + " legs");

// Updated Animal class with static method and speak method
class AnimalUpdated {
  constructor(Name, Count, speaks) {
    this.Name = Name;
    this.Count = Count;
    this.speaks = speaks;
  }
  static typeOf() {
    console.log("Hello I am not an animal");
  }
  speak() {
    console.log("Hi there " + this.speaks);
  }
}

let Dog = new AnimalUpdated("Samarth", 4, "Moye Moye");
Dog.speak();
AnimalUpdated.typeOf(); // Static methods can be called directly without an object

// Date operations
const date = new Date();
const getDate = date.getDate();
console.log(getDate);

// Set a new date
date.setDate(7);
console.log(date.getDate());

// Time measurement example
function timeWaiter() {
  let a = 0;
  for (let i = 0; i < 100000000; i++) {
    a += 1;
  }
}
const startDate = new Date();
const startTime = startDate.getTime();
timeWaiter();
const afterDate = new Date();
const endTime = afterDate.getTime();
console.log(endTime - startTime);

// Print time every second
function timePrinter() {
  console.log(new Date().getTime());
}
setInterval(timePrinter, 1000);

// JSON operations
const jsonStr = {
  Name: "Sachin",
  Age: 19,
  Gender: "Male",
};
const userJson = JSON.stringify(jsonStr);
console.log(userJson);

// Math operation
console.log(Math.round(4.1));

// Object operations
const user = {
  Name: "Sachin",
  Age: 20,
  Gender: "Male",
};

let objKeys = Object.keys(user);
let objValues = Object.values(user);
let objEntries = Object.entries(user);
let hasNumberProp = user.hasOwnProperty("Number"); // Returns true or false
let newObj = Object.assign({}, user, { newProperty: "New" });

console.log(objKeys);
console.log(objValues);
console.log(objEntries);
console.log(hasNumberProp);
console.log(newObj);

// Callback function example with anonymous function
function cube(n) {
  return n * n * n;
}
function sumOfSomething(a, b, callback) {
  console.log(callback);
  const var1 = callback(a);
  const var2 = callback(b);
  return var1 + var2;
}
const result = sumOfSomething(5, 5, function (n) {
  return n * n;
});
console.log(result);
