class Forecast{
    constructor(){
        this.key = '3JGMh8FJqoX6l1cmAFeh9ksEukmk6csC'
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cirtURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }
    async updateCity(city){
        console.log('update the city', city)
        const cityDetails = await this.getCity(city)
        const weather = await this.getWeather(cityDetails.Key)
    
        return { cityDetails, weather }
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`
        console.log(this.cirtURI+query)
        const response = await fetch(this.cirtURI+query)
        const data = await response.json()
        console.log(data)
    
        return data[0]    
    }

    async getWeather(cityID){
        const query = `${cityID}?apikey=${this.key}`
        const response = await fetch( this.weatherURI + query )
        const data = await response.json()
        console.log(data)
        return data[0]    
    }
}
