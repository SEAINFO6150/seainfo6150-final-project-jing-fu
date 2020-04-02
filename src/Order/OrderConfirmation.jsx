import React from 'react'

import styles from './OrderConfirmation.module.css';
import OrderSummary from './OrderSummary';
import Error from '../Error/Error';

const Confirm = ({ magazine, submittedForm }) => {

    if (magazine == null) {
        return <Error />;
    }

    return (
        <div className={styles.container}>
            <section className={styles.head}>
                <img className={styles.image} src="../images/thank-you.jpg" alt="thanks for order" />
                <h2>Order Confirmation</h2>
            </section>
            <section className={styles.content}>
                <h6>Hello {submittedForm.get('firstname')}</h6>
                <p>Thanks you for shopping with us. We'll send a confirmation when your items ships.<br/>
                We hope to see you again soon.<br/>
                TechMags.com
                </p>
            </section>
            <hr />
            <section className={styles.shipping}>
                <h3>Shipping Infomation</h3>
                <table>
                    <tbody>
                        <tr>
                            <td className={styles.firstCol}>Email:</td>
                            <td className={styles.secCol}>{submittedForm.get('email')}</td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>{submittedForm.get('firstname')} {submittedForm.get('lastname')}</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>{submittedForm.get('address1')} {submittedForm.get('address2')}, {submittedForm.get('city')}, {submittedForm.get('state')}, {submittedForm.get('zipcode')}</td>
                        </tr>
                        <tr>
                            <td>Tel:</td>
                            <td>{submittedForm.get('tel')}</td>
                        </tr>
                    </tbody>

                </table>
            </section>
            <OrderSummary className={styles.summary} magazine={magazine} />
        </div>
    )
}

export default Confirm
