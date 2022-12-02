let submitbutton = document.querySelector("#submitbutton");
let fnameinputfield = document.querySelector("#firstname");
let lnameinputfield = document.querySelector("#lastname");
let emailinputfield = document.querySelector("#email");
let passwordinputfield = document.querySelector("#password");

let fnameerroricon = document.querySelector("#fnameerroricon");
let fnameerrortext = document.querySelector("#fnameerror");
let fnameinputcontainer = document.querySelector("#fnameinputcontainer");
let lnameerroricon = document.querySelector("#lnameerroricon");
let lnameerrortext = document.querySelector("#lnameerror");
let lnameinputcontainer = document.querySelector("#lnameinputcontainer");
let emailerroricon = document.querySelector("#emailerroricon");
let emailerrortext = document.querySelector("#emailerror");
let emailinputcontainer = document.querySelector("#emailinputcontainer");
let passworderroricon = document.querySelector("#passworderroricon");
let passworderrortext = document.querySelector("#passworderror");
let passwordinputcontainer = document.querySelector("#passwordinputcontainer");

let signupform = document.querySelector(".signupform");

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

submitbutton.addEventListener("click", function (event) {
  event.preventDefault();
  let fnameinputvalue = fnameinputfield.value;
  let lnameinputvalue = lnameinputfield.value;
  let emailinputvalue = emailinputfield.value;
  let passwordinputvalue = passwordinputfield.value;
  if (fnameinputvalue == "") {
    fnameerroricon.style.display = "inline";
    fnameerrortext.style.display = "block";
    fnameinputcontainer.classList.add("errorborder");
  }
  if (lnameinputvalue == "") {
    lnameerroricon.style.display = "inline";
    lnameerrortext.style.display = "block";
    lnameinputcontainer.classList.add("errorborder");
  }
  if (!validateEmail(emailinputvalue)) {
    emailerroricon.style.display = "inline";
    emailerrortext.style.display = "block";
    emailinputcontainer.classList.add("errorborder");
    emailinputfield.classList.add("falseinput");
  }
  if (passwordinputvalue == "") {
    passworderroricon.style.display = "inline";
    passworderrortext.style.display = "block";
    passwordinputcontainer.classList.add("errorborder");
  }
  if (fnameinputvalue !== "") {
    fnameerroricon.style.display = "none";
    fnameerrortext.style.display = "none";
    fnameinputcontainer.classList.remove("errorborder");
  }
  if (lnameinputvalue !== "") {
    lnameerroricon.style.display = "none";
    lnameerrortext.style.display = "none";
    lnameinputcontainer.classList.remove("errorborder");
  }
  if (validateEmail(emailinputvalue)) {
    emailerroricon.style.display = "none";
    emailerrortext.style.display = "none";
    emailinputcontainer.classList.remove("errorborder");
    emailinputfield.classList.remove("falseinput");
  }
  if (passwordinputvalue !== "") {
    passworderroricon.style.display = "none";
    passworderrortext.style.display = "none";
    passwordinputcontainer.classList.remove("errorborder");
  }
  if (fnameinputvalue !== "" && lnameinputvalue !== "" && validateEmail(emailinputvalue) && passwordinputvalue !== "") {
    signupform.innerHTML = "<h2>Thank you for signing up!</h2>"
  }
});
