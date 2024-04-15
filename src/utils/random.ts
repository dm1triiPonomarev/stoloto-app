import { IStore } from "../store/types";

function getRandomIntInclusive(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomList(size: number, min: number, max: number) {
  let randomNumbers: number[] = [];
  for (let i = 0; i < size; i++) {
    const randomNumber = getRandomIntInclusive(min, max);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    } else {
      i--;
    }
  }
  return randomNumbers;
}

export const checkWinner = (store: IStore) => {
  const firstWonList = generateRandomList(8, 1, 19);
  const secondWonList = generateRandomList(1, 1, 2);
  console.log({ store, firstWonList, secondWonList });
  const matchedNumbers = firstWonList.filter((number) =>
    store.firstField.includes(number)
  ).length;
  if (
    (secondWonList[0] === store.secondField[0] && matchedNumbers >= 3) ||
    matchedNumbers >= 4
  ) {
    console.log("U WON");
  } else {
    throw new Error("u lose");
  }
};
