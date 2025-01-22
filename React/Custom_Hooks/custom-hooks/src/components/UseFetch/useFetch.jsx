import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        setLoading(true)
        function fetchData() {
        fetch(url).then((res)=>res.json()).then((res)=>{

            console.log(res)
            setData(res)
            setLoading(false)

        }).catch((err)=>{
            console.log(err)
            setError(true)
            .finally(() => setLoading(false))
        })
        }
        
        fetchData()

    }, [url])

    return [data, loading, error]
}