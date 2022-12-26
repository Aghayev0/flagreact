import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Kart from './Kart'

function Ev() {
    const [flags, setFlags] = useState([])
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(res => {setFlags(res.data)})
    })
    return (
        flags.map((flag) => {
            return (
                <Link key={flag.cca2} to={`/flag/${flag.cca2}`}>
                    <Kart  flag={flag} />
                </Link>
            )
        })
    )
}
export default Ev