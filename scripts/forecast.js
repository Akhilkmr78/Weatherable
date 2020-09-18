const key = "X7A7GRVB9vB79whlrFe8P84Tzxe8Ej7E";

//get weather info
const getWeather = async(id) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const resp = await fetch(base + query);
    const data = await resp.json();
    return data[0]
}


//get city info
const getCity = async (city) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
    
} 



