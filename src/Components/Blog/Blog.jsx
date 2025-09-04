import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
    // const {blog}= props; //destructuring 
    console.log(blog);

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={blog.cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body flex flex-col ">
                    <div className="author flex  items-center justify-between ">
                        <div className="author flex  items-center gap-3 ">
                            <img className="w-[35px] rounded-full border-2 border-[#ff00f7] outline-2 outline-[#03002b] outline-offset-2"
                                src={blog.author_img}
                                alt=""
                            />
                            <h3 className='text-lg font-bold'>{blog.author}</h3>
                        </div>

                        <FaBookmark
                            size={25}
                            className="text-[#ff00f7] drop-shadow-[1px_1px_1px_#42023f]"
                        />
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h2 className="card-title text-left"> {blog.title} </h2>
                        <p className='text-left'>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                        {/* <div className='flex justify-around '>
                            {
                                blog.hashtags.map(hash => <p className='bg-[#ff00f7be] gap-5 m-2 p-2 rounded-full font-bold text-white capitalize hover:bg-[#3a25c1c8] cursor-pointer'> {hash} </p>)
                            }
                        </div> */}
                        {/* dynamic color for hashtags  */}
                        <div className="flex flex-wrap gap-2">
                            {blog.hashtags.map((hash, index) => {
                                const colors = [
                                    "bg-blue-100 text-blue-700",
                                    "bg-green-100 text-green-700",
                                    "bg-purple-100 text-purple-700",
                                    "bg-pink-100 text-pink-700",
                                    "bg-yellow-100 text-yellow-700"
                                ];

                                const colorClass = colors[index % colors.length];

                                return (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 text-sm font-medium rounded-full shadow-sm hover:opacity-80 transition ${colorClass}`}
                                    >
                                        {hash}
                                    </span>
                                );
                            })}
                        </div>


                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"> Mark As Read </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;