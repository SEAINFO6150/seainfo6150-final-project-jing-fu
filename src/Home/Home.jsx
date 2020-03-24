import React from 'react'
import Form from "../Form/Form";
import MagList from "../MagList/MagList";

import styles from './Home.module.css';

import magazines from ".././data/magazines.json";

const Home = () => {

    const bestSellMags = magazines.slice(0, 4);

    const recommendMags = magazines.slice(4, 8);

    return (
        <div className={styles.container}>
            <section className={styles.top}>
                <div className={styles.intro}>
                    <p className={styles.desc}> Since 1999, TechMags.com has been the trusted online source for technical magazine subscriptions.
                        We are proud to provide you with amazing deals and huge discounts on your favorite magazines.
                        <span className={styles.learnmore}>
                            <a className={styles.link} href="/about">Learn More</a>
                        </span>
                    </p>
                </div>
                <div className={styles.signup}>
                    <h4>Newsletter Signup</h4>
                    <Form/>
                </div>
            </section>
            <section>
            <h3>Best Sellers:</h3>
            <hr/>
            <MagList magazines={bestSellMags} />
            </section>
            <section>
            <h3>Recommend for you:</h3>
            <hr/>
            <MagList magazines={recommendMags} />
            </section>
            
        </div>
    )
}

export default Home
