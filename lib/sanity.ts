import { sanityClient } from "@/lib/sanity.client";
import { fallbackPosts } from "@/lib/constants";
import { postBySlugQuery, postsQuery } from "@/lib/sanity.queries";

export async function getPosts() {
  if (!sanityClient) return fallbackPosts;

  try {
    const posts = await sanityClient.fetch(postsQuery);
    return posts?.length ? posts : fallbackPosts;
  } catch {
    return fallbackPosts;
  }
}

export async function getPostBySlug(slug: string) {
  if (!sanityClient) {
    return fallbackPosts.find((post) => post.slug.current === slug) || null;
  }

  try {
    const post = await sanityClient.fetch(postBySlugQuery, { slug });
    return post || null;
  } catch {
    return fallbackPosts.find((post) => post.slug.current === slug) || null;
  }
}
