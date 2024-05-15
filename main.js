// Arrow functions
let greetings = () => "Hola";
console.log(greetings());

let division = (a, b) => a / b;
console.log(division(2, 4));

let myName = (name) => `Mi nombre es ${name}`;
console.log(myName("Zuhaitz"));

let test2 = () => console.log("Función test 2 ejecutada.");
let test1 = (callback) => callback();
test1(test2);

// ForEach
let people = [
  { name: "Jamiro", age: 45 },
  { name: "Juan", age: 35 },
  { name: "Paco", age: 34 },
  { name: "Pepe", age: 14 },
  { name: "Pilar", age: 24 },
  { name: "Laura", age: 24 },
  { name: "Jenny", edad: 10 },
];

let adults = [];
people.forEach((person) => (person.age > 25 ? adults.push(person) : null));
console.log(adults);

let startsJ = [];
people.forEach((person) =>
  person.name.startsWith("J") ? startsJ.push(person) : null
);
console.log(startsJ);

// Map
let adults2 = [];
people.map((person) => (person.age > 25 ? adults2.push(person) : null));
console.log(adults2);

let startsJ2 = [];
people.map((person) =>
  person.name.startsWith("J") ? startsJ2.push(person) : null
);
console.log(startsJ2);

const numbers = [4, 5, 6, 7, 8, 9, 10];

let numSquared = numbers.map((n) => n ** n);
console.log("Numbers squared: ", numSquared); // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

// Filter
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odds = numbers2.filter((n) => n % 2 != 0);
console.log("Odd numbers: ", odds);

const foodList = [
  { name: "Tempeh", isVeggie: true },
  { name: "Cheesbacon burguer", isVeggie: false },
  { name: "Tofu burguer", isVeggie: true },
  { name: "Entrecot", isVeggie: false },
];
let vegan = foodList.filter((food) => food.isVeggie);
console.log("Is Vegan: ", vegan);

// Reduce
const numbers3 = [39, 2, 4, 25, 62];
console.log(
  "Reduce result: ",
  numbers3.reduce((a, n) => (a *= n), 1)
); // Salida--> 483600

// Extras - Map
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

let phrases = staff.map(
  (employee) =>
    `${employee.name} es ${employee.role} y le gusta ${employee.hobbies[0]} y ${employee.hobbies[1]}`
);
console.log(phrases);

const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];
let phrases2 = foodList2.map((food) => {
  switch (food) {
    case "Pizza":
      return "Como soy de Italia, amo comer Pizza";
    case "Ramen":
      return "Como soy de Japón, amo comer Ramen";
    case "Paella":
      return "Como soy de Valencia, amo comer Paella";
    case "Entrecot":
      return "Aunque no como carne, el Entrecot es sabroso";

    default:
      return "Error";
  }
});
console.log(phrases2);

// Extras - Filter
const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];
console.log(inventory.filter((product) => product.price > 300));

// Extras - Reduce
const sentenceElements = [
  "Me",
  "llamo",
  "Zuhaitz",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];
console.log(sentenceElements.reduce((acc, word) => (acc += ` ${word}`)));
