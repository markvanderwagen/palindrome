"use client";

import { useState } from "react";
import ResultBlock from "./ResultBlock";

const Palindrome = () => {
  const [word, setWord] = useState("");

  const isPalindrome = (originalWord) => {
    let wordInReverse = "";
    for (let i = originalWord.length - 1; i >= 0; i--) {
      wordInReverse += originalWord[i];
    }
    if (wordInReverse == originalWord) {
      return true;
    } else {
      return false;
    }
  };

  const Formatter = (word) => {
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

  return (
    <div className="bg-white md:w-2/3 m-5 h-auto rounded-3xl flex justify-center">
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
        <div className="w-full">
          <ResultBlock result={isPalindrome(Formatter(word))} word={word} />
        </div>
      </div>
    </div>
  );
};

export default Palindrome;
