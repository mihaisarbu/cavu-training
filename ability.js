import { selectionCheck } from './helpers/helper.js';
let startAbilities;
fetch('data/abilities.json').then(response => response.json()).then(jsonData => { startAbilities = jsonData.start; });
window.onload = () => {
    let selected = false;
    for (let a = 0; a < 4; a++) {
        document.getElementById(`abilityName${a}`).innerHTML = startAbilities[a].name;
        document.getElementById(`img${a}`).src = startAbilities[a].imagePath;
        document.getElementById(`description${a}`).innerHTML = startAbilities[a].description;
        document.getElementById(`range${a}`).innerHTML = startAbilities[a].range.toString();
        document.getElementById(`modifier${a}`).innerHTML = startAbilities[a].modifier;
        document.getElementById(`ability${a}`).onclick = function () {
            selected = true;
            document.getElementById(`ability${a}`).style.backgroundColor = "yellow";
            for (let i = 0; i < 4; i++) {
                if (i != a) {
                    document.getElementById(`ability${i}`).style.backgroundColor = "white";
                }
            }
        };
    }
    document.getElementById(`myButton4`).onclick = function () { selectionCheck(selected, `menu`, `Please select your starting ability!`); };
};
