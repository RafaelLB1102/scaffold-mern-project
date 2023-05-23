import React from "react";
import "./AdminLayout.scss";

export const AdminLayout = (props) => {
  const { children } = props;
  return (
    <div className="admin-layout">
      <div className="admin-layout__left">
        <span className="logo">Logo</span>
        <span>Menu</span>
      </div>
      <div className="admin-layout__right">
        <div className="admin-layout__right-header">
          <span>Logout</span>
        </div>
        <div className="admin-layout__right-content">{children}</div>
      </div>
    </div>
  );
};
