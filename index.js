window.onload = () => {

   for( let a = 0; a < 4; a++) {
   document.getElementById(`class${a}`).onclick = function () {
      document.getElementById(`class${a}`).style.backgroundColor = "yellow";
         for(let i = 0; i < 4; i++) {
            if(i != a) {
               document.getElementById(`class${i}`).style.backgroundColor = "white";
            }
         }
      }
   }

}


