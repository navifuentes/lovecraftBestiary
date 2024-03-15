import React from "react";

const OldBookPage = ({ content, children }) => {
  return (
    <div className="overflow-hidden">
      <div className="bg-old-page bg-cover ">{children}</div>
    </div>
  );
};

export default OldBookPage;
