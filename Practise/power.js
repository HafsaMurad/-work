const upper_set="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower_set="abcdefghijklmnopqrstuvwxyz"
const numbers="1234567890"
const symbols="!@#$%^&*()<>?[]{}\|?`~'"

const passBox=document.getElementById("pass_id")
const upperInput=document.getElementById("upper-case")
const lowerInput=document.getElementById("lower-case")
const numberInput=document.getElementById("numbers")
const symbolInput=document.getElementById("Symbols")
const totalChar=document.getElementById("total-char")

const get_random_data=(data_set)=>{
    return data_set[Math.floor(Math.random() * data_set.length)]
}

const generatePassword=(password="")=>{
    if(upperInput.checked){
        password += get_random_data(upper_set)
    }
    if(lowerInput.checked){
        password += get_random_data(lower_set)
    }
    if(numberInput.checked){
        password += get_random_data(numbers)
    }
    if(symbolInput.checked){
        password += get_random_data(symbols)
    }
   if(password.length<=totalChar.value)
   {
    return generatePassword(password)
   }
   passBox.innerText=truncateString(password, totalChar.value);
}
generatePassword();
document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword();
    }
)

function truncateString(str, num){
    if(str.length>num){
        let subStr= str.substring(0, num);
        return subStr;
    }
    else{
        return str;
    }
}

