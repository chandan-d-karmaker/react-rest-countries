import React, { useState } from 'react';
import { use } from 'react';
import Country from './country';
const Countries = ({ fetchCountries }) => {

    const allCountries = use(fetchCountries);
    const countries = allCountries.countries;
    // console.log(countries);

    const cardStyleParent = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        margin: '10px',
        padding: '10px',
        border: '2px solid blue',
        borderRadius: '12px'
    }

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisited = [...visitedCountries, country]
        setVisitedCountries(newVisited);
    }


    return (
        <div>
            <h2>All the countries</h2>
            <h3>Visited Countries: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.ccn3.ccn3}>{country.name.common}</li>)
                }
            </ol>

            <div style={cardStyleParent}>
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;