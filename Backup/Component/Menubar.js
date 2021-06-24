import { BiHomeAlt } from 'react-icons/bi';
import { FiBookmark } from 'react-icons/fi';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { FaRegUser } from 'react-icons/fa';


const Menubar = ({ NavLink, backReset }) => {
    return (
        <div className='menuBar'>
            <NavLink exact to='/' onClick={() => backReset()} className='svg-box' activeClassName='active'>
                <BiHomeAlt />
            </NavLink>
            <NavLink exact to='/fav' onClick={() => backReset()} className='svg-box' activeClassName='active'>
                <FiBookmark />
            </NavLink>
            <NavLink exact to='/add' onClick={() => backReset()} className='svg-box' activeClassName='active'>
                <HiOutlineViewGridAdd />
            </NavLink>
            <NavLink exact to='/user' onClick={() => backReset()} className='svg-box' activeClassName='active'>
                <FaRegUser className='userIcon' />
            </NavLink>
        </div>
    )
}

export default Menubar
