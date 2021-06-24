import { useState } from 'react';
import Home from './Home';
import Fav from './Fav';
import Add from './Add';
import User from './User';
import Post from './Post';
import Search from './Search';


const Pages = ({ Route, Switch, blogData, NavLink, backOn, searchText }) => {




    return (
        <div className='pages'>
            <Switch>
                <Route path="/search">
                    <Search backOn={backOn} blogData={blogData} searchText={searchText} />
                </Route>
                <Route path="/user">
                    <User />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/fav">
                    <Fav />
                </Route>
                <Route path="/post/:handle">
                    <Post NavLink={NavLink} backOn={backOn} />
                </Route>
                <Route path="/">
                    <Home blogData={blogData} NavLink={NavLink} />
                </Route>
            </Switch>
        </div>
    )
}

export default Pages
