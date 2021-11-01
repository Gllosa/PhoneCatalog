import { useEffect, useState } from "react";

export default function Request() {
    const url = "http://localhost:5000/phones"
    const [phones, setPhones] = useState()
    const fetchApi = async () => {
        const response = await fetch(url);
        
        const responseJson = await response.json();
        setPhones(responseJson);
    }
    useEffect(() => {
        fetchApi()
    }, []);
    
    return phones;
}
