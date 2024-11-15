import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>InsightXray</div>
      <div style={styles.navLinks}>
        {/* Hide the "Upload Xray" link on the home page */}
        {location.pathname !== "/" && (
          <Link to="/upload-image" style={styles.link}>
            Upload Xray
          </Link>
        )}
        <Link to="/guide" style={styles.link}>
          Guide
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  brand: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  },
};
