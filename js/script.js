const menuIcon =document.getElementById("menu-icon");
const menuList =document.getElementById("menu-list");
const popup1 =document.getElementById("popup-form1");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hide");
});

document.querySelector("#btn-show").addEventListener("click",function(){
    
    setTimeout(function () {
        document.querySelector(".popup-form").classList.add("active");
    }, 1000); 
});

document.querySelector(".popup-form .btn-back").addEventListener("click",function(){
    setTimeout(function () {
        document.querySelector(".popup-form").classList.remove("active");
    }, 500); 
});
document.querySelector("#btnnext").addEventListener("click",function(){
    setTimeout(function () {
         document.querySelector(".popup-form1").classList.add("active1");
         document.querySelector(".popup-form").classList.add("hidden");
    }, 500);
    
});
document.querySelector(".popup-form1 #btn2back").addEventListener("click",function(){
    setTimeout(function () {
        document.querySelector(".popup-form1").classList.remove("active1");
        document.querySelector(".popup-form").classList.remove("hidden");
   }, 500);
    
    
});
document.querySelector("#btn2next").addEventListener("click",function(){
    setTimeout(function () {
        document.querySelector(".allert-confirm").classList.add("active1");
        document.querySelector(".popup-form1").classList.add("hidden");
   }, 500);
   
});
document.querySelector(".allert-confirm #btn3back").addEventListener("click",function(){
    setTimeout(function () {
        document.querySelector(".allert-confirm").classList.remove("active1");
        document.querySelector(".popup-form1").classList.remove("hidden");
   }, 500);
    
    
});
document.querySelector("#btn3next").addEventListener("click",function(){
    setTimeout(function () {
        document.querySelector(".done-confirm").classList.add("active1");
        document.querySelector(".allert-confirm").classList.add("hidden");
   }, 3000);
    
});
document.querySelector("#done-btn").addEventListener("click",function(){
    document.querySelector(".done-confirm").classList.remove("active1");
    document.querySelector(".popup-form").classList.remove("hidden");
    document.querySelector(".popup-form").classList.remove("active");
    document.querySelector(".popup-form1").classList.remove("active1");
    document.querySelector(".popup-form1").classList.remove("hidden");
    document.querySelector(".allert-confirm").classList.remove("hidden");
    document.querySelector(".allert-confirm").classList.remove("active1");
    document.querySelector(".done-confirm").classList.remove("hidden");
});
var biggestCats = document.getElementById("car-names");
var carImage = document.getElementById("carImage");

biggestCats.onchange = function(){
    price.innerText = this.value[1];
    var selectedOption = this.options[this.selectedIndex];
    var optionValues = selectedOption.value.split(',');
    var imageSrc = selectedOption.getAttribute("data-image");
    // Mengupdate teks dengan nama mobil
    price.innerText = optionValues[1];
    carImage.src = imageSrc;
}

