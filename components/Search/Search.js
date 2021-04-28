import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { searchMusic } from '../../lib/queries';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';

const Search = () => {
  const router = useRouter();
  const [searchString, setSearchString] = useState(
    router.query.searchString || ''
  );
  const [searchResult, setSearchResult] = useState(null);

  useEffect(async () => {
    if (searchString !== '') {
      const result = await searchMusic(searchString);
      setSearchResult(result);
    }
  }, [router.query.searchString]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchString.length > 0) {
      const result = await searchMusic(searchString);
      setSearchResult(result);
    }
  };

  const handleClear = () => {
    setSearchResult(null);
    setSearchString('');
    router.push('/search');
  };

  return (
    <div className='container'>
      <Searchbar
        handleSearch={handleSearch}
        handleClear={handleClear}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <SearchResults searchResult={searchResult} searchString={searchString} />
    </div>
  );
};

export default Search;
