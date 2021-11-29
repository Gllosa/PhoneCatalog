const getPhone = async (id) => {
        const url = `http://localhost:5000/phones/${id}`
        const response = await fetch(url);
        const responseJson = await response.json();
        return responseJson;
}

export default getPhone;