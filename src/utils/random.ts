import { IStore } from "../store/types";

function getRandomIntInclusive(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomList(size: number, min: number, max: number) {
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
const deleyFetch = async ({ store, win }: { store: IStore; win: boolean }) => {
  const fetchData = async () =>
    await fetch("https://example.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        selectedNumber: {
          firstField: [...store.firstField],
          secondField: [...store.secondField],
        },
        isTicketWon: win,
      }),
    });

  // Отправка данных с повторением, при необходимости
  try {
    await fetchData();
  } catch (e) {
    setTimeout(async () => {
      try {
        await fetchData();
      } catch {
        setTimeout(async () => {
          try {
            await fetchData();
          } catch {
            alert("Fetch data Error");
          }
        }, 2000);
      }
    }, 2000);
  }
};

export const checkWinner = (store: IStore) => {
  const firstWonList = generateRandomList(8, 1, 19);
  const secondWonList = generateRandomList(1, 1, 2);
  const matchedNumbers = firstWonList.filter((number) =>
    store.firstField.includes(number)
  ).length;
  if (
    (secondWonList[0] === store.secondField[0] && matchedNumbers >= 3) ||
    matchedNumbers >= 4
  ) {
    deleyFetch({ store, win: true });
  } else {
    deleyFetch({ store, win: false });
    throw new Error("u lose");
  }
};
