const btnDOM = document.querySelector("#menu-btn");
const navDOM = document.querySelector("#menu");

btnDOM.addEventListener("click", () => {
    btnDOM.classList.toggle("open");
    navDOM.classList.toggle("flex");
    navDOM.classList.toggle("hidden");
})