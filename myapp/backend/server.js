const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define a Server model
const serverSchema = new mongoose.Schema({
    name: String,
    ip: String,
    status: String
});

const Server = mongoose.model('Server', serverSchema);

// Routes
// Add server details
app.post('/api/servers', async (req, res) => {
    const { name, ip, status } = req.body;
    const newServer = new Server({ name, ip, status });
    try {
        await newServer.save();
        res.status(201).json(newServer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all servers
app.get('/api/servers', async (req, res) => {
    try {
        const servers = await Server.find();
        res.json(servers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete server by ID
app.delete('/api/servers/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Server.findByIdAndDelete(id);
        res.status(200).json({ message: 'Server deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
