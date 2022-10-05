
const projectName = "Tourism of the Chinandega Chamber";
const autorCountry = "SITE PLAN";
const autorName = "Leonard J. Salazar";
const countryAuthor = "Nicaragua";

/*alert(projectName);
alert(autorCountry);*/

//Getting Informations
document.querySelector("#project-name").textContent = projectName;
document.querySelector("#title-name").textContent = autorCountry;
document.querySelector("#author-name").textContent = autorName;

//Getting Current Year
const d = new Date();
document.querySelector("#currenYear").textContent = d.getFullYear();

//Getting Author Country
document.querySelector("#author-name2").textContent = autorName;
document.querySelector("#country").textContent = countryAuthor;

//Getting Current Time
const upateDates = document.querySelector("#updateDate");
currentTime = `  ${d.getHours()}:${d.getMinutes()}:${d.getMilliseconds()}`;

//Getting Current Date
const selection = { month: "long", day: "numeric", year: "numeric" };
upateDates.textContent =
  new Date().toLocaleDateString("en-US", selection) + currentTime;
