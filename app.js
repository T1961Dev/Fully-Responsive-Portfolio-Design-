const icon = document.getElementById("icon");
const burger = document.getElementById("burger");

const burgerHome = document.getElementById("burgerHome");
const burgerSkills = document.getElementById("burgerSkills");
const burgerTestimonials = document.getElementById("burgerTestimonials");
const burgerPortfolio = document.getElementById("burgerPortfolio");
const burgercontactMe = document.getElementById("burgercontactMe");

var isActive = false;
icon.addEventListener("click", function(){
    if(isActive == false){
        burger.style.display = "block";
        isActive = true;
    } else{
        burger.style.display = "none";
        isActive = false;
    }

});
function contactClose(){
    location.href = "#contact";
    burger.style.display = "none";
    isActive = false;
}