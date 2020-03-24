import React from 'react'

import styles from './OrderConfirmation.module.css';
import OrderSummary from './OrderSummary';
import Error from '../Error/Error';

const Confirm = ({ magazine }) => {
    
    if (magazine == null) {
        return <Error/>;
      }

    return (
        <div className={styles.container}>
            <section className={styles.head}>
                <img className={styles.image} src="../images/thank-you.jpg" alt="thanks for order" />
                <h2>Order Confirmation</h2>
            </section>
            <section className={styles.content}>
                <p>Hello</p>
                <p>Thanks you for shopping with us. We'll send a confirmation when your items ships.
                <p>We hope to see you again soon.</p>
                </p>
                <p>TechMags.com</p>
            </section>
            <hr />
            <OrderSummary className={styles.summary} magazine={magazine} />
        </div>
    )
}

export default Confirm
