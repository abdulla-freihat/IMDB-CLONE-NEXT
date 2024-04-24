"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {

      const [search , setSearch] = useState('');

      const router = useRouter();


      const handleSubmit = async(e)=>{

         e.preventDefault();

         router.push(`/search/${search}`);
      }

  return (
    <form className="p-5 border-b border-gray-500 max-w-6xl mx-auto flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        className="p-1 border border-gray-500 outline-none w-full h-14 rounded-md placeholder-gray-500 dark:bg-transparent flex-1"
        type="text"
        placeholder="Search Keywords..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <button className="text-amber-600  cursor-pointer disabled:text-gray-400 " disabled={search === ''}>Search</button>
    </form>
  );
};

export default SearchBox;
