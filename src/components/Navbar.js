import React from 'react'
import classes from './Navbar.module.css'
import logo from '../assets/huyhieu.png'
export default function Navbar() {
    return (
        <div className={classes.nav}>
            <img className={classes.nav_logo} src={logo} />
            <p className={classes.nav_text}>
                LỊCH CÔNG TÁC LÃNH ĐẠO CÔNG AN TỈNH LÂM ĐỒNG
            </p>
        </div>
    )
}
