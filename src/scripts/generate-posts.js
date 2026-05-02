// import fs from "fs";
const fs = require("fs");
// import path from "path";
const path = require("path");
// const { parseMarkdown } = require("../pages/blogs/utils");


const ROOT = process.cwd(); //getting the root directory from the current working directory

const POSTS_DIR = path.join(ROOT, "src/_posts");
const OUTPUT = path.join(ROOT, "src/data/posts.generated.json");

const files = fs.readdirSync(POSTS_DIR)
  .filter(f => f.endsWith(".md"));

const posts = files.map((file) => {
  const raw = fs.readFileSync(
    path.join(POSTS_DIR, file),
    "utf-8"
  );

  const lines = raw.split("\n");
  // const parsedData = parseMarkdown(raw);
  console.log("Parsed data for", file, ":");

//   return {
//     slug: file.replace(".md", ""),
//     title: lines[0].replace("# ", "").trim(),
//     date: lines[1].trim(),
//     content: lines.slice(2).join("\n").trim()
//   };
return {
    slug: file.replace(".md", "")
  };
});

fs.writeFileSync(
  OUTPUT,
  JSON.stringify(posts, null, 2)
);

console.log(" posts.generated.json created");
