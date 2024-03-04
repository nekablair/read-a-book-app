import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button'
import Header from './components/Header'
import Search from './components/Search'
import Sign from './components/Sign'
import Favorites from './components/Favorites'
import BookTry from './components/BookTry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Read-A-Book App</h1>
      <Header></Header>
      <Search></Search>
      <Sign></Sign>
      <BookTry></BookTry>
      <Favorites></Favorites>
    </>
  )
}

export default App
