var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#input-btn");
var outputDiv = document.querySelector("#output-btn");


var serverUrl = "https://api.funtranslations.com/translate/chef.json"

function getTranslationURL(input) {
    return serverUrl + "?" + "text= " + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time.")
}
function clickHandler() {
    var inputText = txtInput.value  // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translateText = json.contents.translated;
            outputDiv.innerText = translateText
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)