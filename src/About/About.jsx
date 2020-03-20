import React from 'react'

import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.companyPic}>
        <img src="/images/treefrog.jpg" alt="tree frog" />
      </section>
      <section className={styles.companyDesc}>
        <h3>Tech Mag Company</h3>
        <article>
          <h5>About techmagazine.com</h5>
        <p>Since 1999, Magazines.com has been the trusted online source for magazine subscriptions. We are proud to provide you with amazing deals and huge discounts on your favorite magazines.
        Subscription prices are updated daily to reflect our lowest price approved by the publishers. A long-standing personal relationship with each publisher allows us to offer you great deals on your favorite subscriptions and to deliver prompt and reliable service.
        Our team is dedicated to providing you with the lowest prices on top magazines, and we work closely with publishers to make even bigger savings available to you. These limited-time special offers are updated regularly and often involve some of today?s most popular magazines and our customers? favorite titles.
        From celebrity news to sports to fashion, Magazines.com offers subscriptions to over a thousand magazines. Our broad selection of magazines assures that we have something for everyone, and our gift subscription program makes it simple to give a gift that will last all year long.
        To place an order, visit our easy to use subscription manager. You can also reach us by phone at 1-800-MAGAZINES (1-800-624-2946) or you can email us.
        <h5>Join Our Online Community</h5>
        <p>
        Do you anticipate the arrival of your favorite magazine each month? Do you savor your favorite reads after a long day at the computer? If this describes you, then you?ll love our online community. We enjoy talking about anything and everything related to magazines and magazine culture on Twitter, Facebook, Pinterest and our blog with others who love magazines as much as we do. Join us!</p>
        </p>
        </article>
         </section>
    </div>
  )
}

export default About