import Link from "next/link";
import { getPosts } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import SectionReveal from "@/components/shared/section-reveal";

export async function BlogPreview() {
  const posts = await getPosts();
  const previewPosts = posts.slice(0, 3);

  return (
    <section className="section-space">
      <div className="container-main">
        <SectionHeading
          eyebrow="Blog"
          title="A CMS-powered content engine for authority and SEO."
          description="Publishing from Sanity helps the website rank, stay fresh, and build coach credibility over time."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {previewPosts.map((post: any) => (
            <article key={post._id} className="glass-card p-8">
              <p className="text-sm font-semibold text-accent">{post.category || "Fitness"}</p>
              <h3 className="mt-3 text-2xl font-semibold text-balance">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-500">{formatDate(post.publishedAt)}</p>
              <p className="mt-4 text-slate-600 leading-7">{post.excerpt}</p>
              <Link href={`/blog/${post.slug.current}`} className="mt-6 inline-flex text-sm font-semibold text-accent">
                Read article
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/blog" className="text-sm font-semibold text-accent">
            Explore all posts
          </Link>
        </div>
      </div>
    </section>
  );
}
