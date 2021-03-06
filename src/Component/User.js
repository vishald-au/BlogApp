
import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { RiDeleteBin7Line } from 'react-icons/ri';
import axios from 'axios';


const User = ({ blogData, showBlogs }) => {

    const googleClientId = '425457352579-6lqp0okmoq6mjsleo2559vrjqdfggp37.apps.googleusercontent.com'

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
            {loginSuccess === false ? <div class='buttonCenter'><GoogleLogin
                clientId={googleClientId}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={errorGoogle}
                cookiePolicy={'single_host_origin'}
                className='gButton'
            /></div> : <>
                    <div className='moveTop'>
                        <small className='smallText'>You are logged in as<img className='proImg m-1' src={userImg} alt={userEmail} />{userName} <button className='logBtn' onClick={handleLogout}>logout</button></small>
                    </div>

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


                </>

            }

        </div>
    )
}

export default User
