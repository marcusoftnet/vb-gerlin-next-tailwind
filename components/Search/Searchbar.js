const Searchbar = ({
  handleSearch,
  handleClear,
  searchString,
  setSearchString,
}) => {
  return (
    <form onSubmit={handleSearch}  className='m-5 flex flex-col md:flex-row'>
      <input
        type='text'
        className='text-4xl md:w-3/4'
        autoFocus
        placeholder='Search for music'
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        />
      <div className='mt-2 ml-5 flex justify-end md:items-center'>
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
