const Hero = require('../model/Hero');

// Get All
const serveHeroes = (req, res) => {
    const heroesList = Hero.list();
    res.send(heroesList);
}

// Get One
const serveHero = (req, res) => {
    const { id } = req.params;
    const hero = Hero.find(Number(id));

    if (!hero) {
        return res.status(404).send({
            message: `No hero with the id ${id} found`
        });
    }
    res.send(hero);
};

// Create
const createHero = (req, res) => {
    const { heroName } = req.body;
    if (!heroName) {
        return res.status(400).send({ message: "Invalid hero name"})
}

const newHero = Hero.create(heroName);
res.send(newHero);
};

// Update
const updateHero = (req, res) => {
    const { heroName } = req.body;

    if(!heroName) {
        return res.status(400).send({ message: "Invalid hero name"})
    }
    const { id } = req.params;
    const updatedHero = Hero.editHero(Number(id), heroName);
    if (!updatedHero) {
        return res.status(404).send({
            message: `No hero with the id ${id} found`
        });
    }

    res.send(updatedHero);
}

// Delete
const deleteHero = (req, res) => {
    const { id } = req.params;
    const didDelete = Hero.delete(Number(id));

    if (!didDelete) {
        return res.status(404).send({
            message: `No hero with the id ${id} found`
        });
    }

    res.sendStatus(204);
}

module.exports = {
    serveHeroes,
    serveHero,
    createHero,
    updateHero,
    deleteHero
}

