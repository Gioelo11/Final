let burger = document.querySelector(".burger");
let xmark = document.querySelector(".xmark");
let lii = document.querySelector(".lii");

burger.addEventListener ("click", function(){
  lii.classList.add("show");
  burger.style.display = "none";
  xmark.style.display = "block";
})
 xmark.addEventListener ("click", function(){
    lii.classList.remove("show");
    burger.style.display = "block";
    xmark.style.display = "none";

 })