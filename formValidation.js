//Please , don't remove the following code 
const maxWordLength = 10;
const minResults = 1;
const maxResults = 25;
const forbiddenWords = ["sex", "porn", "violence", "murder"];
let alertArr = ["","","","",""];
let alertMsg = "";
let a = ""; // is not in range
let b = ""; // has forbidden word
let c = ""; // has a word that is too long
let d = ""; // if searchbox is not empty

if (typeof window !== 'undefined') {
    window.onload = function() {
        //update the code that handles the form submit
        let button = document.querySelector("button");
        let searchBox = document.getElementById("q");
        let numBox = document.getElementById("num");
        button.onclick = formCheck;

        function formCheck(event){
            if (isInRange(numBox.value) === false){
                alertArr[0] = `*Please enter number ${minResults} to ${maxResults} to tell google how many search results we want`
                event.preventDefault();
                console.log(alertArr[0]);
                console.log(numBox.value);
            }
            if (hasForbidenWord(searchBox.value)){
                alertArr[1] = `*Please enter words other than ${forbiddenWords}`
                event.preventDefault();
                console.log(alertArr[1]);
                console.log(searchBox.value);
            }
            if (hasATooLongWord(searchBox.value)){
                alertArr[2] = `*Please enter words not longer then ${maxWordLength}`
                event.preventDefault();
                console.log(alertArr[2]);
                console.log(searchBox.value);
            }
            if (hasChar(searchBox.value) === false){
                alertArr[3] = '*Please enter only text '
                event.preventDefault();
                console.log(alertArr[4]);
                console.log(searchBox.value);
            }
            if (notOnlySpace(searchBox.value) === false){
                alertArr[3] = '*Please enter only text '
                event.preventDefault();
                console.log(alertArr[3]);
                console.log(searchBox.value);
            }
            for (let x in alertArr){
                if (alertArr[x] !== "" && alertArr[x] !== undefined){
                    alertMsg += alertArr[x] + "\r\n";
                }
            }
            if (isInRange(numBox.value) === false || hasForbidenWord(searchBox.value) || hasATooLongWord(searchBox.value) || hasChar(searchBox.value) === false || notOnlySpace(searchBox.value) === false) {
                alert(alertMsg);
            }
            alertArr = ["","","","",""];
            alertMsg = "";
        }
    }
}

//                              
//return a validation message in case the input is invalid

function validateQ(qValue) {
    let postfix = 'the search box';
    if (hasChar(qValue) && qValue.trim().length > 1) {
        if(isNumber(qValue))    
            return '*Please enter only text ' + postfix;
        else if (hasATooLongWord(qValue)) 
            return `*Please enter words not longer then ${maxWordLength} ${postfix}`;
        else if (hasForbidenWord(qValue)) 
            return `*Please enter words other then ${forbiddenWords} ${postfix}`;
    }
    else{
        return `*Please enter at least 2 characters ${postfix}`;
    }
    return null;
}
//return a validation message in case the input is invalid
function validateNum(numValue) {
    if (!isInRange(numValue))    
        return `*Please enter number ${minResults} to ${maxResults} to tell google how many search results we want`;    
    else{
        return null;
    }
}
//
function isInRange(text){
    if (text >= 1 && text <= 25){return true;}
    return false;
}
//
function hasForbidenWord(text) {
    // used RegExp to find a pattern in the text.
    if(/sex/.exec(text)){return true;}
    if(/murder/.exec(text)){return true;}
    if(/porn/.exec(text)){return true;}
    if(/violence/.exec(text)){return true;}
    return false;
}
// 
function hasATooLongWord(text) {
    // turned the text into an array, and checked each word's length.
    var textSplit = text.split(" ");
    for (i = 0; i < textSplit.length; i++){
        let wordSplit = textSplit[i];
        if (wordSplit.length >= 10) return true;
    }
    return false;
}
//
function hasChar(text) {
    // if (text === "" || text === undefined || text === " ") {return false;}
    if ( text === "" || text === undefined || text === " ") {return false;}
    else return true;
}
function notOnlySpace(text){
    if (!text.replace(/\s/g, '').length){return false}
    else return true;
}
//
function isNumber(text) {
    if (isNaN(text)){return false;}
    else return true;
    return false;
}
//Please , don't remove the following code 
if (typeof module !== 'undefined') {
    module.exports = {
        isInRange,
        hasChar,
        isNumber,
        hasForbidenWord,
        hasATooLongWord,
    };
}
