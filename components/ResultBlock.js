const ResultBlock = ({ result, words }) => {
  return (
    <div className="bg-white h-auto rounded-3xl">
      {words.trim().length > 0 ? (
        <div
          className={`flex justify-center items-center font-bold font-mono text-4xl ${
            result ? "bg-green-500" : "bg-red-500"
          } m-4 rounded-2xl text-white p-5`}
        >
          {result ? "True" : "False"}
        </div>
      ) : (
        <div
          className={`flex justify-center text-center items-center font-bold font-mono text-4xl bg-gray-500
           m-4 rounded-2xl text-white p-5`}
        >
          Enter a word for results!
        </div>
      )}
    </div>
  );
};

export default ResultBlock;
