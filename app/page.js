"use client";

import FilterSection from "../app/components/FilterSection/FilterSection";
import FilterHeader from "../app/components/FilterSection/FilterHeader";
import Product from "../app/components/ProductCount/Product";
import { useEffect, useState } from "react";

export default function Home() {
  const [showfilter, setshowfilter] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("RECOMMENDED");

  const [activeFilters, setActiveFilters] = useState({});
  console.log("Hello active filter", activeFilters);

  const handleFiltersChange = (filters) => {
    setActiveFilters(filters);
  };

  const [product_data, setproduct_data] = useState();
  console.log("product_data==", product_data);
  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setproduct_data(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("selectedFilter===", selectedFilter);
  useEffect(() => {
    if (product_data) {
      let sortedData = [...product_data];
      if (selectedFilter === "Price: High to Low") {
        sortedData.sort((a, b) => b.price - a.price);
        setproduct_data(sortedData);
      } else if (selectedFilter === "Price: Low to High") {
        sortedData.sort((a, b) => a.price - b.price);
        setproduct_data(sortedData);
      }
      if (activeFilters?.idealFor) {
        const filteredProducts = product_data.filter((product) =>
          activeFilters?.idealFor?.some((category) =>
            product.title.toLowerCase().includes(category.toLowerCase())
          )
        );
        console.log("Hiiiiiiiii", filteredProducts);
        setproduct_data(filteredProducts);
      } else {
        fetchProducts();
      }
    }
  }, [selectedFilter, activeFilters]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0px 20px 0px 20px",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          padding: "60px",
        }}
      >
        <h2 style={{ display: "block" }}>DISCOVER OUR PRODUCTS</h2>

        <span style={{ display: "block" }}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        </span>
        <span style={{ display: "block" }}>
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </span>
      </div>

      <div style={{}}>
        <FilterHeader
          showfilter={showfilter}
          setShowFilter={setshowfilter}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        {showfilter && (
          <div style={{ width: showfilter ? "25%" : "" }}>
            <FilterSection onFiltersChange={handleFiltersChange} />
          </div>
        )}

        <div
          style={{
            width: showfilter ? "75%" : "100%",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {product_data?.map((item, index) => (
            <div key={index}>
              <Product product_image={item.image} productTitle={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
