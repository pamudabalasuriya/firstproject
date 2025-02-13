// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
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
import { CustomTextInput } from './CustomTextInput'; // Assuming this is in the same directory

const App: React.FC = () => {
  // State to store the value of the input field
  const [name, setName] = useState<string>('');

  // Handle the change event when the user types in the input field
  const handleNameChange = (newName: string) => {
    setName(newName); // Update the state with the new name
  };

  return (
    <div>
      <h1>Welcome to the React App!</h1>
      <CustomTextInput
        label="Enter your name:"      // Label for the input field
        value={name}                  // Value bound to the input field state
        onChange={handleNameChange}   // Callback function for input change
        idPrefix="name"               // Prefix for the input's ID
        autoFocus={true}              // Automatically focus on the input field
      />
      <p>Your name: {name}</p>  {/* Display the current name */}
    </div>
  );
};

export default App;
