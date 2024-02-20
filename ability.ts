const data = 
{
    "start": [
        {
            "name": "Attack",
            "imagePath": "assets/attack.png",
            "description": "close range attack with your weapon",
            "range": 1,
            "base": 6,
            "modifier": "Strength",
            "ratio": 0.1
        },
        {
            "name": "Ranged Attack",
            "imagePath": "assets/ranged.png",
            "description": "range attack with your bow and arrows",
            "range": 3,
            "base": 4,
            "modifier": "Dexterity",
            "ratio": 0.1
        },
        {
            "name": "Fireball",
            "imagePath": "assets/fireball.png",
            "description": "magic attack from medium range",
            "range": 2,
            "base": 4,
            "modifier": "Intelligence",
            "ratio": 0.1
        },
        {
            "name": "Lesser Heal",
            "imagePath": "assets/lesserHeal.png",
            "description": "self healing a small amount of your health",
            "range": 0,
            "base": 4,
            "modifier": "Wisdom",
            "ratio": 0.1
        }
    ]
}

window.onload = () => {
    for(let a = 0; a < 4; a++){
        document.getElementById(`ability${a}`).onclick = function () {
            document.getElementById(`ability${a}`).style.backgroundColor = "yellow";
            for(let i = 0; i < 4; i++){
                if(i != a){
                    document.getElementById(`ability${i}`).style.backgroundColor = "white";
                }
            }
        }
    }
};