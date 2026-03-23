import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity.client";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post: any) => ({ slug: post.slug.current }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.featuredImage ? urlFor(post.featuredImage)?.width(1400).url() : null;

  return (
    <article className="section-space pt-8">
      <div className="container-main max-w-4xl">
        <div className="glass-card overflow-hidden">
          {imageUrl ? (
            <div className="relative h-[340px] w-full">
              <Image src={imageUrl} alt={post.title} fill className="object-cover" />
            </div>
          ) : null}
          <div className="p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{post.category || "Fitness"}</p>
            <h1 className="mt-4 text-3xl font-semibold md:text-5xl text-balance">{post.title}</h1>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
              <span>{formatDate(post.publishedAt)}</span>
              {post.author?.name ? <span>By {post.author.name}</span> : null}
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-600">{post.excerpt}</p>
            <div className="prose prose-slate mt-10 max-w-none prose-headings:text-charcoal prose-a:text-accent">
              {post.content ? (
                <PortableText value={post.content} />
              ) : (
                <p>
                  This is placeholder article content. Once Sanity is connected, the full rich blog content will appear
                  here automatically.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
