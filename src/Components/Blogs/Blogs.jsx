import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';


const Blogs = ({ handleBookMark, bookMarked, handleReadingTimeAndMarkAsRead }) => {
    // store data from useEffect() into useState() hook which works like variable
    const [blogs, setBlogs] = useState([]);

    //useEffect() is being used here to fetch external data after the component renders.
    //Without useEffect, React would try to fetch during rendering, which is not allowed.
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []); // empty dependency array = run only once
    // console.log(blogs);
    return (
    <div className="px-2 sm:px-2 lg:px-2 w-full mx-auto mt-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold my-6 sm:my-10 text-center">
            Total Blogs: {blogs.length}
        </h1>

        <div
            className="
                all-blogs 
                grid grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-2 
                lg:grid-cols-3 
                 
                 
                gap-2 items-stretch
            "
        >
            {blogs.map((blog) => (
                <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookMark={handleBookMark}
                    bookMarked={bookMarked}
                    handleReadingTimeAndMarkAsRead={handleReadingTimeAndMarkAsRead}
                />
            ))}
        </div>
    </div>
);

};

export default Blogs;