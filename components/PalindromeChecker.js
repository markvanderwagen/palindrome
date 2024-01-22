"use client";

import { useState } from "react";
import ResultBlock from "./ResultBlock";

const PalindromeChecker = () => {
  const [words, setWords] = useState("");

  // remove invalid characters and spaces from sentence
  const wordFormatter = (words) => {
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
      words = words.split(invalidCharacters[i]).join("");
    }

    return words.toLowerCase();
  };

  // check if word is a palindrome
  const isPalindrome = (originalWords) => {
    let wordsInReverse = "";

    // loop through word backwards and add each letter to wordsInReverse
    for (let i = originalWords.length - 1; i >= 0; i--) {
      wordsInReverse += originalWords[i];
    }

    return wordsInReverse == originalWords ? true : false;
  };

  return (
    <div className="bg-white md:w-2/3 w-full m-5 h-auto rounded-3xl flex justify-center">
      <div className="bg-white h-auto rounded-3xl w-full">
        <div className=" flex justify-center font-bold font-mono text-lg bg-black m-4 rounded-2xl text-white p-2">
          Type your sentence below!
        </div>
        <div className="flex justify-center m-4">
          <input
            className="border-2 rounded-2xl p-4 w-full"
            placeholder="Here!"
            value={words}
            onChange={(e) => setWords(e.target.value)}
          />
        </div>
        <ResultBlock
          result={isPalindrome(wordFormatter(words))}
          words={words}
        />
      </div>
    </div>
  );
};

export default PalindromeChecker;
