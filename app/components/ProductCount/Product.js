"use client";

import React, { useState } from "react";
import styles from "./Product.module.css";

const Product = ({ outOfStock = false, product_image, productTitle }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className={styles.productCart}>
      {outOfStock && (
        <div className={styles.outOfStockBanner}>OUT OF STOCK</div>
      )}
      <div className={styles.productImage}>
        <div
          className={styles.imagePlaceholder}
          style={{ width: "100%", height: "100%" }}
        >
          <img
            src={product_image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="product"
          />
        </div>
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>
          {productTitle?.length > 30
            ? productTitle?.substring(0, 30) + "..."
            : productTitle}
        </h3>

        <p className={styles.priceInfo}>
          <span style={{ textDecoration: "underline" }}>Sign in </span>
          <span style={{ color: "grey" }}>
            or Create an account to see pricing{" "}
          </span>
          <button
            onClick={toggleWishlist}
            className={styles.heartButton}
            aria-label="Add to wishlist"
          >
            {isWishlisted ? (
              <span style={{ color: "red" }}>❤</span>
            ) : (
              <span>♡</span>
            )}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Product;
