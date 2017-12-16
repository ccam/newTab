function displayTime() {
  let theDate = new Date()
  let hours = theDate.getHours()
  let min = theDate.getMinutes()
  let sec = theDate.getSeconds()
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
  let day = theDate.getDate()
  let month = 1 + theDate.getMonth()
  let year = theDate.getFullYear()
  let dateDiv = document.querySelector('.date')

  dateDiv.innerHTML = month +' '+ day +', '+ year

  displayMilTime()
  displayNormalTime()
};
setInterval(displayTime, 1000);

//SEARCH
let search = document.querySelector('.search')
search.addEventListener('keyup', (event) => {
  sendSearchReq(event)
})

function sendSearchReq(event) {
  let regex = new RegExp(/^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9-_]{1,61}[a-zA-Z0-9]))\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{2,30}\.[a-zA-Z]{2,3})$/)

  let theTest = regex.test(search.value)

  if(event.keyCode == 13) {
    if(theTest == true) {
      window.location = 'http://' + search.value
    }
    
    switch(search.value){
      case 'yt':
        window.location = 'https://www.youtube.com/feed/subscriptions'
        break
      case 'fb': 
        window.location = 'https://www.facebook.com'
        break
      case 'git':
        window.location = 'https://github.com/'
        break
      case 'can':
        window.location = 'https://caniuse.com/'
        break
      case 'node':
        window.location = 'https://nodejs.org/en/docs/'
        break
      case 'express':
        window.location = 'https://expressjs.com/'
        break
      case 'mdn':
        window.location = 'https://developer.mozilla.org/en-US/'
        break
      case 'vue':
        window.location = 'https://vuejs.org/v2/api/'
        break
      case 'react':
        window.location = 'https://reactjs.org/docs/hello-world.html'
        break
      case 'jq':
        window.location = 'https://api.jquery.com/'
        break
      case 'npm':
        window.location = 'https://www.npmjs.com/'
        break
      case 'maps':
        window.location = 'https://www.google.com/maps/@40.8232987,-73.9418603,15z'
        break
      case 'net':
        window.location = 'https://www.netflix.com/browse'
        break
      case 'w':
        window.location = 'https://weather.com/'
        break
      case 'l80':
        window.location = 'http://localhost:8080/'
        break
      case 'l88':
        window.location = 'http://localhost:8080'
        break
      case 'l30':
        window.location = 'localhost:3000'
        break
      case 'mess':
        window.location = 'https://www.messenger.com'
        break
      default:
      window.location = 'https://searx.me/?q=' + search.value
    }
  }
}