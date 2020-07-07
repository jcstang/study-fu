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
    rowTop: choices.slice(0, 3),
    rowBtm: choices.slice(3, 6),
  };
};

const createChoicesArray = (size, correctAnswer) => {
  let theArray = [];
  // console.log(`1. length of theArray ${theArray.length}`);

  for (let i = 0; i < size; i++) {
    theArray.push(chance.d100());
  }
  // console.log(`2. length of theArray ${theArray.length}`);

  const randomPosition = chance.integer({ min: 0, max: 5 });
  // console.log(`randomPosition: ${randomPosition}`);
  theArray[randomPosition] = correctAnswer;
  // console.log(`3. length of theArray ${theArray.length}`);

  return theArray;
};
