// const portfolio = document.getElementById('link-portfolio');
const portfolio = document.querySelector('.links');  
// console.log(portfolio.innerHTML)
portfolio.addEventListener("mouseover", () => {
    // portfolio.innerHTML = `Under Construction 👷‍♂️`;
    portfolio.innerHTML = `<a id="link-portfolio" target="_blank" class="link"> Under Construction 👷‍♂️ </a>`
});

portfolio.addEventListener("mouseout", (e) => {
    // console.log(e);
    portfolio.innerHTML = `<a id="link-portfolio" target="_blank" class="link"> Portfolio <i class="fa fa-solid fa-user fa-lg"></i> </a>`;
});