import React, { useState, useRef } from "react";
import CustomEditor from "../../components/CustomEditor"; // adjust path if needed

export default function NewBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const textareaRef = useRef(null);

  const wrapSelection = (before, after) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.slice(start, end);
    const newText =
      content.slice(0, start) + before + selected + after + content.slice(end);
    setContent(newText);

    // reposition cursor after insertion
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, end + before.length);
    }, 0);
  };

  function saveBlog(content) {
    // Here you would typically send the blog data to your backend
    console.log("Blog saved:", { title, content });
    alert("Blog saved successfully!");
  }

  return (
    <div>
      <h2>New Blog</h2>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

  

      <br />

      <CustomEditor saveBlog={saveBlog} />
      <button onClick={() => alert("Submitted")}>Save</button>
    </div>
  );
}
