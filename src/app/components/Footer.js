"use client";
import  styles from "./Footer.module.css";
import React from "react";
import { useState } from "react"; 



function Footer() {

   const [open, setOpen] = useState(null);
   const handleOpen = (value) => setOpen(open === value ? null : value);

  return (
    <>
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-input-container"]}>
          <span className={styles["footer-title"]}>BE THE FIRST TO KNOW</span>
          <span>Sign up for updates from metta muse.</span>
          <div className={styles["footer-input-box"]}>
          <input
            type="text"
            placeholder="Enter your email"
            className={styles["footer-input"]}
          />
          <button>Subscribe</button>
          </div>
        </div>
        <div className={styles["footer-title-container"]}> <div className={styles["footer-title"]}>CONTACT US</div>
        <span>+44 221 133 5360</span>
        <span>customercare@mettamuse.com</span>
        <div className={styles["footer-title"]}>CURRENCY</div>
        <img src="assets/Language.png"/>
        <span style={{fontSize:"12px",marginTop:"10px"}}>Transactions will be completed in Euros and a currency reference is available on hover.</span>
        </div>
      </div>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-part2"]}>
        <div className={styles["footer-title-container"]}>
         <span className={styles["footer-title"]}>metta muse</span>
         <span>About us</span>
         <span>Stories</span>
         <span>Artisans</span>
         <span>Boutiques</span>
         <span>Contact Us</span>
         <span>EU Compliances Docs</span>
         </div>
        <div className={styles["footer-title-container"]}>
         <span className={styles["footer-title"]}>QUICK LINKS</span>
         <span>Orders & Shipping</span>
         <span>Join/Login as a Seller</span>
         <span>Payment & Pricing</span>
         <span>Return & Refunds</span>
         <span>FAQs</span>
         <span>Privacy Policy</span>
         <span>Terms & Conditions</span>
         </div>
        </div>
        <div className={styles["footer-title-container"]}>
        <span className={styles["footer-title"]}>FOLLOW US</span>
        <div style={{display:"flex",gap:"10px", marginBottom:"60px", marginTop:"10px"}}>
          <img src="assets/insta.png" />
          <img src="assets/linkedin.png" />
        </div>
        <span>metta muse{" "}<span className={styles["footer-title"]}>ACCEPTS</span> </span>
        <div className={styles["footer-rates"]}><img src="assets/R1.png"/><img src="assets/R2.png"/><img src="assets/R3.png"/><img src="assets/R4.png"/><img src="assets/R5.png"/><img src="assets/R6.png"/></div>
        </div>
      </div>
      <div style={{textAlign:"center", marginTop:"20px"}}>Copyright © 2023 mettamuse. All rights reserved.</div>
    </footer>

    <footer className={styles.footerMobile}>
    <div className={styles["footer-input-container-mobile"]}>
          <span className={styles["footer-title"]}>BE THE FIRST TO KNOW</span>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
          </span>
          <div className={styles["footer-input-box"]}>
          <input
            type="text"
            placeholder="Enter your e-mail..."
            className={styles["footer-input"]}
          />
          <button>Subscribe</button>
          </div>
        </div>
        <div className={styles["footer-input-container-mobile"]}>
        <span className={styles["footer-title"]}>CALL US</span>
        <div style={{display:"flex",gap:"20px"}}><span style={{fontSize:"12px"}}>+44 221 133 5360</span>
        <span style={{fontSize:"12px"}}>customercare@mettamuse.com</span>
        </div>
        </div>
        <div className={styles["footer-input-container-mobile"]}>
        <div className={styles["footer-title"]}>CURRENCY</div>
        <img src="assets/Language.png" height={35} width={100}/>
        </div>

        <div className={styles.comp}>
        <div className={styles["footerDropdown"]} onClick={() => handleOpen("mettaMuse")}>
          <span className={styles["footer-title"]}>mettamuse</span>
          {open === "mettaMuse" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              className={styles.size1 + " " + styles.down}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              className={styles.size1 + " " + styles.down}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          )}
        </div>
        {open === "mettaMuse" && (
          <div className={styles.accordionBody}>
          <span>About us</span>
         <span>Stories</span>
         <span>Artisans</span>
         <span>Boutiques</span>
         <span>Contact Us</span>
         <span>EU Compliances Docs</span>
          </div>
        )}
        </div>

<div className={styles.comp}>
<div className={styles["footerDropdown"]} onClick={() => handleOpen("quick")}>
          <span className={styles["footer-title"]}>QUICK LINKS</span>
          {open === "quick" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              className={styles.size1 + " " + styles.down}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              className={styles.size1 + " " + styles.down}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          )}
        </div>
        {open === "quick" && (
          <div className={styles.accordionBody}>
           <span>Orders & Shipping</span>
         <span>Join/Login as a Seller</span>
         <span>Payment & Pricing</span>
         <span>Return & Refunds</span>
         <span>FAQs</span>
         <span>Privacy Policy</span>
         <span>Terms & Conditions</span>
          </div>
        )}
       </div>

       <div className={styles.comp}>
<div className={styles["footerDropdown"]} onClick={() => handleOpen("follow")}>
          <span className={styles["footer-title"]}>FOLLOW US</span>
          {open === "follow" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              className={styles.size1 + " " + styles.down}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              className={styles.size1 + " " + styles.down}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          )}
        </div>
        {open === "follow" && (
          <div style={{display:"flex",gap:"10px",paddingLeft:"10vw",paddingRight:"10vw"}} >
          <img src="assets/insta.png" />
          <img src="assets/linkedin.png" />
        </div>
        )}
       </div>
       <div style={{paddingLeft:"10vw",paddingRight:"10vw"}} >
       <span>metta muse{" "}<span className={styles["footer-title"]}>ACCEPTS</span> </span>
        <div className={styles["footer-rates"]}><img src="assets/R1.png"/><img src="assets/R2.png"/><img src="assets/R3.png"/><img src="assets/R4.png"/><img src="assets/R5.png"/><img src="assets/R6.png"/></div>
        </div>
       <span style={{textAlign:"center", marginTop:"15px"}}>Copyright © 2023 mettamuse. All rights reserved.</span>
      
    </footer>

    </>
  );
}

export default Footer;