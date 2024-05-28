console.log("We are connected ");
const genderSelectEl = document.getElementById("gender");
const startLetterEl = document.getElementById("firstLetter");
const orginEl = document.getElementById("orgin");
const imgEl = document.getElementById("test");
const boyImgEl = document.getElementById("image2");
const displayGirlNameEl = document.getElementById("displayName"); //need update to girl name function
const displayBoyNameEl = document.getElementById("displayBoyName");
const genderEl = document.getElementById("gender");

const boyNameArray = [
  "Noah",
  "Ethan",
  "Jacob",
  "Liam",
  "Logan",
  "Michael",
  "Matthew",
  "Jack",
  "Ryan",
  "Mason",
];
const girlNameArray = [
  "Emma",
  "Olivia",
  "Isabella",
  "Ava",
  "Sophia",
  "Emily",
  "Madison",
  "Mia",
  "Hannah",
  "Abigail",
];

// if (genderEl.innerText == "Boy") {

//   displayNames(boy);
// }

function diplayBoyNames() {
  boyImgEl.style.visibility = "hidden";
  for (const item of boyNameArray) {
    displayBoyNameEl.innerHTML = displayBoyNameEl.innerHTML + "<br>" + item;
  }
}

function displayGirlNames() {
  imgEl.style.visibility = "hidden";

  for (const item of girlNameArray) {
    displayGirlNameEl.innerHTML = displayGirlNameEl.innerHTML + "<br>" + item;
  }
}

function displayNames() {
  displayBoyNameEl.innerHTML = "";
  displayGirlNameEl.innerHTML = "";
  displayGirlNames;
  // alert("function is running ");
  // alert(genderEl.options[genderEl.selectedIndex].value);
  if (genderEl.value == "boy") {
    diplayBoyNames();
  } else if (genderEl.value == "girl") {
    displayGirlNames();
  } else if (genderEl.value == "All_gender") {
    displayBoyNameEl.innerHTML = "";
    diplayBoyNames();
    displayGirlNames();
  }
}

const Babyboy_eve = document.getElementById("boy_text");
Babyboy_eve.addEventListener("mouseover", boyTextFun);
function boyTextFun() {
  alert("boy text contents ");
}
