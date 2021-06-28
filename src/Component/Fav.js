import axios from 'axios';
import { useState, useEffect } from 'react';


const Fav = ({ backOn }) => {

    const [showData, setShowData] = useState('')

    const getPost = () => {
        axios.get('/posts/' + 5).then(
            (res) => {
                console.log(res.data);
                setShowData(res.data);
            }
        )
    }

    useEffect(() => {
        getPost();
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

export default Fav
