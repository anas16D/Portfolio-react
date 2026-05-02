const HEADER_SEPARATOR = "---";
export function parseMarkdown(md) {
    const a = 'test string \n new line';
    console.log("lines....1", a);
    console.log("lines....", typeof a);
  console.log("lines....", md);
  console.log("lines....", typeof md);



  const lines2 = md.split("\n");
  const lines = md.split(/\r?\n|\r/g)
  console.log("lines..", lines);

  let title, date, content,author;

  let insideHeader = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === HEADER_SEPARATOR && !insideHeader) {
      console.log("lines...5",i);
      insideHeader = true;
      continue;
    }
    if (lines[i].startsWith("title: ")) {
      title = lines[i].replace("title: ", "");
    } else if (lines[i].startsWith("date: ")) {
      date = lines[i].replace("date: ", "");   
    } else if (lines[i].startsWith("author: ")) {
      author = lines[i].replace("author: ", "");
    } 
    else if (lines[i] === HEADER_SEPARATOR) {
      content = lines.slice(i + 1).join("\n");
      console.log("lines...4",content,i);
      break;
    }
  }

  console.log("lines...3",lines2);
//   const title = lines[0].replace(/^#\s*/, "");
//   const date = lines[1];
//   const content = lines.slice(3).join("\n");

  return { title, date, content,author };
}

