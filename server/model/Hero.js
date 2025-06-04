const getHeroId = require('../utils/getId');

const heroes = [
    { name: 'Spider-Man', id: getHeroId() },
    { name: 'Iron-Man', id: getHeroId() },
    { name: 'Captain America', id: getHeroId() },
];

class Hero {

    static create(name) {
        const newHero = { name, id: getHeroId() };
        heroes.push(newHero);
        return newHero;
    }

    static list() {
        return [...heroes]
    }
    static find(id) {
        return heroes.find(hero => hero.id === id);
    }
    static editHero(id, newName) {
        const hero = Hero.find(id);
        if (!hero) {
            return null;
        }
        hero.name = newName;
        return hero;
    }

    static delete(id) {
        const heroIndex = heroes.findIndex((hero) => hero.id === id);
        if (heroIndex < 0) return false;

        heroes.splice(heroIndex, 1);
        return true;
    }
}

module.exports = Hero;

