const clock = document.querySelector(".clock");
const days = document.querySelectorAll(".day");
let now = new Date();

const today = now.toLocaleDateString("en-GB", {
    weekday:"short",
});

// set a right class for a day which is today

for(let i = 0; i < days.length; i++){
    if(days[i].innerHTML == today){
        days[i].setAttribute("class", "activeDay");
    } else if(days[i].innerHTML == today){
        days[i].setAttribute("class", "activeDay");
    } else if(days[i].innerHTML == today){
        days[i].setAttribute("class","activeDay");
    } else if(days[i].innerHTML == today){
        days[i].setAttribute("class", "activeDay");
    } else if(days[i].innerHTML == today){
        days[i].setAttribute("class", "activeDay");
    } else if(days[i].innerHTML == today){
        days[i].setAttribute("class","activeDay");
    } else if(days[i].innerHTML == today){
        days[i].setAttribute("class", "activeDay");
    }
}




// set time

function mytime() {
    let date = new Date();
    let time = date.toLocaleTimeString(undefined, {
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
    });
    clock.innerHTML = time;

    // refresh clock every one second

setInterval(mytime, 1000)
}


mytime();