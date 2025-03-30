
        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.5,
        });

        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll("img, iframe").forEach((element) => {
                element.setAttribute("loading", "lazy");
            });
        });
        document.addEventListener("DOMContentLoaded", function () {
            let lazyBackgrounds = document.querySelectorAll(".lazy-background");

            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.backgroundImage = `url(${entry.target.dataset.bg})`;
                        observer.unobserve(entry.target);
                    }
                });
            });

    lazyBackgrounds.forEach((bg) => observer.observe(bg));
});



        document.getElementById('menu-toggle').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
