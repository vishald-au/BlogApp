
const Post = ({ postShow }) => {


    return (
        <div>

            {postShow.map(post => (

                <div key={post.id}>

                    <h2>{post.title}</h2>
                    <img src={post.img} alt={post.title} />
                    <p className='card-text'>{post.cat} <span className='text-mute  text-right'>{post.time}</span></p>
                    <p>{post.desc}</p>

                </div>

            ))}
        </div>
    )
}

export default Post
