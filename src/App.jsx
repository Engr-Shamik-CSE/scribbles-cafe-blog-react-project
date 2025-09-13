import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [bookMarked, setBookMarked] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleReadingTimeAndMarkAsRead = (time, id ) => {
    console.log("This Blog time is = ", time);
    const finalTime = readingTime + time;
    setReadingTime(finalTime);
    console.log(`Total Reading Time = ${readingTime} + ${time} = ${finalTime}`);

    handleRemoveFromBookmark(id);
  }

  const handleRemoveFromBookmark =(id) => {
    const remainingBookmark = bookMarked.filter((mark) => mark.id !== id);
    setBookMarked(remainingBookmark);
     
  }
  const handleBookMark = (blogData) => {
    // console.log(blogData);
    console.log('clicked on HandleBookmark');
    setBookMarked([...bookMarked, blogData]);

    const isMarked = bookMarked.includes(blogData);
    if (isMarked) {
      const bookMarkedCheck = bookMarked.filter(m => m.id !== blogData.id);
      //  Here, we’re removing the selected bookmarked card from the list. We use .filter() to loop through all bookMarked, and keep only those whose id  does not match the clicked one. In simpler terms: we’re saying — "Keep everything except this bookMarked."

      setBookMarked(bookMarkedCheck);
    }
  }
    // The safer, correct approach:
    //   Use.some() to check by ID before updating:

    //   const handleBookMark = (blogData) => {
    //     const isMarked = bookMarked.some(m => m.id === blogData.id);

    //     if (isMarked) {
    //       // remove if already bookmarked
    //       setBookMarked(bookMarked.filter(m => m.id !== blogData.id));
    //     } else {
    //       // add if not bookmarked
    //       setBookMarked([...bookMarked, blogData]);
    //     }
    //   };

    // ✅ Advantages:
    // Works reliably every time.
    // Prevents duplicates.
    // Checks by id(not object reference).

    return (
  <>
    <Navbar />

    <div className="main-container flex flex-col md:flex-row gap-3 p-3 sm:px-3 md:px-3 lg:px-3 xl:px-3 2xl:px-3 text-center">
      
      {/* Left Section (Blogs) */}
      <div className="left-container w-full md:w-9/12 border border-dashed p-2 rounded-lg">
        <Blogs
          handleBookMark={handleBookMark}
          bookMarked={bookMarked}
          handleReadingTimeAndMarkAsRead={handleReadingTimeAndMarkAsRead}
        />
      </div>

      {/* Right Section (Sidebar) */}
      <div className="right-container w-full md:w-3/12 border border-dashed p-4 rounded-lg">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3">
          Reading Time: {readingTime}
        </h1>
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3">
          Bookmark Count: {bookMarked.length}
        </h1>

        <div className="space-y-2">
          {bookMarked.map((marked, index) => (
            <div
              key={index}
              className="p-2 rounded-md bg-gray-100 text-sm sm:text-base"
            >
              {marked.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);
}

export default App
