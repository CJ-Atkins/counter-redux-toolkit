import { React, useState } from 'react';

const Search = () => {
  const [searchTxt, setSearchTxt] = useState('');
  const API_KEY = '0d853fc444024e038f0d01d8bbb2e0a7';

  const Search = (e) => console.log(searchTxt);

  return (
    <div>
      <input type='text' onChange={(e) => setSearchTxt(e.target.value)} />
      <button onClick={(e) => Search(e)}>Go</button>
    </div>
  );
};

export default Search;
