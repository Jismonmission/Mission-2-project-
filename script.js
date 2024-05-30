console.log("We are connected ");
const genderSelectEl = document.getElementById("gender");
const startLetterEl = document.getElementById("firstLetter");
// const orginEl = document.getElementById("girlImg");
const girlImgEl = document.getElementById("girlImg");
const boyImgEl = document.getElementById("boyImg");
const displayGirlNameEl = document.getElementById("displayName"); //need update to girl name function
const displayBoyNameEl = document.getElementById("displayBoyName");
const genderEl = document.getElementById("gender");
const firstLetterEl = document.getElementById("firstLetter");
const endUserNamesEl = document.getElementById("endUserNames");

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
  "Zohan",
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
  "Sarah",
  "Zoya",
];
// if (genderEl.innerText == "Boy") {

//   displayNames(boy);
// }

//fucntion to display the boyNameArray array
function diplayBoyNames() {
  boyImgEl.style.opacity = 0.3;
  displayBoyNameEl.innerHTML = "";

  for (const item of boyNameArray) {
    displayBoyNameEl.innerHTML = displayBoyNameEl.innerHTML + "<br>" + item;
  }
}

//fucntion to display the girlNameArray array
function displayGirlNames() {
  girlImgEl.style.opacity = 0.3;

  displayGirlNameEl.innerHTML = "";

  for (const item of girlNameArray) {
    displayGirlNameEl.innerHTML = displayGirlNameEl.innerHTML + "<br>" + item;
  }
}

//display the boy and girl array as per teh selection boy,girl or all gender
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

//function which manage the names starting with specifi letter
function firstLetterFn() {
  displayBoyNameEl.innerHTML = "";
  displayGirlNameEl.innerHTML = "";

  if (firstLetterEl.value == "A-O") {
    const letters = /^[a-lA-L]/;
    boyImgEl.style.opacity = 0.3;
    girlImgEl.style.opacity = 0.3;
    const tempBoyArray = boyNameArray.filter((str) => letters.test(str));
    const tempGirlArray = girlNameArray.filter((str) => letters.test(str));
    displayfilteredArray(tempBoyArray, tempGirlArray);

    // for (const item of filteredBoyArray) {
    //   displayBoyNameEl.innerHTML = displayBoyNameEl.innerHTML + "<br>" + item;
    // }

    // displayBoyNameEl.innerHTML = boyNameArray.filter((str) =>
    //   letters.test(str)
    // );
    //   const filteredGirlArray = girlNameArray.filter((str) =>
    //     letters.test(str)
    // );
  } else if (firstLetterEl.value == "P-Z") {
    const letters = /^[p-zP-Z]/;
    boyImgEl.style.opacity = 0.3;
    girlImgEl.style.opacity = 0.3;
    const tempBoyArray = boyNameArray.filter((str) => letters.test(str));
    const tempGirlArray = girlNameArray.filter((str) => letters.test(str));
    displayfilteredArray(tempBoyArray, tempGirlArray);
  } else {
    diplayBoyNames();
    displayGirlNames();
  }
}

//display filtered array of boy and girl as per the selection
function displayfilteredArray(FilteredBoyArray, FilteredGirlArray) {
  console.log("reached second stage ");
  for (const item of FilteredBoyArray) {
    displayBoyNameEl.innerHTML = displayBoyNameEl.innerHTML + "<br>" + item;
  }
  for (const item of FilteredGirlArray) {
    displayGirlNameEl.innerHTML = displayGirlNameEl.innerHTML + "<br>" + item;
  }
}

//Allows to push new boy or girl name to the array
function addNamefn(gender) {
  console.log("function is working ");
  endUserNamesEl.innerHTML = "";

  if (gender == "boy") {
    boyNameArray.push(endUserNamesEl.value);
    alert(
      `Thanks for adding ${endUserNamesEl.value} to our boy baby name list`
    );
    diplayBoyNames();
  } else {
    girlNameArray.push(endUserNamesEl.value);
    displayGirlNames();
    alert(
      `Thanks for adding ${endUserNamesEl.value} to our girl baby name list`
    );
  }
}

// const Babyboy_eve = document.getElementById("boy_text");
// Babyboy_eve.addEventListener("mouseover", boyTextFun);
// function boyTextFun() {}
