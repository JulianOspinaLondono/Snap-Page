const featuresMenu = document.querySelector('.featuresMenu');
const containerMenu = document.querySelector('.container');
const companyMenu = document.querySelector('.companyMenu');
const company = document.querySelector('.company');

featuresMenu.addEventListener('click', toggleContainerMenu);
companyMenu.addEventListener('click', toggleCompany);

function toggleContainerMenu() {
    containerMenu.classList.toggle('inactive');
}
function toggleCompany() {
    company.classList.toggle('inactive');
}