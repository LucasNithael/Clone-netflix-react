import React from 'react'
import './Header.css'

const Header = ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-4493-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABd1B2sFZv59PCVFdhL-OXENKv6XIPZ0Q5XZ0v096ELca6ac_8SKNluPF5ydSf4wwn9G0AonvGNb2DtMbw3rOtK-WRcXbTzd4LpLY.png?r=2da" alt="user" />
                </a>
            </div>
        </header>
    )
}

export default Header