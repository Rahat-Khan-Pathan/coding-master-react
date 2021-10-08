import { useState } from "react";
import { useEffect } from "react"

const UseFakeData = ()=> {
    // Fake data for showing courses 
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('/FakeData.json')
        .then(res=>res.json())
        .then(data=>setData(data));
    },[])
    return data;
}
export default UseFakeData;