const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

var {
    Details
} = require('../models/details');

//localhost:3000/details/
router.get('/', (req, res) => {
    Details.find((err, doc) => {
        if (!err) res.send(doc);
        else console.log("Error get Details : " + JSON.stringify(err, undefined, 2));
    });
});


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record Given Id : ${req.params.id}`);

    Details.findById(req.params.id, (err, doc) => {
        if (!err) res.send(doc);
        else console.log("Error get Details : " + JSON.stringify(err, undefined, 2));
    })
});


router.post('/', (req, res) => {
    var detail = new Details({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });

    detail.save((err, doc) => {
        if (!err) res.send(doc);
        else console.log("Error get Details : " + JSON.stringify(err, undefined, 2));
    });
});


router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record Given Id : ${req.params.id}`);

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };

    Details.findByIdAndUpdate(req.params.id, {
        $set: emp
    }, {
        new: true
    }, (err, doc) => {
        if (!err) res.send(doc);
        else console.log("Error get Details : " + JSON.stringify(err, undefined, 2));
    })
});


router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record Given Id : ${req.params.id}`);

    Details.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) res.send(doc);
        else console.log("Error get Details : " + JSON.stringify(err, undefined, 2));
    });
});


module.exports = router;