import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.scss'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const toggleMenuHandler = () => {
      setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={s.header}
             onMouseEnter={() =>{setIsMenuOpen(true)}}
             onMouseLeave={() =>{setIsMenuOpen(false)}}>
          <nav className={`${s.nav} ${(!isMenuOpen) && s.hideMenu}`}>
            <NavLink className={s.menuItem} to="/pre-junior" activeClassName={s.activeLink}>pre-junior</NavLink>
            <NavLink className={s.menuItem} to="/junior" activeClassName={s.activeLink}>junior</NavLink>
            <NavLink className={s.menuItem} to="/junior-plus" activeClassName={s.activeLink}>junior +</NavLink>
            <div className={s.toggleMenu} onClick={toggleMenuHandler}></div>
          </nav>
        </div>
    )
}

export default Header
