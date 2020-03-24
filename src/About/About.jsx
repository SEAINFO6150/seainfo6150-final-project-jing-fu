import React from 'react'

import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.aboutus}>
      <h3 className={styles.title}>Tech Mag Company</h3>
        <img src="../images/about-us-title-image.png" alt="about us" />
      </section>
      <section className={styles.companyDesc}>
        <article>
          <h4 className={styles.title}>About TechMags.com</h4>
        <p className={styles.desc}><span className={styles.initial}>S</span>ince 1999, TechMags.com has been the trusted online source for technical magazine subscriptions. We are proud to provide you with amazing deals and huge discounts on your favorite magazines.
        Subscription prices are updated daily to reflect our lowest price approved by the publishers. A long-standing personal relationship with each publisher allows us to offer you great deals on your favorite subscriptions and to deliver prompt and reliable service.<br/><br/>
        Our team is dedicated to providing you with the lowest prices on top magazines, and we work closely with publishers to make even bigger savings available to you. 
        <ul>
          <li>
            <strong>The absolute lowest prices: </strong>We already offer the lowest, prices for all our magazines on our site, but that doesn’t mean we ever stop negotiating to get even lower prices for you.
          </li>
          <li>
          <strong>Easy cancellation and refunds: </strong>No longer happy with your subscription? No problem—we offer a 100% money-back guarantee. Just cancel within 6 months of ordering and we’ll immediately refund you for undelivered issues.
          </li>
          <li>
          <strong>Crystal-clear policies: </strong>Some surprises are good, but surprises that cost you extra money deﬁnitely aren’t. That’s why we promise to never charge any extra or hidden fees and to not, unless you opt in, automatically renew your subscription.
          </li>
        </ul>
        <span className={styles.initial}>T</span>hese limited-time special offers are updated regularly and often involve some of todays most popular magazines and our customers favorite titles.
        From celebrity news to sports to fashion, TechMagas.com offers subscriptions to over a thousand magazines. <br/><br/>Our broad selection of magazines assures that we have something for everyone, and our gift subscription program makes it simple to give a gift that will last all year long.
        <h4 className={styles.title}>Contact us</h4>
        <p className={styles.desc}><span className={styles.initial}>Y</span>ou can reach us by phone at 1-800-TECHMAGS (1-800-022-1310) or you can <a href="mailto:techmagas@gmail.com">email us.</a></p>
        </p>
        </article>
         </section>
    </div>
  )
}

export default About