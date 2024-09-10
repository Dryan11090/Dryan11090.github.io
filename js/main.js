"use strict";
(function () {
    const nav = document.querySelector("nav.mobile");
    const openNavBtn = document.querySelector("#openNavBtn");
    const closeNavBtn = document.querySelector("#closeNavBtn");
    const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
    function openMobileNav() {
        nav.classList.add("open");
        document.body.classList.add("no-scroll");
    }
    function closeMobileNav() {
        nav.classList.remove("open");
        document.body.classList.remove("no-scroll");
    }
    openNavBtn.addEventListener("click", openMobileNav);
    closeNavBtn.addEventListener("click", closeMobileNav);
    document.addEventListener("swiped-right", openMobileNav);
    document.addEventListener("swiped-left", closeMobileNav);
    scrollToTopBtn.addEventListener("click", () => {
        document.body.scrollTo(0, 0);
        document.body.scrollTop = 0;
        window.location.hash = "";
    });
    document.body.addEventListener("scroll", () => {
        if (document.body.scrollTop > window.innerHeight) {
            scrollToTopBtn.classList.remove("hidden");
        }
        else {
            scrollToTopBtn.classList.add("hidden");
        }
    });
    document.querySelector("#currentYear").textContent = new Date().getFullYear().toString();
})();
