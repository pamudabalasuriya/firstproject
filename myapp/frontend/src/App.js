// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import AddServer from './components/AddServer';
import ServerList from './components/ServerList';

const App = () => {
    const [servers, setServers] = useState([]);

    const handleServerAdded = (newServer) => {
        setServers([...servers, newServer]);
    };

    return (
        <div>
            <h1>Server Management</h1>
            <AddServer onServerAdded={handleServerAdded} />
            <ServerList servers={servers} />
        </div>
    );
};

export default App;

