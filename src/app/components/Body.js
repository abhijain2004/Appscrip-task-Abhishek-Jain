"use client";
import { useEffect, useState } from "react";
import SideBar from "./SideBar"; // Ensure you have this component
import ProductCard from "./ProductCard"; // Ensure you have this component
import styles from './Body.module.css'; // Import styles

function Body() {
  const [items, setItems] = useState([]);

  const products = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    products();
  }, []);

  const [value, setValue] = useState("RECOMMENDED");
  const [sideBarVisible, setSideBarVisible] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.main1}>
        <div className={styles.heading}>
          <span>{items.length} ITEMS</span>
          {sideBarVisible ? (
            <span onClick={() => setSideBarVisible(!sideBarVisible)} className={styles.hideFilter}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="size-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              HIDE FILTER
            </span>
          ) : (
            <span onClick={() => setSideBarVisible(!sideBarVisible)} className={styles.hideFilter}>
              SHOW FILTER
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="size-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          )}
        </div>
        <div className={styles.filter}>
          {value}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.drop}
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      <div className={styles.main2}>
        <SideBar SideBarValue={sideBarVisible} />
        {dropdownVisible && (
          <div className={styles.dropdown}>
            <ul>
              {["RECOMMENDED", "NEWEST FIRST", "POPULAR", "PRICE : HIGH TO LOW", "PRICE : LOW TO HIGH"].map(option => (
                <li
                  key={option}
                  className={value === option ? styles.active : ""}
                  onClick={() => setValue(option)}
                >
                  {value === option ? `✔ ${option}` : option}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className={sideBarVisible ? styles.items : styles.itemsHiddenSidebar}>
          {items.map((item) => (
            <ProductCard key={item.id} image={item.image} title={item.title} id={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
