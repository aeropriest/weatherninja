const key = '3JGMh8FJqoX6l1cmAFeh9ksEukmk6csC'
const getCity = async (city) => {
    const base = `http://dataservice.accuweather.com/locations/v1/cities/search`
    const query = `?apikey=${key}&q=${city}`
    console.log(base+query)
    const response = await fetch(base+query)
    const data = await response.json()
    console.log(data)

    return data[0]
}

getWeather = async (cityID) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${cityID}?apikey=${key}`
    const response = await fetch( base + query )
    const data = await response.json()
    console.log(data)
    return data[0]

}