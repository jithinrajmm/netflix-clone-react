import React, { useEffect, useState } from 'react'
import './Nav.css'
import net from './images/net.png'



function Nav() {

    const [show,handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false)
                
            }
        });
        return () => {
            window.removeEventListener('scroll');
        };
    },[])
    return (
        <div className={`nav_bar ${show && 'nav_black'}` }>
            <div>
                    <img className='nav_log' src={net} alt='logo' />
            </div>
            <div>
            <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='logo' />
             </div>
        </div>
    )
}

export default Nav;