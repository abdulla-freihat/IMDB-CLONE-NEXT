import Card from "./Card";

const Results = ({ results }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 justify-center items-center p-3 max-w-6xl mx-auto ">
      {results.map((result) => (
        <Card key={result._id} result={result} />
      ))}
    </div>
  );
};

export default Results;
