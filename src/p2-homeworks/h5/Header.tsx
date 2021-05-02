import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.scss'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const toggleMenuHandler = () => {
      setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={s.header}>
          <nav className={`${s.nav} ${(isMenuOpen) && s.hideMenu}`}>
            <NavLink className={s.menuItem} to="/pre-junior">pre-junior</NavLink>
            <NavLink className={s.menuItem} to="/junior">junior</NavLink>
            <NavLink className={s.menuItem} to="/junior-plus">junior +</NavLink>
            <div className={s.toggleMenu} onClick={toggleMenuHandler}></div>
          </nav>
        </div>
    )
}

export default Header
