//clock code start here
setInterval(() => {
    date = new Date();
let hours = date.getHours();
let message1 = document.getElementById("hours");
message1.textContent= hours;


let minites = date.getMinutes();
let message2 = document.getElementById("minites");
message2.textContent= minites;

let seconds = date.getSeconds();
let message3 = document.getElementById("seconds");
message3.textContent= seconds;
}, 1000);




