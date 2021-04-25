const SearchResults = ({ searchResult }) => {
  return (
    <div>
      {searchResult?.docs.map((doc) => (
        <div key={doc.id}>{doc.data().title}</div>
      ))}
    </div>
  );
};

export default SearchResults;
