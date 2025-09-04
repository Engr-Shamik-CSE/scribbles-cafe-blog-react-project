// import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const handleBookMark = (blogData) => {
    console.log(blogData);
  }

  return (
    <>
      <Navbar></Navbar>
      
      <div className="main-container flex text-center">
        <div className="left-container w-7/12  border-1 border-dashed">
            <Blogs handleBookMark={handleBookMark}></Blogs>
        </div>
        <div className="right-container w-5/12 border-1 border-dashed">
            <h1>Reading Time : 0</h1>
            <h1>Bookmark Count : 0</h1>
        </div>
      </div>
      
    </>
  )
}

export default App
