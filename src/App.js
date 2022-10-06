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
const [collections, setCollections] = useState([]);

function fetchBooks(){
  fetch('http://localhost:3000/books')
  .then((res) => res.json())
  .then((data) =>setBooks(data))
}
useEffect(() => {
  fetchBooks();
}, [])

function handleSearch(search){
  if (search === ''){
    fetchBooks(books)
  } else {
 
  const searchBooks = books.filter(book => {
    return book.title.toLowerCase().includes(search.toLowerCase())
  })
  setBooks(searchBooks)
 }
}

function handleAdd(book){
  setBooks([...books, book])
}

function addToRead(book) {
  const booksCollection = collections.find((collection) => collection.id === book.id)
  if (!booksCollection) setCollections([...collections, book])
}

  return (
    <div className="main">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home books={books} handleSearch={handleSearch} addToRead={addToRead} />} />
        <Route path="/reading-list" element={<ReadingList collections={collections} />} />
        <Route path="/read" element={<Read />} />
        <Route path="/add-books" element={<AddBooks books={books} handleAdd={handleAdd} />} />
      </Routes>
    </div>
  );
}

export default App;
