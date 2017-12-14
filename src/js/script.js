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
    if(theTest == true){
      window.location = 'http://'+ search.value

    } else if(search.value =='yt') {
      window.location = 'https://www.youtube.com/feed/subscriptions'

    } else if ( search.value == 'fb') {
      window.location = 'https://www.facebook.com/'

    } else {
      window.location = 'https://duckduckgo.com/?q=' + search.value
    }
   
  }
}