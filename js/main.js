const menuBras = document.getElementById("menu-bars");
const action = document.getElementById("actions");

menuBras.addEventListener("click", () => {
    handleMenu();
});

function handleMenu() {
    menuBras.classList.toggle("is-active");
    action.classList.toggle("is-active");
}