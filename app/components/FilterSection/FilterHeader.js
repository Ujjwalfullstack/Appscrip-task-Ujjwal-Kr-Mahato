"use client";
import { useState } from "react";
import styles from "./FilterHeader.module.css";

const FilterHeader = ({
  showfilter,
  setShowFilter,
  selectedFilter,
  setSelectedFilter,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const options = [
    "RECOMMENDED",
    "Newest First",
    "Popular",
    "Price: High to Low",
    "Price: Low to High",
  ];

  const handleSelect = (option) => {
    setSelectedFilter(option);
    setShowDropdown(false);
  };

  return (
    <div className={styles.exactHeader}>
      <div className={styles.exactTopRow}>
        <span className={styles.exactItemCount}>3425 ITEMS</span>
        <span
          className={styles.exactHideFilter}
          onClick={() => setShowFilter(!showfilter)}
        >
          <span className={styles.arrow}>&#x2039;</span>
          HIDE FILTER
        </span>
      </div>

      <div className={styles.exactRecommended}>
        <div
          className={styles.exactRecommendedText}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedFilter}
        </div>

        {showDropdown && (
          <div className={styles.exactDropdown}>
            {options.map((option) => (
              <div
                key={option}
                className={styles.exactDropdownItem}
                onClick={() => handleSelect(option)}
              >
                {option}
                {selectedFilter === option && (
                  <span className={styles.tick}>✔</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterHeader;
