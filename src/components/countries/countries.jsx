import React from 'react';
import { use } from 'react';
import Country from './country';
const Countries = ({ fetchCountries }) => {

    const allCountries = use(fetchCountries);
    const countries = allCountries.countries;
    // console.log(countries);

    const cardStyle = {
        margin: '10px',
        padding: '10px',
        border: '2px solid blue',
        borderRadius: '12px'
    }


    return (
        <div style={cardStyle}>
            <h2>All the countries {countries.length} </h2>
            {
                countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;