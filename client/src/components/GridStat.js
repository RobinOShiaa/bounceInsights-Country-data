//a gridbox stating a field and q value of retrospective data
export const GridStat = ({ property, value }) => {
  return (
    <div className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
      <p className="text-sm font-medium leading-6 text-gray-400">{property}</p>
      <p className="mt-2 flex items-baseline gap-x-2">
        <span className="truncate text-xl font-semibold tracking-tight text-white">
          {value}
        </span>
      </p>
    </div>
  );
};
