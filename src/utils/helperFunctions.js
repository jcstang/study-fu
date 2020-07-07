import Chance from "chance";
const chance = new Chance();
// TODO: remove the lodash package

export const random = () => {
  return chance.d12();
};

export const getNewBatchOfNumbersObject = () => {
  const topNumber = chance.d12();
  const bottomNumber = chance.d12();
  const answer = topNumber * bottomNumber;
  const choices = createChoicesArray(6, answer);

  return {
    topNumber: topNumber,
    bottomNumber: bottomNumber,
    answer: answer,
    choices: choices,
  };
};

const createChoicesArray = (size, correctAnswer) => {
  let theArray = [];

  for (let i = 0; i < size; i++) {
    theArray.push(chance.d100());
  }
  const randomPosition = chance.integer({ min: 0, max: 6 });
  theArray[randomPosition] = correctAnswer;

  return theArray;
};
