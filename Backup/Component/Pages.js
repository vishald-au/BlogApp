import { useState } from 'react';
import Home from './Home';
import Fav from './Fav';
import Add from './Add';
import User from './User';
import Post from './Post';


const Pages = ({ Route, Switch, blogData, NavLink, openPost, postInfo }) => {




    return (
        <div className='pages'>
            <Switch>
                <Route path="/user">
                    <User />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/fav">
                    <Fav />
                </Route>
                <Route path="/post">
                    <Post NavLink={NavLink} postInfo={postInfo} />
                </Route>
                <Route path="/">
                    <Home blogData={blogData} NavLink={NavLink} openPost={openPost} />
                </Route>
            </Switch>
        </div>
    )
}

export default Pages
