import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Add = ({ showBlogs }) => {

    const firsstfocus = useRef();

    useEffect(() => {
        firsstfocus.current.focus();
    }, []);

    const [title, setTitle] = useState()
    /*    const [cat, setCat] = useState() */
    const [desc, setDesc] = useState()
    /*     const [img, setImg] = useState() */

    const handleSubmit = (e) => {
        e.preventDefault()
        const postData = {
            title: title,
            body: desc,
            /* cat: cat,
            img: img,
            time: new Date().toLocaleDateString() */
        }
        setTitle('')
        /*  setCat('') */
        setDesc('')/* 
        setImg('') */
        axios.post('/posts/', postData).then(
            (res) => {
                console.log(postData)
                showBlogs()
            }
        )
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={firsstfocus} className='commonInput' placeholder='Title' onChange={(e) => setTitle(e.target.value)} value={title} required />
                {/*     <input className='commonInput' placeholder='Category' onChange={(e) => setCat(e.target.value)} value={cat} required /> */}
                <textarea className='commonInput textArea' placeholder='Description' onChange={(e) => setDesc(e.target.value)} value={desc} required />
                {/*  <input className='commonInput' placeholder='Image URL' onChange={(e) => setImg(e.target.value)} value={img} /> */}
                {/* <button className='commonInput buttonUpload'><AiOutlineCloudUpload className='m-1' />{img ? 'Uploaded' : 'Upload Image'}</button> */}
                <input className='commonInput saveButton' type='Submit' value='Save' />
            </form>
        </div>
    )
}

export default Add
