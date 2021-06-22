

const Home = ({ blogData }) => {
    return (
        <div className='main'>
            <div className='content'>


                {blogData.map(blog => (
                    <div className='card' key={blog.id}>
                        <img src={blog.img} className='card-img-top' alt={blog.title} />


                        <div className='card-body'>
                            <h5 className='card-title'>{blog.title}</h5>
                            <p className='card-text'>{blog.cat} <span className='text-mute  text-right'>{blog.time}</span></p>
                        </div>
                    </div>
                ))}


            </div>
        </div >
    )
}

export default Home
