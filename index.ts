window.onload = () => {
    for(let a = 0; a < 4; a++){
        document.getElementById(`class${a}`).onclick = function () {
            document.getElementById(`class${a}`).style.backgroundColor = "yellow";
            for(let i = 0; i < 4; i++){
                if(i != a){
                    document.getElementById(`class${i}`).style.backgroundColor = "white";
                }
            }
            sessionStorage.setItem("class", document.getElementById(`className${a}`).innerHTML.substring(0,document.getElementById(`className${a}`).innerHTML.length-1));
        }
    }
    document.getElementById(`myButton`).onclick = function () {
        window.alert(`Your selected class is: ${sessionStorage.getItem("class")}`);
        location.href = '/hero.html';
    }
};