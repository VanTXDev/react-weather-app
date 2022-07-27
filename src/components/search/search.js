import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIOption, GEO_API_URL } from "../../api";

function Search({ onSearchChange }) {
  const [searchKey, setSearchKey] = useState(null);

  const loadOptions = (inVal) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inVal}`,
      geoAPIOption
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude} `,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnSearchChange = (searchValue) => {
    setSearchKey(searchValue);
    onSearchChange(searchValue);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={700}
      value={searchKey}
      onChange={handleOnSearchChange}
      loadOptions={loadOptions}
    />
  );
}
export default Search;
