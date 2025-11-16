import { useRef, useState } from "react";
import React from "react";

export default function CustomEditor(props) {
  const { saveBlog } = props;
  const editorRef = useRef(null);
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

  const handleBold = () => {
    const selectedText = window.getSelection().toString();
    console.log(selectedText);
    console.log(window.getSelection());
    console.log(window.getSelection().rangeCount);
    console.log(window.getSelection().getRangeAt(0));

    const selection = window.getSelection();
    if (selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);

    // Extract selected content
    const selectedContent = range.extractContents();

    // Create <b> element
    const boldElem = document.createElement('b');

    // Put selected content inside <b>
    boldElem.appendChild(selectedContent);

    // Insert <b> element back at selection
    range.insertNode(boldElem);



    // document.execCommand("bold");
  };

  const handleItalic = () => {
    document.execCommand("italic");
  };

  const handleInput = () => {
    console.log("editor ref", editorRef.current);
    const editorContent = editorRef.current.innerHTML.trim();
    console.log(editorContent);
    setIsPlaceholderVisible(editorContent === "");
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md h-screen flex flex-col">
      <div className="flex space-x-2 mb-4">
        <button
          onClick={handleBold}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <b>B</b>
        </button>
        <button
          onClick={handleItalic}
          className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <i>I</i>
        </button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="flex-grow border-2 border-gray-400 rounded-lg p-4 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 overflow-auto relative"
      >

      </div>
      <button onClick={() => saveBlog(editorRef.current.innerHTML)}>Save</button>
    </div>
  );
};

// export default CustomEditor;
