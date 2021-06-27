import React from 'react'
import { useEffect } from 'react';

const Search = ({ backOn, blogData, searchText, NavLink }) => {



    useEffect(() => {
        backOn();
    }, []);



    function filterBlog() {
        return blogData.filter(
            (blog) =>
                blog.title.toString().toLowerCase().includes(searchText) ||
                blog.cat.toString().toLowerCase().includes(searchText) ||
                blog.time.includes(searchText) ||
                blog.desc.toString().toLowerCase().includes(searchText)
        )
    }

    return (
        <div className='searchArea'>






            <ul className='list-group list-group-flush'>
                {filterBlog(blogData).map(sblog => (
                    <NavLink key={sblog.id} to={'/post/' + sblog.id}>
                        <li className='list-group-item' key={sblog.id}>
                            <div><img className='fImg' src={sblog.img} alt={sblog.title} /></div>
                            <div>
                                {sblog.title}
                                <br />
                                <small className='card-text'>{sblog.cat} </small>
                                <small className='text-mute'>{sblog.time}</small>
                            </div>
                        </li>
                    </NavLink>
                ))}
            </ul>


        </div>
    )
}

export default Search
