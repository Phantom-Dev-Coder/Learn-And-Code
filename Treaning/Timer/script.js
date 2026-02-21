// Element of HTML
//Where to write
let header = document.getElementById("heading");
let hours = document.getElementById("hours");      //Hours
let minutes = document.getElementById("minutes");  //Minutes
let seconds = document.getElementById("seconds");  //Seconds

//Interactive buttons
let start = document.getElementById("start-btn");
let sto_p = document.getElementById("stop-btn");
let reset = document.getElementById("reset-btn");

// Internal values ​​for the application
let sec = 0;  //Seconds
let min = 0;  //Minutes
let hour = 0; //Hours

let myInterVale;

function addTo(){sec++};

function timer(){
    addTo();
    seconds.textContent = sec;
    minutes.textContent = min;
    hours.textContent = hour;
    if (sec == 60 ){
        sec = 0;
        min++;
        if(min == 60){
            min = 0;
            hour++;
        };
    };
};

function stopTimer(){
    clearInterval(myInterVale);
};

start.addEventListener("click",() => {myInterVale = setInterval(timer,1000);});
sto_p.addEventListener("click",stopTimer);
reset.addEventListener("click",()=>{sec=0; min=0; hour=0;});