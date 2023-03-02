function checkEmail(){
  //email
  let email = document.forms['myForm']['email'];
  if(email.value === ""){
    //alert("Must have email value");
    console.log('BLANK EMAIL');
    email.setCustomValidity("invalid");
    return false;
  }
  email.setCustomValidity("");
  console.log("TRUE")
  return true;
}
