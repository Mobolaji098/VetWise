'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

interface IProduct{
  id:string;
  name:string;
}

const SearchBar = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<IProduct[] | []>([]);

  const handleSearch = async (e:any) => {
    e.preventDefault();

    if (query.trim() === '') {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(`/api/search?query=${query}`);
      const data = await response.json();
      setResults(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="p-4  w-full">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search "
          className=" rounded-l-md p-2 w-full m-auto h-12"
        />
        <button
          type="submit"
          className="bg-white text-white  pr-5 rounded-r-md h-12 items-center flex justify-center"
        >
         <Search className='text-pink-600' size={24} />
        </button>
      </form>
      {/* <div className="mt-4">
        {results.length > 0 ? (
          <ul>
            {results.map((product) => (
              <li key={product.id} className="border-b border-gray-200 p-2">
                {product.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found</p>
        )}
      </div> */}
    </div>
  );
};

export default SearchBar;
