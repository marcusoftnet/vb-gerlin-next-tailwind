const SearchResultsLarge = ({ materials, showMaterial }) => {
  return (
    <div className='grid grid-cols-2'>
      {materials?.map((material) => (
        <div
          key={material.id}
          onClick={() => showMaterial(material.id)}
          className='shadow-xl flex flex-col m-2 p-2 bg-[#3d556e]'
        >
          <div>
            <h2 className='font-bold border-b'>{material.seriesNumber}</h2>
          </div>
          <div>
            <p className='truncate'>{material.title}</p>
            <p className='truncate'>{material.type}</p>
            <p className='truncate'>{material.composer}</p>
          </div>
        </div>
        // Type icon
        // Description container
        // # & Title
        // Composer
        // Type
      ))}
    </div>
  );
};

export default SearchResultsLarge;
