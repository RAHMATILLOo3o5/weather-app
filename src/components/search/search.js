import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoApiOptions, GeoApiUrl } from "../../api";

const Search = ({ searchData }) => {

    const [search, setSearch] = useState(null);

    const handleChange = (search) => {
        setSearch(search);
        searchData(search);
    }

    const loadOptions = (inputValue) => {
        return fetch(`${GeoApiUrl}/cities?minPopulation=10000&namePrefix=${inputValue}`, GeoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <AsyncPaginate
            placeholder="Search..."
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;