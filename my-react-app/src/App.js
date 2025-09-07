
import './App.css';
import HomePage from './Components/Home';


import Nav from './Components/Nav';
import Path from './Components/path';
// ✅ Import toast container
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">




      {/* <Nav/> */}

      < Path />
      {/* ✅ Toast container at root level */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />

    </div>
  );
}

export default App;
