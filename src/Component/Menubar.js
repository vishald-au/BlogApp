import { BiHomeAlt } from 'react-icons/bi';
import { FiBookmark } from 'react-icons/fi';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { FaRegUser } from 'react-icons/fa';


const Menubar = ({ NavLink }) => {
    return (
        <div className='menuBar'>
            <NavLink exact to='/' className='svg-box' activeClassName='active'>
                <BiHomeAlt />
            </NavLink>
            <NavLink exact to='/fav' className='svg-box' activeClassName='active'>
                <FiBookmark />
            </NavLink>
            <NavLink exact to='/add' className='svg-box' activeClassName='active'>
                <HiOutlineViewGridAdd />
            </NavLink>
            <NavLink exact to='/user' className='svg-box' activeClassName='active'>
                <FaRegUser className='userIcon' />
            </NavLink>
        </div>
    )
}

export default Menubar
