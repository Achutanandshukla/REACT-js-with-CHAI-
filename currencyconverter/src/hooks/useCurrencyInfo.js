import { data } from "autoprefixer";
import { useEffect,useState } from "react";

function useCurrencyInfo (currency){
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/d6ac56c33d451a659deb3fcd/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        } ,[currency])
        return data
}

export default useCurrencyInfo;
