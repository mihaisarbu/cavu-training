"use strict";
let stats;
let charClass;
fetch('data/globals.json').then(response => response.json()).then(jsonData => {
    stats = jsonData.stats;
    charClass = jsonData.class;
});
window.onload = () => {
    for (let stat of stats) {
        sessionStorage.setItem(stat, "10");
    }
    for (let i = 0; i < 6; i++) {
        document.getElementById(`stat${i}-`).onclick = function () {
            if (parseInt(sessionStorage.getItem(stats[i])) > 10) {
                const newValue = `${parseInt(sessionStorage.getItem(stats[i])) - 1}`;
                sessionStorage.setItem(stats[i], newValue);
                document.getElementById(`stat${i}`).innerHTML = newValue;
                document.getElementById(`points`).innerHTML = `${parseInt(document.getElementById(`points`).innerHTML) + 1}`;
            }
            else {
                window.alert(`You cannont reduce ${stats[i]} under 10`);
            }
        };
        document.getElementById(`stat${i}+`).onclick = function () {
            if (parseInt(document.getElementById(`points`).innerHTML) > 0) {
                const newValue = `${parseInt(sessionStorage.getItem(stats[i])) + 1}`;
                sessionStorage.setItem(stats[i], newValue);
                document.getElementById(`stat${i}`).innerHTML = newValue;
                document.getElementById(`points`).innerHTML = `${parseInt(document.getElementById(`points`).innerHTML) - 1}`;
            }
            else {
                window.alert(`You have no more points to allocate`);
            }
        };
    }
    switch (sessionStorage.getItem("class")) {
        case "Barbarian":
            {
                document.getElementById("class").src = "https://www.dndbeyond.com/avatars/thumbnails/6/342/420/618/636272680339895080.png";
                break;
            }
            ;
        case "Cleric":
            {
                document.getElementById("class").src = "https://www.dndbeyond.com/avatars/thumbnails/6/371/420/618/636272706155064423.png";
                break;
            }
            ;
        case "Rogue":
            {
                document.getElementById("class").src = "https://www.dndbeyond.com/avatars/thumbnails/6/384/420/618/636272820319276620.png";
                break;
            }
            ;
        case "Sorcerer":
            {
                document.getElementById("class").src = "https://www.dndbeyond.com/avatars/thumbnails/6/485/420/618/636274643818663058.png";
                break;
            }
            ;
    }
    switch (sessionStorage.getItem("hero")) {
        case "Makima": {
            document.getElementById("hero").src = "https://static.wikia.nocookie.net/chainsaw-man/images/d/d9/Makima_anime_design_2.png";
            break;
        }
        case "Eren": {
            document.getElementById("hero").src = "https://static.wikia.nocookie.net/shingekinokyojin/images/3/36/Eren_854_Current_Appearance.png";
            break;
        }
        case "Alucard": {
            document.getElementById("hero").src = "https://static.wikia.nocookie.net/characterprofile/images/5/5e/Alucard_Hellsing.png";
            break;
        }
        case "Revy": {
            document.getElementById("hero").src = "https://static.wikia.nocookie.net/villains/images/4/44/Revy_Full.png";
            break;
        }
    }
    document.getElementById(`myButton3`).onclick = function () {
        if (parseInt(document.getElementById(`points`).innerHTML) > 0) {
            window.alert(`You still have to assign ${document.getElementById(`points`).innerHTML} points`);
        }
        else {
            location.href = '/ability.html';
        }
    };
};
