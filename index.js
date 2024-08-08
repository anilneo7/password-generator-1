// this code is just for copying the password by clicking on copyIcon
document.addEventListener("DOMContentLoaded", function() {
    let copyIcon = document.getElementById("copy-icon");
    let passBox = document.getElementById("pass-box");

    copyIcon.addEventListener("click", function() {
        // Create a temporary input element
        let tempInput = document.createElement("input");
        tempInput.setAttribute("value", passBox.textContent);
        document.body.appendChild(tempInput);

        // Select the text inside the input element
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // For mobile devices

        // Copy the selected text
        document.execCommand("copy");

        // Remove the temporary input element
        document.body.removeChild(tempInput);

        // Provide some visual feedback to the user
        passBox.style.backgroundColor = "#6CB4EE"; // Change background color
        setTimeout(function() {
            passBox.style.backgroundColor = ""; // Reset background color
        }, 1000); // Reset after 1 second
    });
}); 
//remaining js for password generator
const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerset="abcdefghijklmnopqrstuvwxyz"
const numberset="0987654321"
const symbolset="!@#$%^&*()_+"
//selectors
const passBox=document.getElementById("pass-box")
const totalChar=document.getElementById("total-char")
const upperCase=document.getElementById("upper-case")
const lowerCase=document.getElementById("lower-case")
const numbers=document.getElementById("numbers")
const symbols=document.getElementById("symbols")

const getRandomData=(dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}

const generatePassword=(password="")=>{
    if(upperCase.checked){
        password+=getRandomData(upperset)
    }
    if(lowerCase.checked){
        password+=getRandomData(lowerset)
    }
    if(numbers.checked){
        password+=getRandomData(numberset)
    }
    if(symbols.checked){
        password+=getRandomData(symbolset)
    }
    //using recursion for increasing length of password
    if(password.length < totalChar.value){
        return generatePassword(password)
    }
    passBox.innerText=truncateStr(password,totalChar.value)
}
document.getElementById("btn").addEventListener("click",()=>{
    generatePassword()
})
function truncateStr(str,num){
    if(str.length > num){
        let subStr=str.substring(0,num)
        return subStr
    }
    else{
        return str
    }
}