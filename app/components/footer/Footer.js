"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

import linkedin from "../../assets/linkedin.svg";
import insta from "../../assets/instagram.svg";
import gpay from "../../assets/gpay.png";
import amex from "../../assets/amex.svg";
import appay from "../../assets/appay.png";
import mastercard from "../../assets/master.svg";
import opay from "../../assets/opay.png";
import paypal from "../../assets/paypal.svg";
import flag from "../../assets/usa.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.newsletter}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from metta muse.</p>
          <div className={styles.newsletterInput}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contact}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5308</p>
          <p>customer.care@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>
            <Image src={flag} alt="flag" width={20} height={14} /> USD
          </p>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.footerLinks}>
        <div>
          <h4>metta muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <Image src={insta} alt="Instagram" width={24} height={24} />
            <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
          </div>

          <h4>metta muse ACCEPTS</h4>
          <div className={styles.paymentIcons}>
            <Image src={gpay} alt="GPay" width={40} height={24} />
            <Image src={mastercard} alt="MasterCard" width={40} height={24} />
            <Image src={amex} alt="Amex" width={40} height={24} />
            <Image src={appay} alt="ApplePay" width={40} height={24} />
            <Image src={paypal} alt="Paypal" width={40} height={24} />
            <Image src={opay} alt="OPay" width={40} height={24} />
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
