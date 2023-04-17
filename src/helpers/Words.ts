import wordBank from "../words.json";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

type WordsType = {
  wordSet: Set<string>;
  todaysWord: string;
};

export const generateWordSet = async (): Promise<WordsType> => {
  const wordArr: string[] = wordBank;
  const todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
  const wordSet = new Set(wordArr);

  return { wordSet, todaysWord };
};
