const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
var result = document.getElementById("result");

function isPalindrome(text) {
  if (text === "") {
    return false;
  }
  
  const regex = /[^a-zA-Z0-9]/g;
  const cleanText = text.replace(regex, '').toLowerCase();
  return recursivePalindromeChecker(cleanText)
}

const recursivePalindromeChecker = (text) => {
  var textArray = text.split('');
  if (textArray.length == 1) {
    return true;
  } else if (textArray.length === 2 && textArray[0] === textArray[1]) {
    return true;
  } else if (textArray.length > 2 && textArray[0] === textArray[textArray.length - 1]) {
    textArray.shift();
    textArray.pop();
    var shortenedText = textArray.join('');
    return recursivePalindromeChecker(shortenedText) ? true : false;
  } else {
    return false;
  }
}

checkBtn.addEventListener("click", (e) => { 
  e.preventDefault();
  if (textInput.value === "") {
    alert("Please input a value!");
  } else if (isPalindrome(textInput.value)) {
    result.innerHTML = `
    <p>${textInput.value} is a palindrome.</p>
    `
  } else {
    result.innerHTML = `
    <p>${textInput.value} is not a palindrome.</p>
    `
  }
});