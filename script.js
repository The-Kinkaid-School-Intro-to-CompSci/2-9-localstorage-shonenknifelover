/** Part 1: helper functions start*/
function updateColor() {
    //getting the value of each slider
    const redSlider  = document.querySelector(`#red`)
    const red = redSlider.value;
    const greenSlider = document.querySelector(`#green`);
    const green = greenSlider.value;
    const blueSlider = document.querySelector(`#blue`);
    const blue = blueSlider.value;

    const body = document.querySelector(`body`);
    //changing the background color of the body using the values of the sliders
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function makeColorSlidersWork() {
    //getting the <input> elements (a.k.a sliders)
    const redSlider = document.querySelector(`#red`);
    const greenSlider = document.querySelector(`#green`);
    const blueSlider = document.querySelector(`#blue`);

    let sliders = [redSlider, greenSlider, blueSlider];
    //adding the same event listener to all sliders
    for(let slider of sliders) {
        slider.addEventListener(`input`, updateColor);
    }
}

function changeLogo() {
    //getting the <select> element
    const logoSelector = document.querySelector(`#logo-selector`);
    //getting it's value
    const logo = logoSelector.value;
    //getting the <img> element
    const logoImg = document.querySelector(`#logo`);
    //getting the image from the images folder
    logoImg.src = `./images/${logo}`;
}

function makeLogoSelectWork() {
    //getting the selector
    const logoSelector = document.querySelector(`#logo-selector`);
    //adding an event listener to it
    logoSelector.addEventListener(`change`, changeLogo);
}

function setTheUsersName() {

}
/** Part 1: Helper functions end */

/** Part 2: Getting the user location and ISS location */
/**
 * Function to get the ISS location
 */
async function fetchISSLocation() {

}

function writePeopleInSpace(data){

}

async function fetchPeopleInSpace() {

}

/** Functions to get the user location */
function locationSuccess(position) {
}

function locationError(err) {

}

function getUserLocation() {

}

/** Part 2: End */

function clearLocalStorage() {
    localStorage.clear();
    console.log(`Local storage cleared`);
    console.log(localStorage);
}
function makeLocalStorageWork() {
    let localStorageButton = document.querySelector(`#clear-local-storage`);
    localStorageButton.addEventListener(`click`, clearLocalStorage);
}

async function runProgram() {

    //the functions below make the interactive elements work
    makeLogoSelectWork();
    makeColorSlidersWork();
    makeLocalStorageWork();
}

document.addEventListener('DOMContentLoaded', runProgram);