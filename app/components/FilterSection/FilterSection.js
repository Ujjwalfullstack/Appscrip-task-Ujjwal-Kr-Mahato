"use client";
import React, { useState, useEffect } from "react";
import "./filter.css";

const FilterSection = ({ onFiltersChange }) => {
  const [isOpen, setIsOpen] = useState({
    idealFor: false,
    occasion: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterial: false,
    pattern: false,
  });

  const [isCustomizable, setIsCustomizable] = useState(false);

  const [filters, setFilters] = useState({
    idealFor: [],
    occasion: [],
    fabric: [],
    segment: [],
    suitableFor: [],
    rawMaterial: [],
    pattern: [],
  });

  const handleToggle = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCheckboxChange = (section, value) => {
    setFilters((prev) => {
      const alreadySelected = prev[section].includes(value);
      const updatedSection = alreadySelected
        ? prev[section].filter((v) => v !== value)
        : [...prev[section], value];
      return {
        ...prev,
        [section]: updatedSection,
      };
    });
  };

  // Update parent on change
  useEffect(() => {
    onFiltersChange({ ...filters, isCustomizable });
  }, [filters, isCustomizable]);

  return (
    <div className="filters-container">
      {/* Header */}
      <div className="filter-header customizable-header">
        <label className="customizable-checkbox-wrapper">
          <input
            type="checkbox"
            checked={isCustomizable}
            onChange={() => setIsCustomizable(!isCustomizable)}
          />
          <span className="customizable-button">CUSTOMIZABLE</span>
        </label>
        <hr className="divider" />
      </div>

      {/* IDEAL FOR */}
      <div className="filter-group">
        <div className="filter-title-row">
          <h3 className="filter-title">IDEAL FOR</h3>
          <button
            className="arrow-btn"
            onClick={() => handleToggle("idealFor")}
          >
            {isOpen.idealFor ? "▲" : "▼"}
          </button>
        </div>
        {isOpen.idealFor && (
          <div className="filter-options">
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("idealFor", "Mens")}
              />{" "}
              Men
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("idealFor", "Women")}
              />{" "}
              Women
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("idealFor", "Baby & Kids")}
              />{" "}
              Baby & Kids
            </label>
          </div>
        )}
        <hr className="divider" />
      </div>

      {/* OCCASION */}
      <div className="filter-group">
        <div className="filter-title-row">
          <h3 className="filter-title">OCCASION</h3>
          <button
            className="arrow-btn"
            onClick={() => handleToggle("occasion")}
          >
            {isOpen.occasion ? "▲" : "▼"}
          </button>
        </div>
        {isOpen.occasion && (
          <div className="filter-options">
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("occasion", "WORK")}
              />{" "}
              WORK
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("occasion", "Party")}
              />{" "}
              Party
            </label>
          </div>
        )}
        <hr className="divider" />
      </div>

      {/* FABRIC */}
      <div className="filter-group">
        <div className="filter-title-row">
          <h3 className="filter-title">FABRIC</h3>
          <button className="arrow-btn" onClick={() => handleToggle("fabric")}>
            {isOpen.fabric ? "▲" : "▼"}
          </button>
        </div>
        {isOpen.fabric && (
          <div className="filter-options">
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("fabric", "Cotton")}
              />{" "}
              Cotton
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("fabric", "Silk")}
              />{" "}
              Silk
            </label>
          </div>
        )}
        <hr className="divider" />
      </div>

      {/* SEGMENT */}
      <div className="filter-group">
        <div className="filter-title-row">
          <h3 className="filter-title">SEGMENT</h3>
          <button className="arrow-btn" onClick={() => handleToggle("segment")}>
            {isOpen.segment ? "▲" : "▼"}
          </button>
        </div>
        {isOpen.segment && (
          <div className="filter-options">
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("segment", "All")}
              />{" "}
              All
            </label>
          </div>
        )}
        <hr className="divider" />
      </div>

      {/* SUITABLE FOR */}
      <div className="filter-group">
        <div className="filter-title-row">
          <h3 className="filter-title">SUITABLE FOR</h3>
          <button
            className="arrow-btn"
            onClick={() => handleToggle("suitableFor")}
          >
            {isOpen.suitableFor ? "▲" : "▼"}
          </button>
        </div>
        {isOpen.suitableFor && (
          <div className="filter-options">
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("suitableFor", "All")}
              />{" "}
              All
            </label>
          </div>
        )}
        <hr className="divider" />
      </div>

      {/* RAW MATERIAL */}
      <div className="filter-group">
        <div className="filter-title-row">
          <h3 className="filter-title">RAW MATERIAL</h3>
          <button
            className="arrow-btn"
            onClick={() => handleToggle("rawMaterial")}
          >
            {isOpen.rawMaterial ? "▲" : "▼"}
          </button>
        </div>
        {isOpen.rawMaterial && (
          <div className="filter-options">
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("rawMaterial", "All")}
              />{" "}
              All
            </label>
          </div>
        )}
        <hr className="divider" />
      </div>

      {/* PATTERN */}
      <div className="filter-group">
        <div className="filter-title-row">
          <h3 className="filter-title">PATTERN</h3>
          <button className="arrow-btn" onClick={() => handleToggle("pattern")}>
            {isOpen.pattern ? "▲" : "▼"}
          </button>
        </div>
        {isOpen.pattern && (
          <div className="filter-options">
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("pattern", "All")}
              />{" "}
              All
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
