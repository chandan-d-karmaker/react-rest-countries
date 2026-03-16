import React, { useState } from 'react';
import './countryVIsited.css';


const Country = ({ country, handleVisitedCountries }) => {

    const cardStyle = {
        margin: '10px',
        padding: '10px',
        border: '2px solid blue',
        borderRadius: '12px'
    }

    const [visited, setVisited] = useState(false);

    const handleVisited =()=>{
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    
    // console.log(country.name.common);
    return (
        <div style={cardStyle} className={visited? 'country-visited' : undefined}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} width='120px' />
            <h2>Name: {country.name.common} </h2>
            <h4>Capital: {country.capital.capital} </h4>
            <h4>Population: {country.population.population} </h4>
            <h4>Area: {country.area.area} {country.area.area > 300000? 'Big country' : 'smol country'}</h4>
            <button onClick={handleVisited}>
                {visited? 'Visited' : 'Not visited'}
            </button>
        </div>
    );
};

export default Country;