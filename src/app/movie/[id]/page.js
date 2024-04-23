import Image from "next/image";
const API_KEY = process.env.API_KEY;

const MovieDetails = async ({ params }) => {
  const { id } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  const movie = await res.json();

  return (
    <div className="max-w-6xl mx-auto p-5 flex flex-col md:flex-row gap-4 mt-10 ">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster_path
        }`}
        width={450}
        height={300}
        className="rounded-lg  mx-auto"
      />

      <div className="space-y-2  ">

       <h2 className="font-bold text-lg">{movie.title || movie.name}</h2>
       <p><span className="font-semibold">Overview : </span> {movie.overview}</p>
       <p><span className="font-semibold">Date Released : </span> {movie.release_date || movie.first_air_date}</p>

       <p><span className="font-semibold">Rating :</span> {movie.vote_count}</p>
        
      </div>
    </div>
  );
};

export default MovieDetails;
