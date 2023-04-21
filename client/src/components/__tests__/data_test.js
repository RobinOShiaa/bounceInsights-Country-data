export const DUMMY_FLAG_DATA = "https://flagcdn.com/w320/ad.png";

// Item Selected, Should Display Loading
export const DUMMY_SELECTED_DATA = {
  current: true,
  flag: "test",
  name: "testCountry",
};

export const DUMMY_NAV = [DUMMY_SELECTED_DATA];

export const DUMMY_COUNTRY_DATA = {
  capital: "testCapital",
  continent: "testContinent",
  language: "testLanguage",
  name: "test",
  officialName: "testOfficial",
  population: 1,
  subregion: "testSubregion",
  timezone: "testTimezone",
};

test("test", () => {
  expect(true).toBe(true);
});
