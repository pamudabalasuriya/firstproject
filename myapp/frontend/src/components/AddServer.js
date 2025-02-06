import React, { useState } from 'react';
import axios from 'axios';

const AddServer = ({ onServerAdded }) => {
    const [name, setName] = useState('');
    const [ip, setIp] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/servers', { name, ip, status });
            onServerAdded(response.data); // Callback to update parent component
            setName('');
            setIp('');
            setStatus('');
        } catch (error) {
            console.error("There was an error adding the server:", error);
        }
    };

    return (
        <div>
            <h2>Add Server</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>IP Address:</label>
                    <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} required />
                </div>
                <div>
                    <label>Status:</label>
                    <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
                </div>
                <button type="submit">Add Server</button>
            </form>
        </div>
    );
};

export default AddServer;
