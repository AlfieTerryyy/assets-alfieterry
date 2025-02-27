document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');
    const header = document.querySelector('.header');

    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });

    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollTop = Math.max(scrollTop, 0);
    });
});
