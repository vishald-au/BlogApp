import axios from 'axios';
import { useState, useEffect } from 'react';


const Post = ({ postInfo }) => {

    const [showData, setShowData] = useState('')

    const getPost = () => {
        axios.get('/posts/' + postInfo).then(
            (res) => {
                console.log(res.data);
                setShowData(res.data);
            }
        )
    }

    useEffect(() => {
        getPost();
    }, []);


    return (
        <div className='postBox'>

            <div key={showData.id}>
                <p className='badge bg-danger'>{showData.cat}</p>
                <h2>
                    {showData.title}</h2>

                <p className='text-mute'><small>{showData.time}</small></p>
                <img className='postImg' src={showData.img} alt={showData.title} />

                <p>{showData.desc}</p>

            </div>


        </div>
    )
}

export default Post
