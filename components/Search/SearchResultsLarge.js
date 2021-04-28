const SearchResultsLarge = ({ materials }) => {
  const rowColor = (rowIndex) => {
    return rowIndex % 2 === 0 ? 'bg-[#3d556e]' : '';
  };
  return (
    <>
      {materials && (
        <div className='grid grid-flow-col grid-cols-4 gap-4'>
          <div className='text-2xl'>Number</div>
          <div className='text-2xl'>Title</div>
          <div className='text-2xl'>Type</div>
          <div className='text-2xl'>Composer</div>
        </div>
      )}
      {materials?.map((material, index) => (
        <div
          key={material.id}
          onClick={() => showMaterial(material.id)}
          className={`grid grid-flow-col grid-cols-4 gap-4 border-b border-gray-400 cursor-pointer ${rowColor(
            index
          )}`}
        >
          <div>{material.seriesNumber}</div>
          <div>{material.title}</div>
          <div>{material.type}</div>
          <div>{material.composer}</div>
        </div>
      ))}
    </>
  );
};

export default SearchResultsLarge;
