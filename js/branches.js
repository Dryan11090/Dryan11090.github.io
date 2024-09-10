"use strict";
(function () {
    const collapseButtons = document.querySelectorAll(".collapse-btn");
    const infoDivs = document.querySelectorAll(".info");
    for (let i = 0; i < collapseButtons.length; i++) {
        const btn = collapseButtons[i];
        btn.addEventListener("click", () => {
            const list = infoDivs[i];
            if (list) {
                if (list.classList.contains("collapsed")) {
                    btn.textContent = "Collapse";
                    list.classList.remove("collapsed");
                }
                else {
                    btn.textContent = "Expand";
                    list.classList.add("collapsed");
                }
            }
        });
    }
})();
