import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/pages/Register';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Register />}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
