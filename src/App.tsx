import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/Home.tsx";


function App() {
  return (
    <>
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

export function Banner(){
  return(
    <header className="Tytle">
      <div className="siteLogo">
        <a href="/">
          WGRAT
        </a>
      </div>
      <div className="searchBox">
        <form>
          <input className="searchTp" placeholder="검색">
          
          </input>
          <button type="submit" className="searchBtn">
            <img src="/search.png" alt=""/>
          </button>
        </form>
      </div>
    </header>
  )
}