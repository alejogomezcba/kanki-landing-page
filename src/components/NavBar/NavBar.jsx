import React from "react";

const Navbar = ({ sections }) => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px 20px",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          style={{
            color: "#fff",
            textDecoration: "none",
            padding: "10px",
          }}
        >
          {section.title}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
