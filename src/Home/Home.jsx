import React from 'react'
import Form from "../Form/Form";
import MagList from "../MagList/MagList";

import styles from './Home.module.css';

import magazines from ".././data/magazines.json";

const Home = () => {

    const bestSellMags = magazines.slice(0,4);
    
    const recommendMags = magazines.slice(4,8);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.intro}>
                    <p> Since 2000, TechMagazines.com has been the trusted online source for magazine subscriptions.
                        We are proud to provide you with amazing deals and huge discounts on your favorite magazines.
                    To place an order, visit our easy to use subscription manager. You can also reach us by phone at 1-800-TECHMAGAZINES (1-800-022-1310) or you can email us.</p>
                    <a href="">learn more</a>
                </div>
                <div className={styles.signup}>
                    <h4>Newsletter Signup</h4>
                    <input type="text" /> <input type="submit" value="Signup" />
                </div>
            </div>
            <h3>Best Sellers:</h3>
            <MagList magazines={bestSellMags}/>
            <h3>Recommend for you:</h3>
            <MagList magazines={recommendMags}/>
            <Form />
        </div>
    )
}

export default Home
