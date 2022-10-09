import type { MarkdownInstance } from "astro";
import type { Frontmatter } from "../../types/frontmatter";
import { getSlug } from "../../utils/blog";

export default function PostCard({
  post,
}: {
  post: MarkdownInstance<Frontmatter>;
}): JSX.Element {
  const { frontmatter }: { frontmatter: Frontmatter } = post;
  const slug = getSlug(post.file);
  const postUrl = `/blog/${slug}`;

  return (
    <div className="">
      <h2 className="text-xl font-bold text-blue-300">
        <a href={postUrl}>{frontmatter.title}</a>
      </h2>
      <div className="my-2"></div>
      <p className="text-slate-300 text-lg">{frontmatter.description}</p>
      <div className="my-2"></div>
      <div className="flex flex-row items-center gap-1 text-sm text-slate-300">
        <div className="">-</div>
        <p className="">{frontmatter.publishedAt}</p>
      </div>
    </div>
  );
}
