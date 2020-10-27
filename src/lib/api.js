import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getAllBlogPosts = () => {
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();
    const parsedMarkdown = matter(markdownWithMetadata);

    return {data: parsedMarkdown.data, slug}
  })

  return posts;
};
