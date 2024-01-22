const Title = ({ title, subtitle }) => {
  return (
    <div className="bg-white md:w-2/3 h-auto rounded-3xl">
      <div className="flex justify-center items-center font-bold font-mono text-2xl bg-black m-4 rounded-2xl text-white p-5">
        {title}
      </div>
      <div className="flex justify-center items-center text-center pb-4 font-bold font-mono text-lg px-10">
        {subtitle}
      </div>
    </div>
  );
};

export default Title;
