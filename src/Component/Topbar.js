import { HiMenuAlt1 } from 'react-icons/hi';
import { FaMoon } from 'react-icons/fa';
import { RiSearch2Line } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';
import { useState, useRef } from 'react';

const Topbar = ({ changeDark, backButton, backReset, NavLink, assignSearch, searchText }) => {

    const searchInput = useRef()

    const [showInput, setShowInput] = useState(false)



    return (
        <div className='topBar'>
            <div className='row positionchange'>
                <div className='col-6'>
                    {backButton ?
                        (<NavLink className='zindex' exact to='/' onClick={() => backReset()}>
                            <IoIosArrowBack />
                        </NavLink>)
                        :
                        (<NavLink className='zindex' exact to='/' onClick={() => backReset()}>
                            <HiMenuAlt1 />
                        </NavLink>)

                    }
                </div>
                <div className='col-6 text-right '>
                    <NavLink exact to='/search'>
                        <input ref={searchInput} className='searchInput' onChange={(e) => assignSearch(e.target.value.toLowerCase())} value={searchText} placeholder='Search blogs' autofocus />
                    </NavLink>
                    {/* <RiSearch2Line /> */}
                    <FaMoon onClick={changeDark} className='moonIcon zindex' /></div>
            </div>
        </div >
    )
}

export default Topbar
