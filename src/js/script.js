function displayTime() {
  let date = new Date()
  let hours = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  let timeDOM  = document.querySelector('.time')
  let meridiem = "AM"
  
  if (sec < 10 ) {
    sec = '0'+ sec
  }
  (min < 10 ? '0' + min : ' ' + min)
  if (hours > 12) {
    hours -= 12;
    meridiem = 'PM'
  } 
  if (hours === 0)  {
    hours = 12
  }
  timeDOM.innerHTML = hours +':'+ min +':'+ sec +' '+ meridiem

//DATE
  let day = date.getDate()
  let month = 1 + date.getMonth()
  let year = date.getFullYear()
  let dateDiv = document.querySelector('.date')

  dateDiv.innerHTML = month +' '+ day +', '+ year
};
setInterval(displayTime, 1000);



