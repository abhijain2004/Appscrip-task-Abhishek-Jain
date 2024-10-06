"use client";
import styles from './NavBar.module.css';
import React, { useState } from 'react';
import Image from 'next/image';

function NavBar() {


  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu on hamburger click
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <div className={styles['navbar-container']}>
      <div className={styles['navbar-top']}>
        <Image src="/assets/frame.png" alt="frame" width={100} height={15} className={styles['hide']} />
        <Image src="/assets/frame.png" alt="frame" width={100} height={15} />
        <Image src="/assets/frame.png" alt="frame" width={100} height={15} className={styles['hide']} />
      </div>
      
      
      <div className={styles['navbar-2']}>
        <div className={styles['navbar-logo-container']}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={`size-6 ${styles['menu-icon']}` }onClick={toggleMenu}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

          <Image src="/assets/logo.png" alt="Logo" width={100} height={50} className={styles['navbar-logo']} />
        </div>
        <div className={styles['navbar-title-container']}>
          <h1 className={styles['navbar-title']}>LOGO</h1>
        </div>
        <div className={styles['navbar-icons-container']}>
          <Image src="/assets/search-normal.png" alt="search" width={25} height={25} />
          <Image src="/assets/heart.png" alt="heart" width={25} height={25} />
          <Image src="/assets/shopping-bag.png" alt="shopping bag" width={25} height={25} />
          <Image src="/assets/profile.png" alt="profile" width={25} height={25} className={styles['hide']} />
          <select name="language" className={styles['navbar-language-select']}>
            <option value="eng">ENG</option>
            <option value="hin">HIN</option>
          </select>
        </div>
      </div>

      
      <div className={styles['navbar-links']}>
        <span>SHOP</span>
        <span>SKILLS</span>
        <span>STORIES</span>
        <span>ABOUT</span>
        <span>CONTACT US</span>
      </div>
    </div>
    {menuOpen && (
      <div className={styles['navbar-menu']}>
        <span>SHOP</span>
        <span>SKILLS</span>
        <span>STORIES</span>
        <span>ABOUT</span>
        <span>CONTACT US</span>
      </div>
    )}
    </>
  );
}

export default NavBar;
