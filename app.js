var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var closePopUpBtn = document.querySelector("#pop-up-close");
var serverUrl = "https://api.funtranslations.com/translate/shakespeare.json";
// var serverUrl = "https://api.funtranslations.com/translate/min";

function constructUrl(text) {
    return `${serverUrl}?text=${text}`;
}

function errorHandler(error) {
    console.log("error occured", error);
    document.querySelector("#pop-up-message").innerText = "somethhing wrong with the server! try again after some time.";
    document.querySelector(".pop-up").style.display = "block";
}

function closePopUp() {
    document.querySelector("#pop-up-message").innerText = null;
    document.querySelector(".pop-up").style.display = "none";
}

function clickEventHandler() {
    fetch(constructUrl(txtInput.value)).then(response => response.json()).then(json => {
        outputDiv.innerText = json.contents.translated;
    }).catch(errorHandler);
}
btnTranslate.addEventListener("click", clickEventHandler);
closePopUpBtn.addEventListener("click", closePopUp);