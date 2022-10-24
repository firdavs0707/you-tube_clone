import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "hidden",
      height: { sx: "auto", md: "96%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          color: "gray",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "red" : "gray", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ color: category.name === selectedCategory ? "red" : "gray" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
