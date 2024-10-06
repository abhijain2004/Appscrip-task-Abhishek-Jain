// components/SideBar.js
import React from "react";
import styles from "./SideBar.module.css"; // Import the CSS module

function SideBar({ SideBarValue }) {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (value) => setOpen(open === value ? null : value);

  return (
    <div className={SideBarValue ? styles.sidebar : styles.sidebar1}>
      {/* Customizable */}
      <div className={styles.comp1}>
        <input type="checkbox" className={styles.checkbox} />
        CUSTOMIZABLE
      </div>

      {/* Ideal For */}
      <div className={styles.comp}>
        <div className={styles.comp2} onClick={() => handleOpen("idealFor")}>
          <span>IDEAL FOR </span>
          {open === "idealFor" ? (
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
        <span className={styles.subheading}>ALL</span>
        {open === "idealFor" && (
          <div className={styles.accordionBody}>
            <div className={styles.unselect}>Unselect all</div>
            <label><input type="checkbox" /> Men</label>
            <label><input type="checkbox" /> Women</label>
            <label><input type="checkbox" /> Baby & Kids</label>
          </div>
        )}
      </div>


      {/* Occasion */}
      <div className={styles.comp}>
        <div className={styles.comp2} onClick={() => handleOpen("occasion")}>
          <span>OCCASION</span>
          {open === "occasion" ? (
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
        <span className={styles.subheading}>ALL</span>
        {open === "occasion" && (
          <div className={styles.accordionBody}>
            <div className={styles.unselect}>Unselect all</div>
            <label><input type="checkbox" /> Casual</label>
            <label><input type="checkbox" /> Formal</label>
            <label><input type="checkbox" /> Party</label>
          </div>
        )}
      </div>

      {/* Work */}
      <div className={styles.comp}>
        <div className={styles.comp2} onClick={() => handleOpen("work")}>
          <span>WORK</span>
          {open === "work" ? (
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
        <span className={styles.subheading}>ALL</span>
        {open === "work" && (
          <div className={styles.accordionBody}>
            <div className={styles.unselect}>Unselect all</div>
            <label><input type="checkbox" /> Office</label>
            <label><input type="checkbox" /> Outdoor</label>
            <label><input type="checkbox" /> Home</label>
          </div>
        )}
      </div>

      {/* Fabric */}
      <div className={styles.comp}>
        <div className={styles.comp2} onClick={() => handleOpen("fabric")}>
          <span>FABRIC</span>
          {open === "fabric" ? (
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
        <span className={styles.subheading}>ALL</span>
        {open === "fabric" && (
          <div className={styles.accordionBody}>
            <div className={styles.unselect}>Unselect all</div>
            <label><input type="checkbox" /> Cotton</label>
            <label><input type="checkbox" /> Wool</label>
            <label><input type="checkbox" /> Silk</label>
          </div>
        )}
      </div>

      {/* Segment */}
      <div className={styles.comp}>
        <div className={styles.comp2} onClick={() => handleOpen("segment")}>
          <span>SEGMENT</span>
          {open === "segment" ? (
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
        <span className={styles.subheading}>ALL</span>
        {open === "segment" && (
          <div className={styles.accordionBody}>
            <div className={styles.unselect}>Unselect all</div>
            <label><input type="checkbox" /> Casual Wear</label>
            <label><input type="checkbox" /> Sportswear</label>
            <label><input type="checkbox" /> Formal Wear</label>
          </div>
        )}
      </div>

      {/* Suitable For */}
      <div className={styles.comp}>
        <div className={styles.comp2} onClick={() => handleOpen("suitableFor")}>
          <span>SUITABLE FOR</span>
          {open === "suitableFor" ? (
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
        <span className={styles.subheading}>ALL</span>
        {open === "suitableFor" && (
          <div className={styles.accordionBody}>
            <div className={styles.unselect}>Unselect all</div>
            <label><input type="checkbox" /> Indoor</label>
            <label><input type="checkbox" /> Outdoor</label>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
