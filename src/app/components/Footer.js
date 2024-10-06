import  styles from "./Footer.module.css";




function Footer() {
  return (
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
    </footer>
  );
}

export default Footer;