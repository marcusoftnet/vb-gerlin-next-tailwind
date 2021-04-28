import { useRouter } from 'next/router';
import useWindowSize from '../../hooks/useWindowSize';
import SearchResultsLarge from './SearchResultsLarge';
import SearchResultsSmall from './SearchResultsSmall';

const SearchResults = ({ searchResult }) => {
  const router = useRouter();
  const materials = searchResult?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const windowSize = useWindowSize();
  console.log(windowSize); //768px

  const showMaterial = (materialId) => router.push(`/material/${materialId}`);

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
