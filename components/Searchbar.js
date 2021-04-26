const Searchbar = ({
  handleSearch,
  handleClear,
  searchString,
  setSearchString,
}) => {
  return (
    <form onSubmit={handleSearch}  className='flex flex-col m-5'>
      <input
        type='text'
        className='text-4xl'
        autoFocus
        placeholder='Search for music'
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        />
      <div className='mt-2 flex justify-end'>
        <button type='submit' className='p-2' onClick={handleSearch}>
          Search
        </button>
        <button className='p-2 ml-4' onClick={handleClear}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
