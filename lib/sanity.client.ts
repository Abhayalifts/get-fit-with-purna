import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanityClient =
  projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion: "2025-01-01",
        useCdn: false
      })
    : null;

const builder = projectId && dataset ? imageUrlBuilder({ projectId, dataset }) : null;

export function urlFor(source: unknown) {
  if (!builder) return null;
  return builder.image(source);
}
