import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
// import matter from "gray-matter";
import { parseMarkdown } from "./utils";


const Blog = () => {
  const { id } = useParams();
  const params = useParams();

  const [post, setPost] = useState(/** @type {{title: string, date: string, author: string, content: string} | null} */ (null));

  console.log("Slug:", id,params);

  useEffect(() => {
    import(`../../_posts/${id}.md`)
      .then((res) => {
        console.log("Markdown content:", res);
        // const parsed = matter(res.default);
        const parsed = parseMarkdown(res.default);
        console.log("Parsed markdown:", parsed);
        setPost(parsed);
        // setPost(parsed);

      })
      .catch(() => {
        setPost(null);
      });
  }, [id]);

  if (!post) return <p>Post not found  haha</p>;


  return (
    <div className="prose prose-lg md:prose-xl mx-auto px-6 py-8">
      <h1>{post?.title}</h1>
      <p>{`${post?.date} by ${post?.author} `}</p>
      <hr className="border-1 border-black my-0"/> 
      <Markdown
      >{post?.content}</Markdown>
    </div>
  );
};

export default Blog;

