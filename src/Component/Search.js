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

            <ul className='list-group list-group-flush'>
                {filterBlog(blogData).map(sblog => (
                    <li className='list-group-item' key={sblog.id}>

                        <div><img className='fImg' src={sblog.img} /></div>
                        <div>
                            {sblog.title}
                            <br />
                            <small className='card-text'>{sblog.cat} </small>
                            <small className='text-mute'>{sblog.time}</small>
                        </div>

                    </li>
                ))}
            </ul>


        </div>
    )
}

export default Search
