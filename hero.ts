window.onload = () => {
    for(let a = 0; a < 4; a++){
        document.getElementById(`hero${a}`).onclick = function () {
            document.getElementById(`hero${a}`).style.backgroundColor = "yellow";
            for(let i = 0; i < 4; i++){
                if(i != a){
                    document.getElementById(`hero${i}`).style.backgroundColor = "white";
                }
            }
        }
    }
};