import React from 'react'

import { Link } from "react-router-dom";

import styles from "./Header.module.css";


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={"/"}>
                    <img className={styles.image} src="/images/nav3.png" alt="logo image" />
                </Link>
            </div>
            <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/aviation">Aviation</Link>
                <Link to="/computer">Computer</Link>
                <Link to="/engineering">Engineering</Link>
                <Link to="/electronics">Electronics</Link>
                <Link to="/science">Science</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}

export default Header