const express = require('express');
const router = express.Router();
const { Tickets } = require('../models');

router.get("/", async (req, res) => {
    const ticketList = await Tickets.findAll();
    res.json(ticketList);
});

router.post("/", async (req, res) => {
    const ticket = req.body;
    await Tickets.create(ticket);
    res.json(ticket);
});


module.exports = router;