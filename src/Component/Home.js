

const Home = ({ blogData, NavLink }) => {


    return (
        <div className='main'>

            <div className='newStuff'>

                {blogData.filter(blog => blog.id === 1).map(filteredBlog => (
                    <NavLink key={filteredBlog.id} to={'/post/' + filteredBlog.id}>
                        <div className='newStuffData'>
                            <div><img className='fImg' src='https://i.pinimg.com/564x/20/84/2b/20842b9449166bfa6d8558ab93a791e3.jpg' alt={filteredBlog.title} /></div>
                            <div>
                                <h5>{filteredBlog.title}</h5>
                                {/*   <small className='card-text'>{filteredBlog.cat} <span className='text-mute text-right'>{filteredBlog.time}</span></small> */}
                            </div>
                        </div>
                    </NavLink>
                ))}

            </div>

            <div className='content blogs'>


                {blogData.map(blog => (
                    <NavLink key={blog.id} to={'/post/' + blog.id}>
                        <div className='card' >
                            <img src='https://i.pinimg.com/564x/9d/e3/27/9de327905d868d42708c8fc13de6168c.jpg' className='card-img-top' alt={blog.title} />


                            <div className='card-body'>
                                <h5 className='card-title'>{blog.title}</h5>
                                {/*  <p className='card-text'>{blog.cat} <span className='text-mute  text-right'>{blog.time}</span></p> */}

                            </div>

                        </div>
                    </NavLink>
                ))
                }


            </div >
        </div >
    )
}

export default Home
