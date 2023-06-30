// Side Bar
const sideBar = document.querySelector('aside');
const x = document.querySelector('#x');

x.onclick = () => {
    sideBar.classList.toggle('hide');
};