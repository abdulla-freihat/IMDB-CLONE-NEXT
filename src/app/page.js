
import Results from "@/components/Results";
const API_KEY = process.env.API_KEY;

async function HomePage({ searchParams }) {
  const genre = searchParams.genre ||'Trending';
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "TopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await res.json()

   if(!res.ok){

     throw new Error('Faild to fetch!')
   }

    const results = data.results;
    console.log(results);

  return (

       <Results results = {results} />
  );
}

export default HomePage;
