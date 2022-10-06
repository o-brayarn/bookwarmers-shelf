import Home from './components/Home';
import AddBooks from './components/AddBooks';
import ReadingList from './components/ReadingList';
import Read from './components/Read'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';

function App() {
const [books, setBooks] = useState([]);

function fetchBooks(){
  fetch('http://localhost:3000/books')
  .then((res) => res.json())
  .then((data) =>setBooks(data))
}
useEffect(() => {
  fetchBooks();
}, [])


  return (
    <div className="main">
      <NavBar />
      <Routes>
        <Route path="/reading-list" element={<ReadingList />} />
        <Route path="/read" element={<Read />} />
        <Route path="/add-books" element={<AddBooks books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
