// select values
var hours=document.querySelector('.hour-value');
var minute=document.querySelector('.minute-value');
var second=document.querySelector('.second-value');
 


// clock

function  clock() {
    let date=new Date();
    let hour_value=date.getHours();
    let minutes_value=date.getMinutes();
    let seconds_value=date.getSeconds();

    hours.innerText=hour_value;
    minute.innerText=minutes_value;
    second.innerText=seconds_value;
  }

  setInterval(clock,1000);