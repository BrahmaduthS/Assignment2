
const showError = function (input, message) {
  
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.textContent = message;
};
const showSuccess = function (input) {
 
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  const error = formField.querySelector('small');
  error.textContent = '';
};

function mailval() {
  var emailid = document.getElementById("mail").value;
  let regex = /^([A-Za-z0-9\.-\_]+)@([A-Za-z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
  if (regex.test(emailid)) {
    showSuccess(mail)
    return true
  }
  else {
    showError(mail, "*Enter valid email id")
    return false
  }
}
function numval() {
  var pnum = document.getElementById("inputNumber").value;
  let regex = /^([0-9]{3})([-\s\.])?([0-9]{3})([-\s\.])?([0-9]{4,6})$/
  let regex1=/^([0-9]{10})$/
  let regex2=/^([0-9]{3})-([0-9]{3})-([0-9]{4})$/
  let regex3=/^([0-9]{3})\.([0-9]{3})\.([0-9]{4})$/
  let regex4=/^([0-9]{3})\s([0-9]{3})\s([0-9]{4})$/
  
  if (regex1.test(pnum)||regex2.test(pnum)||regex3.test(pnum)||regex4.test(pnum)) {
    showSuccess(inputNumber)
    return true
  }
  else {
    showError(inputNumber, "*Enter valid phone number")
    return false
  }
}

function passwordChanged() {
  var strength = document.getElementById('strength');
  var strongRegex = new RegExp("^(?=.{10,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
  var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
  var enoughRegex = new RegExp("(?=.{8,}).*", "g");
  var pwd = document.getElementById("pwd1");
  // var myInput = document.getElementById("pwd1");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
document.getElementById("message").style.display = "block";
pwd.onfocus = function() {
  document.getElementById("message").style.display = "block";
}
 
  if (strongRegex.test(pwd.value)) {
      strength.innerHTML = "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
  } else if (mediumRegex.test(pwd.value)) {
      strength.innerHTML = "<small class='progress-bar bg-warning' style='width: 66%'>Medium</small>";
  } else {
      strength.innerHTML = "<small class='progress-bar bg-danger' style='width: 33%'>Weak</small>";
  }
  lower();
  upper();
  leng();
  numb();


function lower(){
  var lowerCaseLetters = /[a-z]/g;
  if(pwd.value.match(lowerCaseLetters)){  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    return true
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    return false;
  }
}
  
  // Validate capital letters
  
  function upper(){
    var upperCaseLetters = /[A-Z]/g;
  if(pwd.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    return true;
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    return false;
  }
}

  // Validate numbers
  
  function numb(){
    var numbers = /[0-9]/g;
  if(pwd.value.match(numbers)) {  
    
    number.classList.remove("invalid");
    number.classList.add("valid");
    return true;
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    return false;
  }
}
  
  // Validate length
  function leng(){
  if(pwd.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    return true;
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    return false;
  }
}
if(leng()==false||upper()==false||lower()==false||numb()==false){
  showError(pwd1,)
  return false;
}
else{
  showSuccess(pwd1)
  return true;
}
}

function validate() {
  if ( mailval() == false || numval()==false||passwordChanged()==false ) {
    return false;
  }
  else {
    return true;
  }
}