import { CheckCircleIcon } from "@heroicons/react/20/solid";

//Popup displaying success or failure of data retrieval from server based of value prop which is a boolean 
export const Alert = ({ value }) => {

  const { primaryColour, ringColour, ringOffsetColour, secondaryColour, bgColour } = value ? {
    primaryColour : "text-green-400",
    ringColour : "ring-green-600",
    ringOffsetColour : "ring-offset-green-50",
    secondaryColour : "text-green-800",
    bgColour : "bg-green-50"
  } : {
    primaryColour : "text-red-400",
    ringColour : "ring-red-600",
    ringOffsetColour : "ring-offset-red-50",
    secondaryColour : "text-red-800",
    bgColour : "bg-red-50"
  }

  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex justify-center">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className={`h-5 w-5 ${primaryColour}`}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p
            data-testid="result"
            className={`text-center text-sm font-medium ${secondaryColour}`}
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
