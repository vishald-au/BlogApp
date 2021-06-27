
import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { RiDeleteBin7Line } from 'react-icons/ri';
import axios from 'axios';


const User = ({ blogData, showBlogs }) => {

    const googleClientId = '463076630886-v2jl6fq6l7hdrvnhp962o88vs66s499s.apps.googleusercontent.com'

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userImg, setUserImg] = useState('')
    const [loginSuccess, setLoginSuccess] = useState(false)

    const responseGoogle = (res) => {
        console.log(res);
        setUserName(res.profileObj.name)
        setUserEmail(res.profileObj.email)
        setUserImg(res.profileObj.imageUrl)
        setLoginSuccess(true)
    }
    const handleLogout = () => {
        setUserName('')
        setUserEmail('')
        setUserImg('')
        setLoginSuccess(false)
    }

    const errorGoogle = (err) => {
        console.log(err);
    }

    const handleDel = (id) => {
        console.log(id)
        axios.delete('/posts/' + id).then(
            (res) => {
                console.log(res.status)
                showBlogs()
            }
        )
    }


    return (
        <div className='profilePage'>
            {!loginSuccess ? <GoogleLogin
                clientId={googleClientId}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={errorGoogle}
                cookiePolicy={'single_host_origin'}
                className='gButton'
                isSignedIn='true'
            /> : <>
                    <div className='moveTop'>
                        <small className='smallText'>You are logged in as<img className='proImg m-1' src={userImg} alt={userEmail} />{userName} - <button className='logBtn' onClick={handleLogout}>logout</button></small>
                    </div>
                    <div>
                        <table class="table">

                            <tbody>
                                {blogData.map(blog => (
                                    <tr key={blog.id}>
                                        <th scope="row">{blog.id}</th>
                                        <td>{blog.title}</td>
                                        <td className='noExtra'><button className='delBtn' onClick={() => handleDel(blog.id)}><RiDeleteBin7Line /></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </>

            }

        </div>
    )
}

export default User
