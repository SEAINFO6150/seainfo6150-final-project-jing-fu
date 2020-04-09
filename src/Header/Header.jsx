import React from 'react'

import { Link } from "react-router-dom";

import styles from "./Header.module.css";


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={"/"}>
                    <img className={styles.image} src="/images/nav.png" alt="logo" />
                </Link>
            </div>
            <nav className={styles.nav}>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="/category/avia-001">Aviation</Link>
                <Link className={styles.link} to="/category/comp-001">Computer</Link>
                <Link className={styles.link} to="/category/eng-001">Engineering</Link>
                <Link className={styles.link} to="/category/elec-001">Electronics</Link>
                <Link className={styles.link} to="/category/sci-001">Science</Link>
            </nav>
        </div>
    )
}

export default Header