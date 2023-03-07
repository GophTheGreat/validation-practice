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

function checkZip(){
  let zip = document.forms['myForm']['zip'];
  const regex = new RegExp(/^\d{5}(?:[-\s]\d{4})?$/);
  if(regex.test(zip.value)){
    zip.setCustomValidity("");
    console.log(zip.value);
    return true;
  }
  else{
    console.log(zip.value);
    zip.setCustomValidity("Please enter a valid zip code");
    return false;
  }
}

function checkPassword(){
  let pass1 = document.forms['myForm']['pass1'];
  let pass2 = document.forms['myForm']['pass2'];

  const regex = new RegExp(/(.){8,}\w+/);

  if(regex.test(pass1.value) && pass1.value === pass2.value){
    pass1.setCustomValidity("");
    pass2.setCustomValidity("");
    console.log(pass1.value);
    return true;
  }
  else if(pass1.value != pass2.value){
    pass1.setCustomValidity("Passwords must match");
    pass2.setCustomValidity("Passwords must match");
    console.log("Passwords must match");
    console.log(`Pass1 = ${pass1.value}`);
    console.log(`Pass2 = ${pass2.value}`);
    return false;
  }
  else{
    pass1.setCustomValidity("Please enter a valid password of at least 8 characters");
    pass2.setCustomValidity("Please enter a valid password of at least 8 characters");
    console.log("Password too short");
    console.log(`Pass1 = ${pass1.value}`);
    console.log(`Pass2 = ${pass2.value}`);
    return false;
  }
}

function checkAll(){
  checkEmail();
  checkPhone();
  checkZip();
  checkPassword();
}

checkAll()