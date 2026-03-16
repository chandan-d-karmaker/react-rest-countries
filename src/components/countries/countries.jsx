import React from 'react';
import { use } from 'react';
import Country from './country';
const Countries = ({ fetchCountries }) => {

    const allCountries = use(fetchCountries);
    const countries = allCountries.countries;
    // console.log(countries);

    const cardStyleParent = {
        display: 'grid',
        gridTemplateColumns : 'repeat(3, 1fr)',
        margin: '10px',
        padding: '10px',
        border: '2px solid blue',
        borderRadius: '12px'
    }


    return (
        <div style={cardStyleParent}>
            
            {
                countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;