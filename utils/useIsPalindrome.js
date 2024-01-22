import { useMemo } from "react";

export const useIsPalindrome = (originalWords) => {
  return useMemo(() => {
    let formattedWords = originalWords
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();

    let wordsInReverse = formattedWords.split("").reverse().join("");

    return wordsInReverse === formattedWords;
  }, [originalWords]);
};
