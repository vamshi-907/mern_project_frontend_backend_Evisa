const express = require('express');
const router = express.Router();
const Clients = require('../Models/Client');
const csvtojson = require('csvtojson');
const multer = require('multer');

// Middleware to fetch a client by ID
async function getClient(req, res, next) {
    let client;
    try {
        client = await Clients.findById(req.params.id);
        if (client === null) {
            return res.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
    res.client = client;
    next();
}

// POST a new client
router.post('/', async (req, res) => {
    try {
        const client = new Clients(req.body);
        await client.save();
        res.status(200).json(client);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET all clients
router.get('/', async (req, res) => {
    try {
        const clients = await Clients.find();
        res.json(clients);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET a client by ID
router.get('/:id', getClient, async (req, res) => {
    res.json(res.client);
});

// Update a client by ID
router.put('/:id', getClient, async (req, res) => {
    try {
        if (req.body.ClientNumber !== undefined) {
            res.client.ClientNumber = req.body.ClientNumber;
        }
        if (req.body.DOB !== undefined) {
            res.client.DOB = req.body.DOB;
        }
        if (req.body.Email !== undefined) {
            res.client.Email = req.body.Email;
        }
        if (req.body.Address !== undefined){
            res.client.Address = req.body.Address;
        }
        if (req.body.Payment !== undefined){
            res.client.Payment = req.body.Payment;
        }
        if (req.body.FirstName !== undefined) {
            res.client.FirstName = req.body.FirstName;
        }
        if (req.body.LastName !== undefined) {
            res.client.LastName = req.body.LastName;
        }
        if (req.body.Gender !== undefined) {
            res.client.Gender = req.body.Gender;
        }
        if (req.body.AadharNumber !== undefined) {
            res.client.AadharNumber = req.body.AadharNumber;
        }
        if (req.body.MotherName !== undefined){
            res.client.MotherName = req.body.MotherName;
        }

        const updatedClient = await res.client.save();
        res.json(updatedClient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a client by ID
router.delete('/:id', getClient, async (req, res) => {
    try {
        await res.client.deleteOne();
        res.json({ message: "Client deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Bulk Upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    try {
        const data = await csvtojson().fromString(req.file.buffer.toString());
        await Clients.insertMany(data);
        res.json({ message: "CSV file uploaded successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;