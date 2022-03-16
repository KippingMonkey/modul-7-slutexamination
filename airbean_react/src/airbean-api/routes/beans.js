const { Router } = require('express')
const router = new Router()
const fs = require('fs');
const uuid = require('uuid-random');
const { generateOrderNr, generateETA } = require('../utils/utils');

router.get('/', async (req, res) => {
    const menu = fs.createReadStream('data/menu.json');
    menu.pipe(res);
});

router.post('/', async (req, res) => {
    const order = {
        eta: generateETA(),
        orderNr: generateOrderNr(),
    }

    setTimeout(() => {
        res.send(order);
    }, 2000);
});

module.exports = router