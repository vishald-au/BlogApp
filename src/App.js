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

  const [postShow, setPostShow] = useState()

  const openPost = (id) => {
    console.log(id)
    setPostShow(blogData.filter((blog) => blog.id === id))
  }




  return (
    <div className={'bg ' + (dark && 'dark')}>
      <div className='App'>
        <Router>
          <Topbar changeDark={changeDark} postShow={postShow} />
          <Pages Switch={Switch} Route={Route} blogData={blogData} NavLink={NavLink} openPost={openPost} postShow={postShow} />
          <Menubar NavLink={NavLink} />
        </Router>
      </div>
    </div >
  );
}

export default App;
