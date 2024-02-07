window.onload = () => {
    switch(sessionStorage.getItem("class")){
        case "Barbarian": {
            (<HTMLImageElement>document.getElementById("class")).src= "https://www.dndbeyond.com/avatars/thumbnails/6/342/420/618/636272680339895080.png"
            break;
        };
        case "Cleric": {
            (<HTMLImageElement>document.getElementById("class")).src= "https://www.dndbeyond.com/avatars/thumbnails/6/371/420/618/636272706155064423.png"
            break;
        };
        case "Rogue": {
            (<HTMLImageElement>document.getElementById("class")).src= "https://www.dndbeyond.com/avatars/thumbnails/6/384/420/618/636272820319276620.png"
            break;
        };
        case "Sorcercer": {
            (<HTMLImageElement>document.getElementById("class")).src= "https://www.dndbeyond.com/avatars/thumbnails/6/485/420/618/636274643818663058.png"
            break;
        };
    }
};