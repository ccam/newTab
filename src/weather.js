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
  