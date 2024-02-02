"use strict";
window.onload = () => {
    for (let a = 0; a < 4; a++) {
        document.getElementById(`hero${a}`).onclick = function () {
            document.getElementById(`hero${a}`).style.backgroundColor = "yellow";
            for (let i = 0; i < 4; i++) {
                if (i != a) {
                    document.getElementById(`hero${i}`).style.backgroundColor = "white";
                }
            }
        };
        sessionStorage.setItem("hero", document.getElementById(`heroName${a}`).innerHTML.substring(0, document.getElementById(`heroName${a}`).innerHTML.length - 1));
    }
};
