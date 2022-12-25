import React from 'react'

const Kart = ({ flag }) => {
    return (

            <div id="card">
                <img src={flag.flags.png} className="cardimage" alt="yoxdu" />
                <div className='cardtext' id='cardtext'>
                    <p className='cardtext1'>{flag.name.common}</p>
                    <p>Population:{flag.population}</p>
                    <p>Region:{flag.region}</p>
                    <p>Capital:{flag.capital}</p>
                </div>
            </div>

    )
}

export default Kart