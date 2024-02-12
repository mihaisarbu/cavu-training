window.onload = () => {
    switch(sessionStorage.getItem("class")){
        case "Barbarian": {
            (<HTMLImageElement>document.getElementById("class")).src = "https://www.dndbeyond.com/avatars/thumbnails/6/342/420/618/636272680339895080.png";
            break;
        };
        case "Cleric": {
            (<HTMLImageElement>document.getElementById("class")).src = "https://www.dndbeyond.com/avatars/thumbnails/6/371/420/618/636272706155064423.png";
            break;
        };
        case "Rogue": {
            (<HTMLImageElement>document.getElementById("class")).src = "https://www.dndbeyond.com/avatars/thumbnails/6/384/420/618/636272820319276620.png";
            break;
        };
        case "Sorcerer": {
            (<HTMLImageElement>document.getElementById("class")).src = "https://www.dndbeyond.com/avatars/thumbnails/6/485/420/618/636274643818663058.png";
            break;
        };
    }

    switch(sessionStorage.getItem("hero")){
        case "Makima": {
            (<HTMLImageElement>document.getElementById("hero")).src = "https://static.wikia.nocookie.net/chainsaw-man/images/d/d9/Makima_anime_design_2.png";
            break;
        }
        case "Eren": {
            (<HTMLImageElement>document.getElementById("hero")).src = "https://static.wikia.nocookie.net/shingekinokyojin/images/3/36/Eren_854_Current_Appearance.png";
            break;
        }
        case "Alucard": {
            (<HTMLImageElement>document.getElementById("hero")).src = "https://static.wikia.nocookie.net/characterprofile/images/5/5e/Alucard_Hellsing.png";
            break;
        }
        case "Revy": {
            (<HTMLImageElement>document.getElementById("hero")).src = "https://static.wikia.nocookie.net/villains/images/4/44/Revy_Full.png";
            break;
        }
    }
};