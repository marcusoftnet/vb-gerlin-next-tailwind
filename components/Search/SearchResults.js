import { useRouter } from 'next/router';
import useWindowSize from '../../hooks/useWindowSize';
import SearchResultsLarge from './SearchResultsLarge';
import SearchResultsSmall from './SearchResultsSmall';

const SearchResults = ({ searchResult, searchString }) => {
  const windowSize = useWindowSize();
  const router = useRouter();
  const materials = searchResult?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const showMaterial = (materialId) =>
    router.push(`/material/${materialId}?searchString=${searchString}`);

  return (
    <div className='ml-5'>
      {windowSize.width > 768 ? (
        <SearchResultsLarge materials={materials} showMaterial={showMaterial} />
      ) : (
        <SearchResultsSmall materials={materials} showMaterial={showMaterial} />
      )}
    </div>
  );
};

export default SearchResults;
