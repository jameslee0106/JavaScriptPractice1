let today = new Date();
let day = today.getDay();
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let time = today.getHours() + ":" + today.getMinutes();

console.log("today is: " + daylist[day]); 
console.log("current time is: " + time);

