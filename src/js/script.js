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
function getData(){
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'text';
  //replace github with 
  xhr.open('GET', "https://api.wunderground.com/api/7c06c11b1ec1f632/forecast/geolookup/conditions/q/NY/New_York.json" );

  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);

    console.log(data)
    //renderHTML(data);
  }
  xhr.send();
};
getData();

