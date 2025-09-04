import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';


const Blogs = () => {
    // store data from useEffect() into useState() hook which works like variable
    const [blogs, setBlogs] = useState([]);

    //useEffect() is being used here to fetch external data after the component renders.
    //Without useEffect, React would try to fetch during rendering, which is not allowed.
    useEffect( () => {
        fetch("blogs.json")
            .then(res => res.json())
                .then(data => setBlogs(data)); 
    }, []); // empty dependency array = run only once
    // console.log(blogs);
    return (
        <div>
            <h1 className='text-3xl my-10 '> Total Blogs: {blogs.length}</h1>
            
            <div className="all-blogs grid grid-cols-3 place-items-center space-y-6  ">
                {blogs.map((blog) => <Blog key={blog.id} blog={blog}></Blog>)}
            </div>
        </div>
    );
};

export default Blogs;