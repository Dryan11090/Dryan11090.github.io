"use strict";
(function () {
    const collapseAllButton = document.querySelector(".collapse-all-btn");
    const expandAllButton = document.querySelector(".expand-all-btn");
    const collapseButtons = document.querySelectorAll(".collapse-btn");
    const lists = document.querySelectorAll(".list");
    collapseAllButton.addEventListener("click", () => {
        for (const list of lists) {
            list.classList.add("collapsed");
        }
        for (const btn of collapseButtons) {
            btn.textContent = "Expand";
        }
    });
    expandAllButton.addEventListener("click", () => {
        for (const list of lists) {
            list.classList.remove("collapsed");
        }
        for (const btn of collapseButtons) {
            btn.textContent = "Collapse";
        }
    });
    for (let i = 0; i < collapseButtons.length; i++) {
        const btn = collapseButtons[i];
        btn.addEventListener("click", () => {
            const list = lists[i];
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
