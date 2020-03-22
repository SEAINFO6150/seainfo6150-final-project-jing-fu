import React from 'react'

import { Link } from "react-router-dom";

import styles from './Error.module.css';

const Error = () => {
    return (
        <div className={styles.container}>
            <h1>ERROR 404 </h1>
            <hr/>
            <h3>- future not found -</h3>
            <img className={styles.image} src="/images/404_not_found.png" alt="404 warning" />
            <p className={styles.message}>We're sorry that you requested page could not be found.Please go back to the <Link to={"/"}>Home page</Link> or you can contact us at <a href="mailto:techmagazines@gmail.com">techmagazines@gmail.com</a>
            </p>
        </div>
    )
}

export default Error
