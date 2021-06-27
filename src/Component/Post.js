import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Post = ({ backOn }) => {

    const [showData, setShowData] = useState('')
    const { handle } = useParams()

    const getPost = () => {
        axios.get('/posts/' + handle).then(
            (res) => {
                console.log(res.data);
                setShowData(res.data);
            }
        )
    }

    useEffect(() => {
        getPost();
        backOn();
    }, []);


    return (
        <div className='postBox'>

            <div key={showData.id}>
                <img className='postImg' src={showData.img} alt={showData.title} />
                <p className='badge bg-danger'>{showData.cat}</p>
                <h2>
                    {showData.title}</h2>

                <p className='text-mute'><small>{showData.time}</small></p>


                <p>{showData.desc}</p>

            </div>


        </div>
    )
}

export default Post
