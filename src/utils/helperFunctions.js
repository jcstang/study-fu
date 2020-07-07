import _ from "lodash";
import Chance from "chance";
const chance = new Chance();

//var item = items[Math.floor(Math.random() * items.length)];

export const random = () => {
  const limitNumber = 11;
  const randomNumber = Math.floor(Math.random() * limitNumber) + 2;

  return randomNumber;
};

export const getRandomFromSize = (size) => {
  return Math.floor(Math.random() * size);
};

export const freshUniqueArray = (size, correctAnswer) => {
  let resultArray = [];
  // const maxNumber = 110;

  for (let i = 0; i < size; i++) {
    resultArray.push(chance.d100());
  }

  const randomPosition = chance.integer({ min: 0, max: 6 });
  resultArray[randomPosition] = correctAnswer;
  return resultArray;

  // FIXME: problem: array size is sometimes 5 instead of 6, outcome: ALWAYS have array of 6
  // resultArray = _.uniq(resultArray);

  // while (resultArray < size) {
  //   resultArray.push(_.random(1, maxNumber));
  // }

  // let someArray = insertCorrectAnswer(resultArray, correctAnswer);
  // someArray = _.uniq(someArray);

  // while (someArray < size) {
  //   someArray.push(_.random(1, maxNumber));
  // }

  // return someArray;
  // return insertCorrectAnswer(resultArray, correctAnswer);
};

const insertCorrectAnswer = (choiceArray, correctAnswer) => {
  let resultArray = choiceArray;
  resultArray[Math.floor(Math.random() * resultArray.length)] = correctAnswer;
  return resultArray;
};

export const createChoiceArray = (correctAnswer) => {
  const choiceArray = [];
  const lengthOfAnswers = 6;

  //choiceArray.push(correctAnswer);

  // const bArray = _.fill(Array(6), random());

  // console.log("here is bArray lodash");
  // console.log(bArray);
  // bArray[Math.floor(Math.random() * 6) + 1] = correctAnswer;

  // console.log("here is bArray after");
  // console.log(bArray);

  for (let index = 0; index <= lengthOfAnswers - 1; index++) {
    choiceArray.push(random());
  }

  choiceArray[getRandomFromSize(6)] = correctAnswer;
  //console.log("here is choiceArray with random insert");
  console.log(choiceArray);
  console.log(`correctAnswer: ${correctAnswer}`);

  return choiceArray;
};

export const notRandom = () => {
  return 1;
};
