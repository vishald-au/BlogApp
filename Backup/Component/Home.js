

const Home = ({ blogData, NavLink, openPost }) => {


    return (
        <div className='main'>
            <div className='content blogs'>


                {blogData.map(blog => (
                    <NavLink key={blog.id} to={'/post/' + blog.id} onClick={() => openPost(blog.id)}>
                        < div className='card' >
                            < img src={blog.img} className='card-img-top' alt={blog.title} />


                            <div className='card-body'>
                                <h5 className='card-title'>{blog.title}</h5>
                                <p className='card-text'>{blog.cat} <span className='text-mute  text-right'>{blog.time}</span></p>

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
