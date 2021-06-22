import Home from './Home';
import Fav from './Fav';
import Add from './Add';
import User from './User';

const Pages = ({ Route, Switch, blogData }) => {
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
                <Route path="/">
                    <Home blogData={blogData} />
                </Route>
            </Switch>
        </div>
    )
}

export default Pages
