class Fighter {
    constructor(name = "Default Fighter", power = 1, health = 20) {
        this.name = name;
        this.power = power;
        this.health = health;
    }
    setDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} health : ${this.health}`);
    }
    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }
}

class ImprovedFighter extends Fighter {
    doubleHit(enemy, point) {
        super.hit(enemy, point * 2);
    }
}

function Fight(Fighter, ImprovedFighter, ...point) {
    
    let pointNumber = 0;
    function currentPoint() {        
        ++pointNumber;         
        if (pointNumber > point.length - 1) pointNumber = 0;       
        if (point[pointNumber] == undefined) point[pointNumber] = 1;
        return point[pointNumber];
    }
    
    var start = (a, b) => {
        console.log(a, b);
    }
    start(...["Ready?", "Fight!"]);
    
    while (true) {
        Fighter.hit(ImprovedFighter, currentPoint());
        if (ImprovedFighter.health <= 0) {
            console.log(`${Fighter.name} makes critical hit and WINS!!!`);
            return false;
        }
        ImprovedFighter.doubleHit(Fighter, currentPoint());
        if (Fighter.health <= 0) {
            console.log(`${ImprovedFighter.name} makes critical hit and WINS!!!`);
            return false;
        }
       
    }
}

var Hulk = new Fighter('Hulk', 2, 60);
var Batman = new ImprovedFighter('Batman', 1, 60);
Fight(Hulk, Batman, 1, 2, 3);

