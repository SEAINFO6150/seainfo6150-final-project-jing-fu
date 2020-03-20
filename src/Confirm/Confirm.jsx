import React from 'react'

import {Link} from "react-router-dom";

import styles from './Confirm.module.css';


const Confirm = () => {
    return (
        <div className={styles.container}>
            <section className={styles.head}>
                <Link to={"/"}>
                    <img className={styles.image} src="/images/nav3.png" alt="logo image" />
                </Link>
                <h2>Order Confirmation</h2>
            </section>
            <section className={styles.content}>
                <p>Hello</p>
                <p>Thanks you for shopping with us. We'll send a confirmation when your items ships.
                <p>We hope to see you again soon.</p>
                </p>
                <p>TechMagazine.com</p>
            </section>
            
        </div>
    )
}

export default Confirm
