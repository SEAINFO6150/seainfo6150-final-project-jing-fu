import React from 'react'

import OrderSummary from './OrderSummary';
import Error from '../Error/Error';

import styles from './OrderForm.module.css';


const OrderForm = ({ magazine, onSubmit }) => {

  if (magazine == null) {
    return <Error />;
  }

  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <section className={styles.checkout}>
        <h2 className={styles.title}>Check out</h2>
        <div className={styles.main}>
          <section className={styles.shipping}>
            <h3>Shipping</h3>
            <div className={styles.ship}>
              <div className={styles.emailAddress}>
                <input className={styles.email} name="email" type="email" placeholder="Email Address *" required maxLength="50" pattern="^[^@ ]+@[\w\-]+(\.(?!(?:[^0-9]*[0-9]){3})[\w\-]{2,20})+$" title="Please enter a valid email address" />
              </div>
              <div className={styles.firstName}>
                <input className={styles.first} name="firstname" type="text" placeholder="First Name *" required pattern="^[a-zA-Z ]+$" title="This field must include only letters" />
              </div>
              <div className={styles.lastName} >
                <input className={styles.last} name="lastname" type="text" placeholder="Last Name *" required pattern="^[a-zA-Z ]{1,14}[a-zA-Z]$" title="This field must include only letters" />
              </div>
              <div className={styles.firstAddress}>
                <input className={styles.address1} name="address1" type="text" placeholder="Address 1 *" maxLength="27" minLength="2" required pattern="^[a-zA-Z0-9 \\.\\-\\&amp;\\/]{2,27}$" title="Please enter a valid address" />
              </div>
              <div className={styles.secondAddress}>
                <input className={styles.address2} name="address2" type="text" placeholder="Address 2" maxLength="27" pattern="^[a-zA-Z0-9 #\\.\\-\\&amp;\\/]{0,27}$" title="Please enter a valid address" />
              </div>
              <div className={styles.cityAddress}>
                <input className={styles.city} name="city" type="text" placeholder="City *" maxLength="27" minLength="2" required pattern="^[a-zA-Z ]{2,27}$" title="Please enter a valid city" />
              </div>
              <div className={styles.selectState}>
                <select className={styles.state} name="state" required >
                  <option value="">Select state *</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                  <option value="AA">APO/FPO AA</option>
                  <option value="AE">APO/FPO AE</option>
                  <option value="AP">APO/FPO AP</option>
                  <option value="AS">American Samoa</option>
                  <option value="GU">Guam</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="VI">Virgin Islands</option>
                </select>
              </div>
              <div className={styles.zipNum}>
                <input className={styles.zipcode} name="zipcode" type="tel" placeholder="Zip Code *" maxLength="5" required pattern="^[0-9]{5}$" title="Please enter a 5-digit number zip code" />
              </div>
              <div className={styles.telephone}>
                <input className={styles.tel} name="tel" type="tel" pattern="(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}" title="Please enter a 10-digit number telephone number" placeholder="(000)000-0000" maxLength="14" />
              </div>
            </div>
          </section>
          <section className={styles.billing}>
            <h3>Billing</h3>
            <div className={styles.card}>
              <ul className={styles.tabs}>
                <li className={styles.tab} role="presentation"><a href="#tab1" role="tab">Credit Card</a></li>
                <li className={styles.tab} role="presentation"><a href="https://www.paypal.com/us/signin" role="tab">PayPal</a></li>
              </ul>
              <div className={styles.cardNumber}>
                <input className={styles.cardNum} type="tel" placeholder="Credit card number *" required pattern="^[0-9]{16}$" title="Please enter a 16-digit credit card number" />
              </div>
              <div className={styles.cardLogo}><img className={styles.creditCard} src="/images/card-logo.jpg" alt="card logo" /></div>
              <div className={styles.expMonth}>
                <select className={styles.month} required >
                  <option value="">Month *</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className={styles.expYear}>
                <select className={styles.year} required >
                  <option value="">Year *</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </div>
              <div className={styles.cvv}>
                <input className={styles.cvvNum} placeholder="CVV *" required type="tel" pattern="^[0-9]{3,4}$" title="Please enter a 3 or 4-digit cvv number" />
                <div className={styles.cvvicon}>
                  <a href="https://www.anthonytravel.com/files/security_code_sample.jpg">
                    <img src="/images/cvv-icon.png" alt="cvv icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.giftOptions}>
              <div className={styles.giftIcon}>gift options</div>
              <div className={styles.gift1}>
                <input className={styles.giftOnly} type="checkbox" />
                <p className={styles.giftText}>I would like to give this as a gift.</p>
              </div>
              <div className={styles.gift2} >
                <input className={styles.giftSubscribe} type="checkbox" />
                <p className={styles.giftText}>I would like to give this as a gift and subscribe myself.</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <OrderSummary magazine={magazine} />
      <div>
        <input className={styles.submitOrder} type="submit" value="Submit Order" />
      </div>
    </form>
  )
}

export default OrderForm
