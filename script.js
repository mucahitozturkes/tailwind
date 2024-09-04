const hideButton = document.querySelector("#open-menu")
const sideMenu = document.querySelector("#sidebar")


hideButton.addEventListener("click", function(){
    sideMenu.classList.toggle("dn")
});