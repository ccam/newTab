function displayTime() {
  let date = new Date()
  let hours = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  let timeDOM  = document.querySelector('.time')
  let milTimeDOM = document.querySelector('.milTime')
  let meridiem = "AM";
  
  function displayNormalTime() {
    (sec < 10) ? sec ='0'+sec : sec; 
    (min < 10) ? min = '0' + min :  min;
    (hours === 0) ? hours = 12 : '';

    if (hours > 12) {
      hours -= 12;
      meridiem = 'PM'
    } 
    timeDOM.innerHTML = hours +':'+ min +':'+ sec +' '+ meridiem

  } 

  function displayMilTime() {
    (sec < 10) ? sec ='0'+sec : sec; 
    milTimeDOM.innerHTML = hours +':'+ min +':'+ sec; 
  }
//DATE
  let day = date.getDate()
  let month = 1 + date.getMonth()
  let year = date.getFullYear()
  let dateDiv = document.querySelector('.date')

  dateDiv.innerHTML = month +' '+ day +', '+ year

  displayMilTime()
  displayNormalTime()
};
setInterval(displayTime, 1000);

// NOTES
let noteBtn = document.querySelector('.noteBtn')
noteBtn.addEventListener('click', () => {
  console.log('hello')
})


// WEATHER
function checkWeather(weatherBG, cBG) {

  switch(weatherBG){
    case 'cloudy':
      cBG.style.backgroundImage = "url('./img/cloudy.gif')"
      break
    case 'mostlycloudy':
      cBG.style.backgroundImage = "url('./img/cloudy.gif')"
      break
    case 'partlycloudy':
      cBG.style.backgroundImage = "url('./img/cloudy.gif')"
      break
    case 'sunny':
      cBG.style.backgroundImage = "url('./img/sunny.gif')"
      break
    case 'mostlysuunny':
      cBG.style.backgroundImage = "url('./img/sunny.gif')"
      break
    case 'clear': 
      cBG.style.backgroundImage = "url('./img/sunny.gif')"
      break
    case 'snow':
      cBG.style.backgroundImage = "url('./img/snow.gif')"
      break
    case 'flurries':
      cBG.style.backgroundImage = "url('./img/snow.gif')"
      break
    case 'chancesnow':
      cBG.style.backgroundImage = "url('./img/snow.gif')"
      break
    case 'chanceflurries':
      cBG.styel.backgroundImage = "url('./img/snow.gif')"
      break
    case 'chancetstorms':
      cBG.style.backgroundImage = "url('./img/thunder.gif')"
      break
    case 'tstorms':
      cBG.style.backgroundImage = "url('./img/thunder.gif')"
      break 
    case 'chancerain':
      cBG.style.backgroundImage = "url('./img/rain.gif')"
      break
    case 'rain': 
      cBG.style.backgroundImage = "url('./img/rain.gif')"
      break
    case 'fog':
      cBG.style.backgroundImage = "url('./img/fog.gif')"
      break
    case 'hazy':
      cBG.style.backgroundImage = "url('./img/fog.gif')"
      break
    default: 
      console.log('No background image!!!')
  }
}

// function renderWeather(data) {
//   let cTemp = document.querySelector('.cTemp')
//   let cWind = document.querySelector('.cWind')
//   let cRain = document.querySelector('.cRain')
//   let theData = data.current_observation;
//   let cBG = document.querySelector('.current')
//   let weatherBG = theData.icon //theData.icon
//   checkWeather(weatherBG, cBG)
  

//   cTemp.append(theData.temp_f + 'F')
//   cWind.append('Wind: ' + theData.wind_mph + 'MPH')
//   cRain.append('Precipitation: ' + theData.precip_today_in + 'in.')
// }

function renderForecast(data) {
  let theData = data.forecast
  let forecast = document.querySelector('.forecast')
  let cBG = document.querySelector('.fcard')

  // let weatherBG = data.forecast.simpleforecast.forecastday[0].icon
  // checkWeather(weatherBG, cBG)
  // cBG.append('hello')
  
  for(let i = 0; i < 3; i++) {
    let cBG = document.querySelector('.fcard')
    let weatherBG = data.forecast.simpleforecast.forecastday[i].icon
    forecast.appendChild(cBG)
    //checkWeather(weatherBG, cBG)
    
  }
}

function getWeather(){
  var xhr = new XMLHttpRequest()
  xhr.responseType = 'text'
  //replace github with 
  xhr.open('GET', "https://api.wunderground.com/api/7c06c11b1ec1f632/forecast/geolookup/conditions/q/NY/New_York.json" )

  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText)

    renderWeather(data)
    renderForecast(data)
  }
  xhr.send()
};
getWeather()
