import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServerList = () => {
    const [servers, setServers] = useState([]);

    useEffect(() => {
        const fetchServers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/servers');
                setServers(response.data);
            } catch (error) {
                console.error("Error fetching servers:", error);
            }
        };

        fetchServers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/servers/${id}`);
            setServers(servers.filter(server => server._id !== id)); // Remove deleted server from state
        } catch (error) {
            console.error("Error deleting server:", error);
        }
    };

    return (
        <div>
            <h2>Server List</h2>
            <ul>
                {servers.map((server) => (
                    <li key={server._id}>
                        {server.name} ({server.status}) - {server.ip}
                        <button onClick={() => handleDelete(server._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServerList;
