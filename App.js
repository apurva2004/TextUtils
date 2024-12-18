import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import New from './components/New';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#062543';
      showAlert("Dark mode has been enabled", "success");
   //   document.title = "Textutils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      //document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar aboutText="About Us" title='TextUtils' mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<New showAlert={showAlert} heading='Try TextUtils- Word Counter, Character Counter, Clear Text' mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
