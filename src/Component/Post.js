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
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className='postBox'>

            <div key={showData.id}>
                <img className='postImg' src='https://i.pinimg.com/564x/9d/e3/27/9de327905d868d42708c8fc13de6168c.jpg' alt={showData.title} />
                {/*    <p className='badge bg-danger'>{showData.cat}</p> */}
                <h2>
                    {showData.title}</h2>

                {/*  <p className='text-mute'><small>{showData.time}</small></p> */}


                <p>{showData.body}</p>

            </div>


        </div>
    )
}

export default Post
