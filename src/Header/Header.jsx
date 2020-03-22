import React from 'react'

import { Link } from "react-router-dom";

import styles from "./Header.module.css";


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={"/"}>
                    <img className={styles.image} src="/images/nav6.png" alt="logo image" />
                </Link>
            </div>
            <nav className={styles.nav}>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="/aviation">Aviation</Link>
                <Link className={styles.link} to="/computer">Computer</Link>
                <Link className={styles.link} to="/engineering">Engineering</Link>
                <Link className={styles.link} to="/electronics">Electronics</Link>
                <Link className={styles.link} to="/science">Science</Link>
                <Link className={styles.link} to="/about">About</Link>
            </nav>
        </div>
    )
}

export default Header