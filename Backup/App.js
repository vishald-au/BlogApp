import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Topbar from './Component/Topbar';
import Pages from './Component/Pages';
import Menubar from './Component/Menubar';
import axios from 'axios';


function App() {

  axios.defaults.baseURL = 'http://localhost:5000/'

  const [blogData, setBlogData] = useState([])

  const showBlogs = () => {
    axios.get('/posts').then(
      (res) => {
        console.log(res.data);
        setBlogData(res.data);
      }
    )
  }

  useEffect(() => {
    showBlogs();
  }, []);

  const [dark, setDark] = useState(false);

  const changeDark = () => {
    dark ? setDark(false) : setDark(true)
  }

  const [postShow, setPostShow] = useState();
  const [postInfo, setPostInfo] = useState('');
  const [backButton, setBackButton] = useState(false);

  const openPost = (id) => {
    setBackButton(true)
    /*   setPostShow(blogData.filter((blog) => blog.id === id)); */
    setPostInfo(id)
  }

  const backReset = () => {
    setBackButton(false)
  }


  return (
    <div className={'bg ' + (dark && 'dark')}>
      <div className='App'>
        <Router>
          <Topbar changeDark={changeDark} backButton={backButton} backReset={backReset} NavLink={NavLink} />
          <Pages Switch={Switch} Route={Route} blogData={blogData} NavLink={NavLink} openPost={openPost} postInfo={postInfo} />
          <Menubar NavLink={NavLink} backReset={backReset} />
        </Router>
      </div>
    </div >
  );
}

export default App;
