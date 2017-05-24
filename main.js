class Fighter {
    constructor(name, power, health) {
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
    let currentPoint = point[pointNumber];
    function changePoint() {
        ++pointNumber;
        if (pointNumber >= point.length - 1) pointNumber = 0;
        currentPoint = point[pointNumber];
    }
    
    console.log('Ready? Fight!');
    while (true) {
        Fighter.hit(ImprovedFighter, currentPoint);
        if (ImprovedFighter.health <= 0) {
            console.log(`${Fighter.name} makes critical hit and WINS!!!`);
            return false;
        }
        changePoint();
        ImprovedFighter.doubleHit(Fighter, currentPoint);
        if (Fighter.health <= 0) {
            console.log(`${ImprovedFighter.name} makes critical hit and WINS!!!`);
            return false;
        }
        changePoint();
    }
}

var Hulk = new Fighter('Hulk', 1, 60);
var Batman = new ImprovedFighter('Batman', 1, 35);
Fight(Hulk, Batman, 1, 2, 3, 4);