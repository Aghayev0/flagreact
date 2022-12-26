import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Flags() {
    const [flags, setFlags] = useState([])
    const { cca2 } = useParams()
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get(`https://restcountries.com/v3.1/alpha/${cca2}`)
            .then((res) => {
                setFlags(res.data);
                setLoading(false);

            }, 3000);
    }, []);
    if (isLoading) {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}><div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div></div>
        );
    }
    return (
        <div className='cardinfo'>
            <div className='img'>
                <img src={flags[0].flags.png}></img>
            </div>
            <div className='cardinfotext'>
                <p>Native Name: {flags[0].name.official}</p>
                <p>Population: {flags[0].population}</p>
                <p>Region: {flags[0].region}</p>
                <p>Sub Region: {flags[0].subregion}</p>
                <p>Capital: {flags[0].capital}</p>
            </div>
        </div>
    );
}

export default Flags