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
function renderWeather(data) {
  let cTemp = document.querySelector('.cTemp')
  let cWind = document.querySelector('.cWind')
  let cRain = document.querySelector('.cRain')
  let theData = data.current_observation;
  let cBG = document.querySelector('.current')
  let weatherBG = theData.icon //theData.icon

  console.log(weatherBG)

// finish this out refer: https://api.wunderground.com/weather/api/d/docs?d=resources/phrase-glossary&MR=1


  switch(weatherBG) {
    case 'cloudy' :
      cBG.style.backgroundImage = "url('./img/cloudy.gif')"
      break
    case 'mostlycloudy':
      cBG.style.backgroundImage = "url('./img/cloudy.gif')"
      break
    case 'clear' || 'mostlysunny' || 'sunny':
      cBG.style.backgroundImage = "url('./img/sunny.gif')"
      break
    default: 
      cBG.style.backgroundImage = "url('../img/sunny.gif')"
      console.log(';laksdjf')
  }


//ask reddit about switch vs if() in this situation.





  cTemp.append(theData.temp_f + 'F')
  cWind.append('Wind: ' + theData.wind_mph + 'MPH')
  cRain.append('Precipitation: ' + theData.precip_today_in + 'in.')
}

function renderForecast(data) {
  let theData = data.forecast
  let card = document.querySelector('.card')
  let img = document.createElement('img')
  img.src = theData.simpleforecast.forecastday[0].icon_url

  card.appendChild(img)
  
  console.log(theData)
}

function getWeather(){
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'text';
  //replace github with 
  xhr.open('GET', "https://api.wunderground.com/api/7c06c11b1ec1f632/forecast/geolookup/conditions/q/NY/New_York.json" );

  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);

    console.log(data)
    renderWeather(data)
    renderForecast(data)
  }
  xhr.send();
};
getWeather();

