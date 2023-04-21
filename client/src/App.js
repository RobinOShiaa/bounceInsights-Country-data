import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import SearchBar from "./components/SearchBar";
import { CountryList } from "./components/CountryList";
import { Country } from "./components/Country";
import { Alert } from "./components/Alert";

// returns concatenation of string classnames
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [state, setState] = useState({
    countries: [],
    navigation: [],
    selected: false,
    country: {},
    countryFlag: "",
    search: "",
  });
  // monitored for responsive design
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // monitored for success or failure of fetch request
  const [notification , setAlert] = useState(null);
  // monitored to  hide notification after 1 second 
  const [displayNotification, setDisplayNotification] = useState(false);

  const hideNotification = () => {
    setTimeout(() => {
      setDisplayNotification(false);
    }, 1000);
  }

  const onCountryChange = (country) => {
    setDisplayNotification(true)
    fetch(`/api?country=${country}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.statCode === 200) {
          const c = d.data[0];  
          setState({
            ...state,
            countryFlag: c.flags.png,
            country: {
              name: c.name.common,
              officialName: c.name.official,
              capital: c.capital[0],
              continent: Object.values(c.continents)[0],
              population: c.population,
              subregion: c.subregion,
              timezone: c.timezones[0],
              language: Object.values(c.languages)[0],
            },
            selected: state.navigation.filter((n) => n.name === country)[0],
          });
          setAlert(true);
          hideNotification();
        } else {
          setAlert(false);
          hideNotification();
        }
      });
  };

  const onSearchChangeHandler = (e) => {
    const result = state.countries.filter(
      (country) =>
        country.name.toLowerCase().substring(0, e.target.value.length) ===
        e.target.value.toLowerCase()
    );
    setState({
      ...state,
      search: e.target.value,
      navigation: result,
    });
  };

  useEffect(() => {
    setDisplayNotification(true)
    fetch("/api/all")
      .then((r) => r.json())
      .then((d) => {
        if (d.statCode === 200) {
          const nav = d.data.map((v) => {
            return {
              name: v.name.common,
              flag: v.flag,
              current: false,
            };
          }).sort((a, b) => (a.name > b.name ? 1 : -1));
          setState({
            ...state,
            navigation: nav,
            countries: nav,
            selected: !nav[0],
          });
          setAlert(true);
          hideNotification();
        } else {
          setAlert(false);
          hideNotification();
        }
      });
  }, []);

  return (
    <div>

      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>

                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {state.navigation.map((item) => (
                            <li key={item.name}>
                              <button
                                onClick={() => onCountryChange(item.name)}
                                className={classNames(
                                  item.name === state.selected.name
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
                                <div className="flex w-100 text-left">
                                  {item.name}
                                </div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
          <nav className="flex flex-1 flex-col">
            <SearchBar onChange={onSearchChangeHandler} />
            <CountryList
              nav={state.navigation}
              selected={state.selected}
              onCountryChange={onCountryChange}
              classNames={classNames}
            />
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-white">
          Dashboard
        </div>
      </div>

      <main className="py-3 lg:pl-72">
        <div className={classNames('absolute w-full flex justify-center mt-4', displayNotification ?  'block' : 'hidden' )}>
          {notification !== null && <Alert value={notification}/>}
        </div>
        <Country
          selected={state.selected}
          country={state.country}
          countryFlag={state.countryFlag}
        />
      </main>
    </div>
  );
}

export default App;
