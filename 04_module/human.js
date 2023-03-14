const human = ['철수', '영희'];

exports.human = human;
exports.showName = function showName() {
  human.map((el) => console.log(el));
};
