const getPhones = async () => {
    const url = "http://localhost:5000/phones"
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
}

export default getPhones;
