const express = require('express');
const peopleRouter = express.Router();
const { People } = require('../models/index');// NOTE here we import People from the index file(we import things into the index in the folder then we import whats inside the index outside the folder) here the People is put inside the {} brcause we exported it in an object

peopleRouter.get("/people", getPeople);
peopleRouter.get("/people/:id", getPerson);
peopleRouter.post("/people", createPerson);
peopleRouter.put("/people/:id", updatePerson);
peopleRouter.delete("/people/:id", deletePerson);

async function getPeople(req, res) {
    let peopleResult = await People.findAll(); //findAll id a built in method and is the same as SELECT *
    res.status(200).json(peopleResult);
}


async function getPerson(req, res) {
    const personId = parseInt(req.params.id);
    console.log(req.params.id)
    let person = await People.findOne({ // findOne is also built in method
        where: {
            id: personId
        }
    })
    res.status(200).json(person);
}

async function createPerson(req, res) {
    let newPerson = req.body;
    console.log(req.body)
    let person = await People.create(newPerson);
    res.status(201).json(person);
}

async function updatePerson(req, res) {
    let personId = parseInt(req.params.id);
    let updatePerson = req.body;
    let foundPerson = await People
    let updatedPerson = await foundPerson.update(updatePerson);
    res.status(201).json(updatedPerson);
}



async function deletePerson(req, res) {
    let personId = parseInt(req.params.id);
    let deletePerson = await People.destroy({ where: { id: personId } });
    res.status(204).json(deletePerson); //here it shoud be json not sent cus it didnt work
}
module.exports = peopleRouter;