export const initScrollLinks = (): void => {
    const links = document.querySelectorAll<HTMLAnchorElement>(".scroll-link");

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            if (!targetId) return;

            const header = document.querySelector(".header");
            const headerHeight = header?.clientHeight || 0;

            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                const offset = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight - 1;
                window.scrollTo({
                    top: offset,
                    behavior: "smooth",
                });
            }

            document.querySelector(".popup-menu-mobile")?.classList.remove("show");
            document.querySelector(".overlay-popup")?.classList.remove("show");
        });
    });

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const header = document.querySelector(".header");
        const headerHeight = header?.clientHeight || 0;

        links.forEach((link) => {
            const targetId = link.getAttribute("href");
            if (!targetId) return;

            const section = document.querySelector<HTMLElement>(targetId);
            if (!section) return;

            const sectionTop = section.offsetTop - headerHeight - 2;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
};
