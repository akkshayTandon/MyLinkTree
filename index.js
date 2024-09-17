// const portfolio = document.getElementById('link-portfolio');
// const portfolio = document.querySelector('.links');
// // console.log(portfolio)
// portfolio.addEventListener("mouseover", () => {
//     // portfolio.innerHTML = `Under Construction 👷‍♂️`;
//     portfolio.innerHTML = `<a id="link-portfolio" target="_blank" class="link"> Under Construction 👷‍♂️ </a>`
// });

// portfolio.addEventListener("mouseout", (e) => {
//     // console.log(e);
//     portfolio.innerHTML = `<a id="link-portfolio" target="_blank" class="link"> Portfolio <i class="fa fa-solid fa-user fa-lg"></i> </a>`;
// });

/* Sidebar Opening and Closing */
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-btn");
const cancelBtn = document.getElementById("cancel-btn");
const projectBtn = document.querySelectorAll('.links')[0];

const header = document.getElementById("header");
const linkContainer = document.getElementById("link-container");

menuBtn.addEventListener("click", () => {
    menuBtn.style.display = "none";
    header.style.filter = "blur(20px)";
    linkContainer.style.filter = "blur(20px)";
    sidebar.classList.add("open");
});

projectBtn.addEventListener("click", () => {
    menuBtn.style.display = "none";
    header.style.filter = "blur(20px)";
    linkContainer.style.filter = "blur(20px)";
    sidebar.classList.add("open");
});

cancelBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    menuBtn.style.display = "flex";
    header.style.filter = "none";
    linkContainer.style.filter = "none";
});
