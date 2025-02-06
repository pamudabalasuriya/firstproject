// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>Pages/Home</code> and save to reload.
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


import logo from './logo.svg';
import './App.css';

// import Contact from './Components/Contact';
// import ContextProvider from './Context/AppContext';
// import Footer from './Components/Footer';
// import UseCounter from './UseCounter';
import { Outlet } from 'react-router-dom';
// import LayoutEffectTest from './Components/Layout-effect-test';



function App() {
  // const {increment,decrement,count} = UseCounter(5)
  return (
 
    <div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
    // // <>
    // // <div>
    // //   <p>Count : {count}</p>
    // //   <button onClick={increment}>increment</button>
    // //   <button onClick={decrement}>decrement</button>
      
    // // </div>

    // {/* <LayoutEffectTest/> */}

    // {/* <ContextProvider>
    //   <Contact/>
    //   <Footer/>
    // </ContextProvider> */}

    // // </>
  );
}

export default App;


