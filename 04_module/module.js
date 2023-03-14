// const animalModule = require('./animals');

// console.log(animalModule);
// console.log(animalModule.animals);
// animalModule.showAnimals();

// 구조 분해 할당 문법
const { animals, showAnimals } = require('./animals');

console.log(animals);
showAnimals();
