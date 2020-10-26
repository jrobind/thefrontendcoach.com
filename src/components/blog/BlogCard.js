import Link from "next/link";
import fs from "fs";

const BlogCard = ({ slugs }) => (
  <div>
    slugs:
    {slugs.map(slug => {
      return (
        <div key={slug}>
          <Link href={"/blog/" + slug}>
            <a>{"/blog/" + slug}</a>
          </Link>
        </div>
      );
    })}
  </div>
);

export default BlogCard;