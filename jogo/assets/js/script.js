let char = null;
let monster = null;
let log = new Logger(document.querySelector('.log'));
let stage = null;

const availableMonsters = [LitteMonster, BigMonster, Zombi];

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#selection-modal').style.display = 'flex';
});

function startGame(heroType) {
    const heroName = document.querySelector('#hero-name-input').value || 'Herói';

    if (heroType === 'knight') {
        char = new Knight(heroName);
    } else if (heroType === 'sorcerer') {
        char = new Sorcere(heroName);
    } else if (heroType === 'rogue') {
        char = new Rogue(heroName);
    } else if (heroType === 'ranger') {
        char = new Ranger(heroName);
    }

    const MonsterClass = availableMonsters[Math.floor(Math.random() * availableMonsters.length)];
    monster = new MonsterClass();

    document.querySelector('#selection-modal').style.display = 'none';

    stage = new Stage(
        char,
        monster,
        document.querySelector('#char'),
        document.querySelector('#monster'),
        log,
    );

    stage.start();
}