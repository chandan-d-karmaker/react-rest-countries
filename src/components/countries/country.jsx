import React from 'react';


const Country = ({ country }) => {

    const cardStyle = {
        margin: '10px',
        padding: '10px',
        border: '2px solid blue',
        borderRadius: '12px'
    }
    
    // console.log(country.name.common);
    return (
        <div style={cardStyle}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} width='120px' />
            <h2>Name: {country.name.common} </h2>
            <h4>Capital: {country.capital.capital} </h4>
            <h4>Population: {country.population.population} </h4>
        </div>
    );
};

export default Country;