import { useState, useEffect } from 'react';

const CONTEXT_KEY = "932966b5d437beb5b";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(()=> {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=AIzaSyCHJSnqKjX5S7MacG04R2Egzno71Q41ASg&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
        }

        fetchData()
    }, [term])

    return { data }
};

export default useGoogleSearch;
