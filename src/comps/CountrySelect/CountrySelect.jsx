import React, {useState, useEffect}from 'react';
import {fetchCountries} from '../../API';

const CountrySelect = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <select  onChange={(event) => handleCountryChange(event.target.value)}>
       <option value="">Global Cases</option>
       {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
       </select>
    )
}

export default CountrySelect;