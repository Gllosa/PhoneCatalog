import { useEffect, useState } from "react";

function ReadApi() {
    const url = "http://127.0.0.1:5000/phones"
    const [phones, setPhones] = useState()
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJson = await response.json()
        setPhones(responseJson)
    }
    useEffect(() => {
        fetchApi()
    }, []);
    return phones;
}

export default ReadApi;