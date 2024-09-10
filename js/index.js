"use strict";
(function () {
    const imagesSection = document.querySelector(".bg-img .images");
    const totalImages = imagesSection.childElementCount;
    const alignments = ["center", "center", "center", "center", "flex-start"];
    let currentImage = -1;
    function tick() {
        currentImage++;
        if (currentImage >= totalImages) {
            currentImage = 0;
        }
        imagesSection.style.alignItems = alignments[currentImage];
        imagesSection.style.transform = `translateX(-${currentImage * 100}%)`;
    }
    tick();
    setInterval(tick, 10000);
})();
