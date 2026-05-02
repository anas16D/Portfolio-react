import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import { Link } from "react-router-dom";
import blogList from "../../data/posts.generated.json";
import { parseMarkdown } from "./utils";

// const postsContext = require.context(
//   "../content/posts",
//   false,
//   /\.md$/
// );
// console.log("blogList:", blogList);
// const lines = blogList[0].lines.split(/\r?\n|\r/g)
// console.log("lines:", lines);

  


export default function BlogsList() {

  const [postMetaDataList, setPostMetaDataList] = useState(null);

  useEffect(() => {
    blogList.forEach((blog) => {
      console.log("Blog slug:", blog.slug);
      const id = blog.slug;
      import(`../../_posts/${id}.md`)
      .then((res) => {
        const parsed = parseMarkdown(res.default);
        setPostMetaDataList((prev) => [...(prev || []), { ...blog, ...parsed }]);

      })
      .catch(() => {
        setPostMetaDataList(null);
      });
    });
    
  }, [blogList]);

  return (
    <div className="prose prose-lg md:prose-xl mx-auto px-4">
      <h2>All Blogs</h2>
      {postMetaDataList?.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
      <Link to="new/" style={{ display: "inline-block", marginTop: "1rem", padding: "0.5rem 1rem", backgroundColor: "#007bff", color: "#fff", textDecoration: "none", borderRadius: "4px" }}>
        Create New Blog
      </Link>
    </div>
  );
}
