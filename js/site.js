// get user input
function getValue() {

    //make the alert invisible
    document.getElementById("alert").classList.add("invisible");

    //get input string from user
    let inputString = document.getElementById("inputString").value;

    //normalize input string
    inputString = normalize(inputString);
    
    //check for palindrome
    let returnObj = checkForPalindrome(inputString);

    //display the message in alert box
    displayResult(returnObj);

}

// removes whitespaces and special characters from the string
function normalize(userString) {

    return userString
        .replace(/\s+/g, '')
        .replace(/[^a-zA-Z ]/g, "")
        .toLowerCase();
}


// check if string is a palindrome
function checkForPalindrome(userString) {

    let revString = [];
    let returnObj = {};


    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }

    if (revString == userString) {
        returnObj.msg = "Well done! You entered a Palindrome!"
    } else {
        returnObj.msg = "Sorry! You did not enter a palindrome!"
    }

    returnObj.reversed = revString;

    return returnObj;
}

// display a message to the string
function displayResult(returnObj) {

    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("alertHeading").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = returnObj.reversed;
}