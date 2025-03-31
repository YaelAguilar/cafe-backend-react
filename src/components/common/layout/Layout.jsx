import React from "react";

function Layout({ header, children, footer }) {
  return (
    <div className="min-h-screen flex flex-col">
      {header}
      <main className="flex-grow">{children}</main>
      {footer}
    </div>
  );
}

export default Layout;