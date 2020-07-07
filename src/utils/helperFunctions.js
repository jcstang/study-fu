import _ from "lodash";

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

  for (let i = 0; i < size; i++) {
    resultArray.push(_.random(1, 100));
  }

  console.log(`1. resultArray size: ${resultArray.length}`);

  resultArray = _.uniq(resultArray);

  console.log(`2. resultArray size: ${resultArray.length}`);

  while (resultArray < size) {
    resultArray.push(_.random(1, 100));
  }

  console.log(`3. resultArray size: ${resultArray.length}`);
  const returnArray = insertCorrectAnswer(resultArray, correctAnswer);
  console.log("here is returnArray");
  console.log(returnArray);

  return returnArray;
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
