const Searchbar = ({
  handleSearch,
  handleClear,
  searchString,
  setSearchString,
}) => {
  return (
    <div className='flex flex-col'>
      <input
        type='text'
        className='ml-5 text-4xl w-full p-2'
        autoFocus
        placeholder='Search for music'
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <div className='mt-5 flex justify-end '>
        <button type='submit' className='p-2 text-4xl' onClick={handleSearch}>
          Search
        </button>
        <button className='p-2 text-4xl ml-4' onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
