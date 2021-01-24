import React from "react";

export default function PaginationItems({ currentItems }) {
  return (
    <div>
      {currentItems.map((item, index) => (
        <div key={`item-${index}`}>{item}</div>
      ))}
    </div>
  );
}
