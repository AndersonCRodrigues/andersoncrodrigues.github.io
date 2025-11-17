class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;
    type = 'base';
    image = '';

    constructor(name) {
        this.name = name;
    }

    get life(){
        return parseFloat(this._life).toFixed(2);
    }

    set life(newLife) {
        let numericLife = parseFloat(newLife);
        this._life = numericLife < 0 ? 0 : numericLife;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
        this.type = 'hero';
        this.image = 'assets/img/Knight.gif';
    }
}

class Sorcere extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
        this.type = 'hero';
        this.image = 'assets/img/Sorcerer.gif';
    }
}

class Rogue extends Character {
    constructor(name) {
        super(name);
        this.life = 90;
        this.attack = 12;
        this.defense = 5;
        this.maxLife = this.life;
        this.type = 'hero';
        this.image = 'assets/img/Rogue.gif';
    }
}

class Ranger extends Character {
    constructor(name) {
        super(name);
        this.life = 110;
        this.attack = 9;
        this.defense = 7;
        this.maxLife = this.life;
        this.type = 'hero';
        this.image = 'assets/img/Ranger.gif';
    }
}

class LitteMonster extends Character {
    constructor() {
        super('Little Monster');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
        this.type = 'monster';
        this.image = 'assets/img/little_monster.gif';
    }
}

class BigMonster extends Character {
    constructor() {
        super('Big Monster');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
        this.type = 'monster';
        this.image = 'assets/img/big_monster.gif';
    }
}

class Zombi extends Character {
    constructor() {
        super('Zumbi');
        this.life = 60;
        this.attack = 8;
        this.defense = 2;
        this.maxLife = this.life;
        this.type = 'monster';
        this.image = 'assets/img/zombi.gif';
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logger) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.logger = logger;
        this.currentTurn = fighter1;
    }

    start() {
        this.update()

        this.fighter1El
            .querySelector('.attack-button')
            .addEventListener('click',
            () => {
                this.handleAttack(this.fighter1, this.fighter2)
            }
        );

        this.fighter2El
            .querySelector('.attack-button')
            .addEventListener('click',
            () => {
                this.handleAttack(this.fighter2, this.fighter1)
            }
        );
    }

    handleAttack(atacante, defensor) {
        if (this.currentTurn !== atacante) {
            this.logger.addMessage(`<span class="system-message">Nao e o turno de ${atacante.name}.</span>`);
            return;
        }

        this.doAttack(atacante, defensor);
    }

    passTurn() {
        this.currentTurn = this.currentTurn === this.fighter1 ? this.fighter2 : this.fighter1;

        while (this.currentTurn && this.currentTurn.life <= 0) {
            this.logger.addMessage(`<span class="system-message">${this.currentTurn.name} esta derrotado. Passando o turno.</span>`);
            this.currentTurn = this.currentTurn === this.fighter1 ? this.fighter2 : this.fighter1;

            if (this.fighter1.life <= 0 && this.fighter2.life <= 0) {
                this.currentTurn = null;
                break;
            }
        }

        if (this.currentTurn && this.currentTurn.life > 0) {
            this.logger.addMessage(`<span class="system-message">E o turno de ${this.currentTurn.name}.</span>`);
        }
        this.update();
    }

    doAttack(atacante, defensor) {
        if (atacante.life <= 0) {
            this.logger.addMessage(`<span class="system-message">${atacante.name} nao pode atacar, pois foi derrotado!</span>`);
            this.update();
            return;
        }

        if (defensor.life <= 0) {
            this.logger.addMessage(`<span class="system-message">${atacante.name} esta atacando um derrotado!</span>`);
            this.passTurn();
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactory = (Math.random() * 2).toFixed(2);

        let actualAttack = atacante.attack * attackFactor
        let actualDefense = defensor.defense * defenseFactory
        let wonExtraTurn = false;

        if (actualAttack < 1) {
            wonExtraTurn = true;
        }

        if (actualAttack > actualDefense) {
            let damage = actualAttack - actualDefense;
            defensor.life = parseFloat(defensor.life) - damage;
            this.logger.addMessage(`<span class="${atacante.type === 'hero' ? 'hero-message' : 'monster-message'}">${atacante.name} causou ${damage.toFixed(2)} de dano em ${defensor.name}.</span>`)
        } else {
            let recoveredLife = 0.05 * defensor.maxLife;
            defensor.life = parseFloat(defensor.life) + recoveredLife;
            if (defensor.life > defensor.maxLife) {
                defensor.life = defensor.maxLife;
            }
            this.logger.addMessage(`<span class="${defensor.type === 'hero' ? 'hero-message' : 'monster-message'}">${defensor.name} defendeu o ataque de ${atacante.name} e recuperou ${recoveredLife.toFixed(2)} HP!</span>`)
        }

        if (defensor.life <= 0) {
            this.logger.addMessage(`<span class="system-message">${defensor.name} foi derrotado! Fim de Jogo!</span>`);
            this.currentTurn = null;
        }

        if (wonExtraTurn) {
            this.logger.addMessage(`<span class="system-message">Ataque muito fraco. ${atacante.name} ganhou mais um turno!</span>`);
        } else if (this.currentTurn) {
            this.passTurn();
        }

        this.update()
    }

    update(){
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
        let f1pct = (parseFloat(this.fighter1.life) / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1pct}%`;
        this.fighter1El.querySelector('.character-image').src = this.fighter1.image;

        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
        let f2pct = (parseFloat(this.fighter2.life) / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2pct}%`;
        this.fighter2El.querySelector('.character-image').src = this.fighter2.image;

        let f1Btn = this.fighter1El.querySelector('.attack-button');
        let f2Btn = this.fighter2El.querySelector('.attack-button');

        let winner = null;
        if (this.fighter1.life <= 0) {
            winner = this.fighter2;
        } else if (this.fighter2.life <= 0) {
            winner = this.fighter1;
        }

        if (winner) {
            f1Btn.disabled = true;
            f2Btn.disabled = true;
            if (typeof endGame === 'function') {
                endGame(winner);
            }
            return;
        }

        if (this.currentTurn === this.fighter1 && this.fighter1.life > 0) {
            f1Btn.disabled = false;
            f2Btn.disabled = true;
        } else if (this.currentTurn === this.fighter2 && this.fighter2.life > 0) {
            f1Btn.disabled = true;
            f2Btn.disabled = false;
        } else {
            f1Btn.disabled = true;
            f2Btn.disabled = true;
        }
    }
}

class Logger {
    list = []

    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    }

    render() {
        this.listEl.innerHTML = '';
        this.list.forEach((i) => this.listEl.innerHTML += `<li>${i}</li>`)
        this.listEl.scrollTop = this.listEl.scrollHeight;
    }
}