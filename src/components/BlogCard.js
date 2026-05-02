import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      marginBottom: "1rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      maxWidth: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      // width: "90rem",
    }} className="prose-card">
      <h2>{blog?.title}</h2>
      <p><i>{blog?.date} — {blog?.author}</i></p>
      <p>{blog?.summary}</p>
      <Link to={blog?.slug}>Read more</Link>
    </div>
  );
}
