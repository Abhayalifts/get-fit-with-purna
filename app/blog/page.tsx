import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { getPosts } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";
import { urlFor } from "@/lib/sanity.client";

export const metadata = {
  title: "Blog"
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Helpful fitness content, published from Sanity CMS."
        description="This section is fully ready for coach-managed content. Once Sanity is connected, Purna can publish and manage blogs without touching code."
      />
      <section className="section-space pt-0">
        <div className="container-main grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post: any) => {
            const imageUrl = post.featuredImage ? urlFor(post.featuredImage)?.width(800).url() : null;
            return (
              <article key={post._id} className="glass-card overflow-hidden">
                <div className="relative h-56 bg-slate-100">
                  {imageUrl ? (
                    <Image src={imageUrl} alt={post.title} fill className="object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-200 text-slate-500">
                      Featured image placeholder
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-accent">{post.category || "Fitness"}</p>
                  <h2 className="mt-3 text-xl font-semibold text-balance">{post.title}</h2>
                  <p className="mt-3 text-sm text-slate-500">{formatDate(post.publishedAt)}</p>
                  <p className="mt-4 text-slate-600 leading-7">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="mt-6 inline-flex rounded-full bg-charcoal px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Read article
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
