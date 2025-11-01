let menu = document.querySelector('.i');
const ulActive = document.querySelector('header nav ul');
const btn = document.querySelector('#hbtn');

menu.addEventListener('click', () => {
    ulActive.classList.toggle('active');
    const icon = menu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-x');

btn.style.display = (icon.classList.contains('fa-x')) ? 'flex' : 'none';
});


