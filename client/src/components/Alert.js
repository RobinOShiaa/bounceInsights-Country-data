import { CheckCircleIcon } from "@heroicons/react/20/solid";

export const Alert = ({ value }) => {
  const primaryColour = value ? "text-green-400" : "text-red-400";
  const ringColour = value ? "ring-green-600" : "ring-red-600";
  const ringOffsetColour = value
    ? "ring-offset-green-50"
    : "ring-offset-red-50";
  const secondaryColour = value ? "text-green-800" : "text-red-800";
  const bgColour = value ? "bg-green-50" : "bg-red-50";

  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className={`h-5 w-5  ${primaryColour}`}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p
            data-testid="result"
            className={`text-sm font-medium ${secondaryColour}`}
          >
            {value
              ? "Country data retrieved"
              : "Country data retrieval unsuccessful"}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className={`inline-flex rounded-md ${bgColour} p-1.5 ${primaryColour} hover:bg-green-100 focus:outline-none focus:ring-2 focus:${ringColour} focus:ring-offset-2 focus:${ringOffsetColour}`}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
