// Input field within the sidebar for searching for country by name
const SearchBar = (props) => {
  const { onChange } = props;
  return (
    <div className="mb-2 -mx-2">
      <label
        htmlFor="email"
        className="block pt-8 text-xs font-semibold leading-6 text-indigo-200"
      >
        Countries
      </label>
      <div className="mt-2">
        <input
          data-testid="test-input"
          type="text"
          name="country"
          id="countrySearch"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Ireland"
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
