const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
const forecast = new Forecast()
console.log(forecast)

const updateUI = (data) => {

    //destructure props
    const {cityDetails, weather} = data
    console.log('update the ui')
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `

    //update the day night images
    let timeImageUrl = null
    timeImageUrl = weather.IsDayTime ? 'images/day.svg' : 'images/night.svg'

    //remote d-none from the card
    if( card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
    time.setAttribute('src', timeImageUrl)
    const iconSrc = `images/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)
}


cityForm.addEventListener('submit', e => {
    e.preventDefault()
    const city = cityForm.city.value.trim().toLowerCase()
    cityForm.reset()

    //updat the ui with new city
    forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error.message))

    localStorage.setItem('city', city)

})

const city = localStorage.getItem('city')

if( city ){
    console.log('sorage city is ', city)
    forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error.message))

}