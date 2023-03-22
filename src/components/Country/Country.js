import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const {area, region, population, name,flags} = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p>Area: {area}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;