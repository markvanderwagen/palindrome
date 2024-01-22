import Palindrome from "@/components/Palindrome";
import ResultBlock from "@/components/ResultBlock";
import Title from "@/components/Title";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center md:py-20 space-y-5">
      <Title
        title={"Palindrome Checker"}
        subtitle={"Want to see if a word is a palindrome?"}
      />
      <Palindrome />
    </div>
  );
}
