
const Post = ({ postShow }) => {


    return (
        <div className='postBox'>

            {postShow.map(post => (

                <div key={post.id}>
                    <p className='badge bg-danger'>{post.cat}</p>
                    <h2>
                        {post.title}</h2>

                    <p className='text-mute'><small>{post.time}</small></p>
                    <img className='postImg' src={post.img} alt={post.title} />

                    <p>{post.desc}</p>

                </div>

            ))}
        </div>
    )
}

export default Post
