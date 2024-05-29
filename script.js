console.log("We are connected ");
const genderSelectEl = document.getElementById("gender");
const startLetterEl = document.getElementById("firstLetter");
const orginEl = document.getElementById("girlImg");
const girlImgEl = document.getElementById("girlImg");
const boyImgEl = document.getElementById("image2");
const displayGirlNameEl = document.getElementById("displayName"); //need update to girl name function
const displayBoyNameEl = document.getElementById("displayBoyName");
const genderEl = document.getElementById("gender");
const firstLetterEl = document.getElementById("firstLetter");

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
const filteredBoysArray = [];

// if (genderEl.innerText == "Boy") {

//   displayNames(boy);
// }

function diplayBoyNames() {
  boyImgEl.style.opacity = 0.3;

  for (const item of boyNameArray) {
    displayBoyNameEl.innerHTML = displayBoyNameEl.innerHTML + "<br>" + item;
  }
}

function displayGirlNames() {
  girlImgEl.style.opacity = 0.3;

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
    girlImgEl.style.opacity = 1;
  } else if (genderEl.value == "girl") {
    displayGirlNames();
    boyImgEl.style.opacity = 1;
  } else if (genderEl.value == "All_gender") {
    displayBoyNameEl.innerHTML = "";
    diplayBoyNames();
    displayGirlNames();
  }
}

function firstLetterFn() {
  displayBoyNameEl.innerHTML = "";
  displayGirlNameEl.innerHTML = "";
  if (firstLetterEl.value == "A-O") {
    const letters = /^[a-lA-L]/;
    boyImgEl.style.opacity = 0.3;
    girlImgEl.style.opacity = 0.3;
    displayBoyNameEl.innerHTML = boyNameArray.filter((str) =>
      letters.test(str)
    );
    displayGirlNameEl.innerHTML = girlNameArray.filter((str) =>
      letters.test(str)
    );
  } else if (firstLetterEl.value == "P-Z") {
    const letters = /^[p-zP-Z]/;
    boyImgEl.style.opacity = 0.3;
    girlImgEl.style.opacity = 0.3;
    displayBoyNameEl.innerHTML = boyNameArray.filter((str) =>
      letters.test(str)
    );
    displayGirlNameEl.innerHTML = girlNameArray.filter((str) =>
      letters.test(str)
    );
  } else {
    diplayBoyNames();
    displayGirlNames();
  }
}

const Babyboy_eve = document.getElementById("boy_text");
Babyboy_eve.addEventListener("mouseover", boyTextFun);
function boyTextFun() {
  alert("boy text contents ");
}
