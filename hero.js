window.onload = () => {
    const heroes = document.querySelectorAll('td img');
    const heroElements = Array.from(heroes).map(img => img.parentElement);

    const backgroundReset = () => {
        heroElements.forEach(el => {
            el.style.backgroundColor = "white";
        });
    }
    heroElements.forEach(hero => {
        hero.addEventListener('click', function() {
            backgroundReset();
            this.style.backgroundColor = "yellow"
        });
    });
 }


