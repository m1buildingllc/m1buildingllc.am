const menu = document.getElementById("mainMenu");
const toggle = document.getElementById("menuToggle");
const overlay = document.getElementById("menuOverlay");

toggle.addEventListener("click",()=>{

menu.classList.toggle("active");
overlay.classList.toggle("active");

});

overlay.addEventListener("click",()=>{

menu.classList.remove("active");
overlay.classList.remove("active");

});

document.querySelectorAll("#mainMenu a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("active");
overlay.classList.remove("active");

});

});
