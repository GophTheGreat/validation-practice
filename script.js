let phoneInput = document.querySelector("#phone");
let phone = window.intlTelInput(phoneInput, {
  initialCountry: "us",
  utilsScript: "./node_modules/intl-tel-input/build/js/utils.js"
});

function checkEmail(){
  let email = document.forms['myForm']['email'];
  const regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  if (regex.test(email.value)){
    email.setCustomValidity("");
    console.log(email.value);
    return true;
  }
  else{
    console.log(email.value);
    email.setCustomValidity("Please enter a valid email address");
    return false;
  }
}

function checkPhone(){
  console.log(phone);
  let val = phone.getNumber();


  console.log(val);
  const regex = new RegExp(/^\+(?:[0-9]●?){6,14}[0-9]$/);
  if(regex.test(val)){
    phoneInput.setCustomValidity("");
  }
  else{
    phoneInput.setCustomValidity("Please enter a valid phone number");
  }
}