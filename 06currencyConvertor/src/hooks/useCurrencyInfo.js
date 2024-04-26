import { useEffect,useState } from "react";

function useCurrencyInfo(){

    const [data, setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json()) //chaining to convert data into json format
        .then((res) => setData(res[currency])) //to set data 
        console.log(data);
    },[currency])

    console.log(data);
    return data


}

export default useCurrencyInfo;