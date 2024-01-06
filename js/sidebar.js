let navOptions = document.querySelector(".vb_bottom");
let listaOpsioneve = document.querySelector(".vb_bottom ul");
let sidebarIcon = document.querySelector(".vb_icon");

sidebarIcon.addEventListener("click", toggleSidebar)

window.addEventListener("resize", function() {
    if(this.innerWidth > 750) {
        navOptions.style.display = "flex";

        if(sidebarIcon.classList.contains("fa-close")) {
            listaOpsioneve.classList.toggle("vb_sidebar_mode");
            sidebarIcon.classList.toggle("fa-close");
            sidebarIcon.classList.toggle("fa-bars");
        }
        
    } else {
        navOptions.style.display = "none";
    }
})

function toggleSidebar() {
    sidebarIcon.classList.toggle("fa-bars");
    sidebarIcon.classList.toggle("fa-close");
    navOptions.style.display = (navOptions.style.display == "flex") ? "none" : "flex";
    listaOpsioneve.classList.toggle("vb_sidebar_mode");
}
