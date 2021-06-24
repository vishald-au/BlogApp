import React from 'react'
import { useState, useEffect, useRef } from 'react';

const Search = ({ backOn, blogData, searchText }) => {



    useEffect(() => {
        backOn();
    }, []);



    function filterBlog() {
        return blogData.filter(
            (blog) =>
                blog.title.toString().toLowerCase().includes(searchText) ||
                blog.cat.toString().toLowerCase().includes(searchText) ||
                blog.time.includes(searchText)
        )
    }

    return (
        <div className='searchArea'>



            <div>{filterBlog(blogData).map(sblog => (
                <li key={sblog.id}> {sblog.title} </li>
            ))}</div>
        </div>
    )
}

export default Search
