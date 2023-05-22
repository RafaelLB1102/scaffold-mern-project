import React from "react";

export const ClientLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <h2>ClientLayout works!</h2>
      <div>{children}</div>
    </div>
  );
};
