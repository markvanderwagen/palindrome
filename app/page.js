import PalindromeChecker from "@/components/PalindromeChecker";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center md:py-20 space-y-5">
      <Header
        title={"Palindrome Checker"}
        subtitle={"Want to see if a word is a palindrome?"}
      />
      <PalindromeChecker />
    </div>
  );
}
