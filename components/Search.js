import { useState } from 'react';
import { searchMusic } from '../lib/queries';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';

const Search = () => {
  const [searchString, setSearchString] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    if (searchString.length > 0) {
      const result = await searchMusic(searchString);
      setSearchResult(result);
    }
  };

  const handleClear = () => {
    setSearchResult(null);
    setSearchString('');
  };

  return (
    <div className='container'>
      <Searchbar
        handleSearch={handleSearch}
        handleClear={handleClear}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <SearchResults searchResult={searchResult} />
    </div>
  );
};

export default Search;
