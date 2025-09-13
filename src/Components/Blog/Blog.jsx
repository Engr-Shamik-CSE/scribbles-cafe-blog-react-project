import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, bookMarked, handleReadingTimeAndMarkAsRead }) => {
    // const {blog}= props; //destructuring 
    // console.log(blog);
    const isMarked = bookMarked.some(m => m.id === blog.id);

    return (
        <div className="p-2">
            <div className="card bg-base-100 w-full  mx-auto shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden">

                {/* Blog Image */}
                <figure className="overflow-hidden">
                    <img
                        src={blog.cover}
                        alt={blog.title}
                        className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-80 object-cover transition-transform duration-300 hover:scale-105"
                    />
                </figure>

                <div className="card-body flex flex-col space-y-3 sm:space-y-4 md:space-y-5">

                    {/* Author Section */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <img
                                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-[#ff00f7] outline outline-2 outline-[#03002b] outline-offset-2"
                                src={blog.author_img}
                                alt={blog.author}
                            />
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                                {blog.author}
                            </h3>
                        </div>

                        <button onClick={() => handleBookMark(blog)}>
                            <FaBookmark
                                className={`${isMarked
                                        ? "text-black drop-shadow-[1px_1px_1px_#42023f]"
                                        : "text-[#ff00f7] drop-shadow-[1px_1px_1px_#42023f]"
                                    } w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7`}
                            />
                        </button>
                    </div>

                    {/* Blog Title */}
                    <h2 className="card-title text-left text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                        {blog.title}
                    </h2>

                    {/* Blog Description */}
                    <p className="text-left text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 line-clamp-3">
                        A card component has a figure, a body part, and inside body there are title and actions parts
                    </p>

                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3">
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
                                    className={`px-2 sm:px-3 md:px-4 py-1 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium rounded-full shadow-sm hover:opacity-80 transition ${colorClass}`}
                                >
                                    {hash}
                                </span>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <div className="card-actions justify-end">
                        <button
                            onClick={() =>
                                handleReadingTimeAndMarkAsRead(blog.reading_time, blog.id)
                            }
                            className="btn btn-primary text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 py-1 sm:py-2"
                        >
                            Mark As Read
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default Blog;