import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIOption, GEO_API_URL } from "../../api";
import InputSearch from "./input-search";

function Search({ onSearchChange }) {
  const [searchKey, setSearchKey] = useState(null);
  const [searchType, setSearchtype] = useState("0");

  const loadOptions = (inVal) => {
    return fetch(
      `${GEO_API_URL}/cities?namePrefix=${inVal}&countryIds=VN`,
      geoAPIOption
    )
      .then((response) => response.json())
      .then((response) => {
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
  const handleBtnSearchClick = () => {
    var lat = document.getElementById("lat").value;
    var lon = document.getElementById("lon").value;
    var searchValueOject = {
      value: lat + " " + lon,
      label: "",
    }
    console.log(searchValueOject);
    setSearchKey(searchValueOject);
    onSearchChange(searchValueOject);
  }

  const handleSearchTypeChange = () => {
    setSearchtype(document.getElementById("searchType").value);
  };

  return (
    <>
      {searchType === "0" ? (
        <AsyncPaginate
          placeholder="Search for city"
          debounceTimeout={700}
          value={searchKey}
          onChange={handleOnSearchChange}
          loadOptions={loadOptions}
        />
      ) : (
        <>
        <InputSearch />
        <Button variant="outline-success" className="btn-search" onClick={handleBtnSearchClick}>Search</Button>
        </>
      )}
      <Form.Select aria-label="Default select example" id="searchType" onChange={handleSearchTypeChange}>
        <option value="0" selected>City Name</option>
        <option value="1">Position</option>
    </Form.Select>
    </>
  );
}
export default Search;
