// Renders List of country names in sidebar component
export const CountryList = ({ nav, selected, onCountryChange, classNames }) => {
  return (
    <ul role="list" className="mt-2 flex flex-1 flex-col gap-y-7">
      <li>
        <ul role="list" className="-mx-2 space-y-1" id="countryList">
          {nav.map((item, idx) => (
            <li
              key={item.name}
              className={
                item.name === selected.name
                  ? "cursor-pointer bg-indigo-700"
                  : "cursor-pointer hover:bg-indigo-700"
              }
            >
              <button
                data-testid={`${item.name}${idx}`}
                onClick={() => onCountryChange(item.name)}
                className={classNames(
                  item.name === selected.name
                    ? " text-white"
                    : "text-indigo-200 hover:text-white",
                  "group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-indigo-200 hover:text-white"
                )}
              >
                <div
                  className={classNames(
                    item.current
                      ? "text-white"
                      : "text-indigo-200 group-hover:text-white",
                    "h-6 w-6 shrink-0"
                  )}
                  aria-hidden="true"
                >
                  {item.flag}
                </div>
                <div className="flex w-100 text-left">{item.name}</div>
              </button>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
