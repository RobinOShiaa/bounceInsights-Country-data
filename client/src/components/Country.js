import { GridStat } from "./GridStat";

// Renders all relevant country data
export const Country = ({ selected, country, countryFlag }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative pb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-start">
            <span
              id="title"
              className="pr-3 text-base font-semibold leading-6 text-grey-900"
            >
              {selected ? `${selected.flag} ${selected.name}` : "Loading..."}
            </span>
          </div>
        </div>
        {selected && (
          <div
            id="countryFlag"
            className="bg-slate-300 border-8  border-gray-900 mb-4 h-48"
          >
            <img src={countryFlag} className="h-full w-full mx-auto"></img>
          </div>
        )}
        <div
          id="country-stats"
          className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {selected &&
            Object.keys(country).map((key) => (
              <GridStat property={key} value={country[key]} />
            ))}
        </div>
      
        {selected && (
          <iframe
            id="google-iframe"
            className="mt-4 h-40 w-full"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}=${country.capital},${country.name}`}
          />
        )}
      </div>
    </div>
  );
};
