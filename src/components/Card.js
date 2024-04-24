import Link from "next/link";
import Image from "next/image";
import {FiThumbsUp} from 'react-icons/fi'

const Card = ({ result }) => {
  return (
    <div className="border p-3  rounded-lg  group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
            alt ={result.title || result.name}
           width={500}
           height={300}

           className="rounded-lg mx-auto  group-hover:opacity-75 transition-opacity "
        
        />

        <div className="mt-3 space-y-1">
          <p className="line-clamp-2">{result.overview}</p>
          <h4 className="font-bold truncate">{result.title || result.name}</h4>
          <div className="flex gap-3 items-center">
            <p>{result.release_date || result.first_air_date}</p>
             <div className="flex gap-2 items-center">
                 <FiThumbsUp />
                 <p>{result.vote_count}</p>
             </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
