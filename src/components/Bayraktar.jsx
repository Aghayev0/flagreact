import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Flags() {
    const [bayraq, setBayraq] = useState([])
    const { cca2 } = useParams()
    useEffect(() => {
        axios
            .get(`https://restcountries.com/v3.1/alpha/${cca2}`)
            .then((res) => setBayraq(res.data))
    }, [])
    return (
        console.log(bayraq[0])
    )
}

export default Flags