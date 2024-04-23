'use client'

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const Navabr = () => {



    const searchParams = useSearchParams();
    const params = searchParams.get('genre')



  return (
    <div className="dark:bg-gray-600 bg-amber-100 p-5">
      
        <ul className="flex justify-center gap-4 lg:text-lg">
          <li>
            <Link href={`/?genre=Trending`} className={`font-semibold hover:text-amber-600 ${params === 'Trending' ? 'underline underline-offset-8 decoration-4 decoration-amber-600' : ''}`}>
              Trending
            </Link>
          </li>

          <li>
            <Link href={`/?genre=TopRated`} className={`font-semibold hover:text-amber-600 ${params === 'TopRated' ? 'underline underline-offset-8 decoration-4 decoration-amber-600' : ''}`}>
                Top Rated
            </Link>
          </li>
        </ul>
    
    </div>
  );
};

export default Navabr;
