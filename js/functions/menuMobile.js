export default function menuMobile() {
    const menu = document.querySelector('.menuMobile__btn');
    const nav = document.querySelector('.menuMobile__navLinks');
    const menuLinks = document.querySelectorAll('header ul a[href^="#"]');
    nav.style.display = 'none';

    menu.addEventListener('click', openMenu);
    menuLinks.forEach(link => link.addEventListener('click', openMenu));

    function openMenu() {
        nav.style.display = 'block';
        setTimeout(() => {
            if(nav.classList.contains('menuMobile--show')){
                nav.classList.remove('menuMobile--show');
                setTimeout(() => nav.style.display = 'none', 100);
            }else {
                nav.classList.add('menuMobile--show');
            }
        } , 100);
    }

}