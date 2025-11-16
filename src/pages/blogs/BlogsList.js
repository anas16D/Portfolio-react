import React from "react";
import BlogCard from "../../components/BlogCard";
import {sampleBlogs} from "../../data" // adjust path if needed
import { Link } from "react-router-dom";

export default function BlogsList() {
  return (
    <div>
      <h2>All Blogs</h2>
      {sampleBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      <Link to="new/" style={{ display: "inline-block", marginTop: "1rem", padding: "0.5rem 1rem", backgroundColor: "#007bff", color: "#fff", textDecoration: "none", borderRadius: "4px" }}>
        Create New Blog
      </Link>
    </div>
  );
}
