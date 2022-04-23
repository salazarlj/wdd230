

//Getting date
const d = new Date() ;
const currentYears = document.querySelector('#currenYear');
currentYears.textContent = d.getFullYear();



const upateDates = document.querySelector('#updateDate');
currentTime = `  ${d.getHours()}:${d.getMinutes()}:${d.getMilliseconds()}`

const selection = {month:'long', day:'numeric', year:'numeric'};
upateDates.textContent = new Date().toLocaleDateString('en-US',selection) + currentTime;