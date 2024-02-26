import { selectionCheck } from './helpers/helper.js';

window.onload = () => {
    let selected: boolean = false;
    for(let a = 0; a < 4; a++){
        document.getElementById(`class${a}`).onclick = function () {
            selected = true;
            document.getElementById(`class${a}`).style.backgroundColor = "yellow";
            for(let i = 0; i < 4; i++){
                if(i != a){
                    document.getElementById(`class${i}`).style.backgroundColor = "white";
                }
            }
            sessionStorage.setItem("class", document.getElementById(`className${a}`).innerHTML.substring(0, document.getElementById(`className${a}`).innerHTML.length-1));
        }
    }

    document.getElementById(`myButton`).onclick = function () { selectionCheck(selected, `hero`, `Please select your hero!`) };

};