import { useEffect, useState } from "react";

const useFetchData = () => {
    const [data, setData]=useState([])
    const [dataFecthing , setDataFecthing]=useState(true)
    useEffect(()=>{
        setDataFecthing(true)
        const fetchData=async()=>{
            const res= await fetch('data.json')
            const data= await res.json()
            setData(data)
            setDataFecthing(false)
        }
        fetchData()
    },[])
    return {data, dataFecthing}
};

export default useFetchData;