import { HiMenuAlt1 } from 'react-icons/hi';
import { FaMoon } from 'react-icons/fa';
import { RiSearch2Line } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';


const Topbar = ({ changeDark, backButton, backReset, NavLink }) => {
    return (
        <div className='topBar'>
            <div className='row'>
                <div className='col-6'>
                    {backButton ?
                        (<NavLink exact to='/' onClick={() => backReset()}><IoIosArrowBack /></NavLink>)
                        :
                        <HiMenuAlt1 />}
                </div>
                <div className='col-6 text-right'><RiSearch2Line /><FaMoon onClick={changeDark} className='moonIcon' /></div>
            </div>
        </div>
    )
}

export default Topbar
