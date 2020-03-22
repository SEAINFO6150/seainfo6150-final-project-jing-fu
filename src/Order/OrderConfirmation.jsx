import React from 'react'

import {Link} from "react-router-dom";

import styles from './OrderConfirmation.module.css';
import OrderSummary from './OrderSummary';


const Confirm = ({magazine}) => {
    return (
        <div className={styles.container}>
            <section className={styles.head}>
                <Link to={"/"}>
                    <img className={styles.image} src="https://andrea-gomoll.de/wp-content/uploads/2019/01/button_shop_thankyou(pp_w768_h423).jpg" alt="thanks for order" />
                </Link>
                <h2>Order Confirmation</h2>
            </section>
            <section className={styles.content}>
                <p>Hello</p>
                <p>Thanks you for shopping with us. We'll send a confirmation when your items ships.
                <p>We hope to see you again soon.</p>
                </p>
                <p>TechMags.com</p>
            </section>
            <hr/>
            <OrderSummary className={styles.summary} magazine={magazine}/>
        </div>
    )
}

export default Confirm
