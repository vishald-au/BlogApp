import React from 'react'
import { useEffect } from 'react';

const Search = ({ backOn, blogData, searchText, NavLink }) => {



    useEffect(() => {
        backOn();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps



    function filterBlog() {
        return blogData.filter(
            (blog) =>
                blog.title.toString().toLowerCase().includes(searchText) /* ||
                blog.body.toString().toLowerCase().includes(searchText) */
        )
    }

    return (
        <div className='searchArea'>






            <ul className='list-group list-group-flush'>
                {filterBlog(blogData).map(sblog => (
                    <NavLink key={sblog.id} to={'/post/' + sblog.id}>
                        <li className='list-group-item' key={sblog.id}>
                            <div><img className='fImg' src='https://i.pinimg.com/564x/1f/38/47/1f38470f5f8d69630c42a4c07233d59c.jpg' alt={sblog.title} /></div>
                            <div>
                                {sblog.title}
                                {/*         <br />
                                <small className='card-text'>{sblog.cat} </small>
                                <small className='text-mute'>{sblog.time}</small> */}
                            </div>
                        </li>
                    </NavLink>
                ))}
            </ul>


        </div>
    )
}

export default Search
