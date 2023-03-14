const animals = ['puppy', 'cat'];

exports.animals = animals;
exports.showAnimals = function showAnimals() {
  animals.map((el) => console.log(el));
};

// module.exports = {
//   animals,
//   showAnimals,
// }; 이방법을 더 많이 사용
