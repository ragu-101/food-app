import { useEffect, useState,useCallback } from "react";

async function sendHttpRequest(url,config){
    const response = await fetch(url,config);

    const resData = await response.json();

    if(!response.ok){
        throw new Error(resData.message || "Somthing Went Wrong");
    }

    return resData;
}

export default function useHttp(url,config,initialData){
    const [data,setData] = useState(initialData);
    const [isloading,setIsloading] = useState(false);
    const [error,setError] = useState();


    const sendRequest = useCallback(async function sendRequest(){
        setIsloading(true);
        try{
            const resData = await sendHttpRequest(url,config);
            setData(resData);
        } catch(err){
            setError(err.message || "Something went wrong");
        }
        setIsloading(false);
    },[url,config]);

    useEffect(()=>{
        if(config && (config.method === 'GET' || !config.method) || !config){
            sendRequest();
        }
    },[sendRequest])

    return {
        data,isloading,error,sendRequest
    } 
}