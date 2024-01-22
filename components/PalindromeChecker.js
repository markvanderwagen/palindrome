"use client";

import { useState } from "react";
import ResultBlock from "./ResultBlock";

const PalindromeChecker = () => {
  const [word, setWord] = useState("");

  // remove invalid characters and spaces from word
  const wordFormatter = (word) => {
    var invalidCharacters = [
      ".",
      ",",
      "/",
      "#",
      "!",
      "?",
      "+",
      "<",
      ">",
      "$",
      "%",
      "^",
      "&",
      "@",
      "*",
      ";",
      ":",
      "{",
      "}",
      "=",
      "-",
      "_",
      "`",
      "~",
      "(",
      ")",
      " ",
    ];

    for (var i = 0; i < invalidCharacters.length; i++) {
      word = word.split(invalidCharacters[i]).join("");
    }

    return word.toLowerCase();
  };

  // check if word is a palindrome
  const isPalindrome = (originalWord) => {
    let wordInReverse = "";

    // loop through word backwards and add each letter to wordInReverse
    for (let i = originalWord.length - 1; i >= 0; i--) {
      wordInReverse += originalWord[i];
    }

    return wordInReverse == originalWord ? true : false;
  };

  return (
    <div className="bg-white md:w-2/3 w-full m-5 h-auto rounded-3xl flex justify-center">
      <div className="bg-white h-auto rounded-3xl w-full">
        <div className=" flex justify-center font-bold font-mono text-lg bg-black m-4 rounded-2xl text-white p-2">
          Type your word below!
        </div>
        <div className="flex justify-center m-4">
          <input
            className="border-2 rounded-2xl p-4 w-full"
            placeholder="Here!"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
        <ResultBlock result={isPalindrome(wordFormatter(word))} word={word} />
      </div>
    </div>
  );
};

export default PalindromeChecker;
