const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form-container"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw-hide");


pwShowHide.forEach(icon => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if(getPwInput.type === "password"){
      getPwInput.type = "text";
      icon.classList.replace("fa-eye-slash", "fa-eye");
      }else{
        getPwInput.type = "password";
      icon.classList.replace("fa-eye", "fa-eye-slash");
      }
  })
})

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active")
})
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active")
})

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const payclose = document.querySelector(".payclose");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

payclose.addEventListener("click", () => {
  payment.style.display = "none";
});

