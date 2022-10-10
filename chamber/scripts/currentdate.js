const projectName = "Nahuatl Travel";
const companyName = "Chinandega Chamber"
const companyAdrees = "AVE 140, first street, Nicaragua"
const companyEmail = "information@travelchamber.com"
const companyPhone = "+(505) 2380-0538"

const autorName = "Leonard J. Salazar";
const courseName ="WDD230 Project - 2022"

/*HEADINGS */
document.querySelector("#project").textContent = projectName;
document.querySelector("#company").textContent = companyName;

/*FOOTER */
document.querySelector("#project-f").textContent = projectName;
document.querySelector("#address").textContent = companyAdrees;
document.querySelector("#mail").textContent = companyEmail;
document.querySelector("#phone").textContent = companyPhone;

var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
var prnDt = 'Today is:' + new Date().toLocaleTimeString('en-us', options);
document.querySelector("#current-date").textContent = prnDt;

//Getting Current Year
const d = new Date();
const currentYears = document.querySelector("#currenYear");
currentYears.textContent = d.getFullYear();

//Getting Current Time
const upateDates = document.querySelector("#updateDate");
currentTime = `  ${d.getHours()}:${d.getMinutes()}:${d.getMilliseconds()}`;

document.querySelector("#project-f2").textContent = projectName;
document.querySelector("#name-author").textContent = autorName;
document.querySelector("#course").textContent = courseName;

//Getting Current Date
const selection = { month: "long", day: "numeric", year: "numeric" };
upateDates.textContent =
  new Date().toLocaleDateString("en-US", selection) + currentTime;
