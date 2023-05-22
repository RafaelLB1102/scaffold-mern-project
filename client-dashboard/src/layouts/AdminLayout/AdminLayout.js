import React from "react";

export const AdminLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <h1>Admin Layout</h1>
      <div>{children}</div>
    </div>
  );
};
