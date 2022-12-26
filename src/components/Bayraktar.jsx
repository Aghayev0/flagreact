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
            }}>Loading the data {console.log("loading state")}</div>
        );
    }
    return (<>
        <p>{flags[0].area}</p>
        <p>{flags[0].name.common}</p>
        <p>{flags[0].capital}</p>
        <p>{flags[0].region}</p>
    </>
    );
}

export default Flags