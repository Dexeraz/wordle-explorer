import wordBank from "./wordle-bank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\r\n"); //split changes the string to a array based on a given parameter
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]; //get random world per run
      wordSet = new Set(wordArr); //we can use Set because we have unique values
    });
  return { wordSet, todaysWord };
};
