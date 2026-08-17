const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    if(navbar.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else{
        menuBtn.innerHTML = '<i class = "fa-solid fa-bars"></i>';
    }
});