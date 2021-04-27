import { useRouter } from 'next/router';

const SearchResults = ({ searchResult }) => {
  const router = useRouter();
  const materials = searchResult?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const showMaterial = (materialId) => router.push(`/material/${materialId}`);

  return (
    <div className='ml-5'>
      <div className='grid grid-flow-col grid-cols-4 gap-4'>
        <div className='text-2xl'>Number</div>
        <div className='text-2xl'>Type</div>
        <div className='text-2xl'>Title</div>
        <div className='text-2xl'>Composer</div>
      </div>
      {materials?.map((material) => (
        <div
          key={material.id}
          className='grid grid-flow-col grid-cols-4 gap-4 border-b border-gray-400 cursor-pointer'
          onClick={() => showMaterial(material.id)}
        >
          <div>{material.seriesNumber}</div>
          <div>{material.type}</div>
          <div>{material.title}</div>
          <div>{material.composer}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
