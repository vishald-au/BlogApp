import { HiMenuAlt1 } from 'react-icons/hi';
import { FaMoon } from 'react-icons/fa';
import { RiSearch2Line } from 'react-icons/ri';


const Topbar = ({ changeDark }) => {
    return (
        <div className='topBar'>
            <div className='row'>
                <div className='col-6'>
                    <HiMenuAlt1 />
                </div>
                <div className='col-6 text-right'><RiSearch2Line /><FaMoon onClick={changeDark} className='moonIcon' /></div>
            </div>
        </div>
    )
}

export default Topbar
