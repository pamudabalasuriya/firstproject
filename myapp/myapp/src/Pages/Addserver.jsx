// src/pages/AddServer.jsx
import React from 'react';

function AddServer() {
  return (
    <div>
      <h1>Add a New Server</h1>
      <form>
        <label htmlFor="serverName">Server Name: </label>
        <input type="text" id="serverName" name="serverName" />
        <br />
        <label htmlFor="serverIP">Server IP: </label>
        <input type="text" id="serverIP" name="serverIP" />
        <br />
        <button type="submit">Add Server</button>
      </form>
    </div>
  );
}

export default AddServer;
