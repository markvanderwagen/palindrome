"use client";

import { useMemo, useState } from "react";
import ResultBlock from "./ResultBlock";
import { useIsPalindrome } from "../utils/useIsPalindrome";

const PalindromeChecker = () => {
  const [words, setWords] = useState("");
  const isPalindrome = useIsPalindrome(words);

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
          result={isPalindrome}
          words={words.replace(/[^a-zA-Z0-9]/g, "")}
        />
      </div>
    </div>
  );
};

export default PalindromeChecker;
