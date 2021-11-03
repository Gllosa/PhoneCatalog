import { useEffect, useState } from "react";

export default function HttpRequest() {
    const url = "http://localhost:5000/phones"
    const [phones, setPhones] = useState()
    const fetchApi = async () => {
        const response = await fetch(url);
        
        const responseJson = await response.json();
        responseJson.sort((a, b) => a.name.localeCompare(b.name))
        setPhones(responseJson);
    }
    useEffect(() => {
        fetchApi()
    }, []);
    
    return phones;
}
