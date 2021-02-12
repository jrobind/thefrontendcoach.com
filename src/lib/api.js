import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


export const getAllBlogPosts = () => {
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => fetchAndFormatPosts(filename));

  return posts.sort((a, b) => b.data.timestamp - a.data.timestamp);
};

export const getSuggestedBlogPosts = (currentFileName) => {
  const files = fs.readdirSync("posts");
  const posts = files.filter((filename) => {
    if (filename.replace(".md", "") !== currentFileName) {
      return filename;
    }
  }).map((filename) => fetchAndFormatPosts(filename));

  return posts.sort(() => Math.random() - 0.5);
};

function fetchAndFormatPosts(filename) {
  const slug = filename.replace(".md", "");
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();
  const parsedMarkdown = matter(markdownWithMetadata);

  return {data: parsedMarkdown.data, slug}
}