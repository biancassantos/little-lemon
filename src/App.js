import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import BookingPage from './BookingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/booking' element={<BookingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;