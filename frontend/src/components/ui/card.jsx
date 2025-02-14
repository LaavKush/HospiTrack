import React from "react";

export const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">{children}</div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
