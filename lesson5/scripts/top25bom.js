const list = document.querySelector ('ul');
const input = document.querySelector ('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    if (input.value.length === 0){
        alert('You forgot to enter the chapter of the book');
    } else {
    let myItem = input.value;
        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement("button");

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = "❌";

        list.appendChild(listItem);

    input.value = "";
    listBtn.addEventListener("click", function (){
        list.removeChild(listItem);
    });
    }
    input.focus();
}
    
)

//Getting Current Year
const d = new Date();
document.querySelector("#currenYear").textContent = d.getFullYear();

const autorName = "Leonard J. Salazar";
document.querySelector("#author-name").textContent = autorName;


//Getting Current Time
const upateDates = document.querySelector("#updateDate");
currentTime = `  ${d.getHours()}:${d.getMinutes()}:${d.getMilliseconds()}`;

//Getting Current Date
const selection = { month: "long", day: "numeric", year: "numeric" };
upateDates.textContent =
  new Date().toLocaleDateString("en-US", selection) + currentTime;