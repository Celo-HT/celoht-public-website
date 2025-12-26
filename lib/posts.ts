import fs from "fs";
import matter from "gray-matter";

export function getPosts() {
  const files = fs.readdirSync("content/blog");
  return files.map(file => {
    const content = fs.readFileSync(`content/blog/${file}`, "utf-8");
    return matter(content);
  });
}