# Full Code Listing

## `.env.example`

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production

```

## `.eslintrc.json`

```json
{
  "extends": ["next/core-web-vitals"]
}

```

## `README.md`

```md
# Get Fit With Purna

Production-ready fitness portfolio website built with Next.js App Router, Tailwind CSS, Framer Motion, Sanity CMS, Supabase, and Vercel-friendly deployment.

## 1) Complete project structure

```txt
get-fit-with-purna/
├── app/
│   ├── about/page.tsx
│   ├── api/contact/route.ts
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── studio/[[...tool]]/layout.tsx
│   ├── studio/[[...tool]]/page.tsx
│   ├── testimonials/page.tsx
│   ├── transformations/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/
│   │   ├── about-preview.tsx
│   │   ├── blog-preview.tsx
│   │   ├── cta-section.tsx
│   │   ├── hero-section.tsx
│   │   ├── instagram-section.tsx
│   │   ├── services-section.tsx
│   │   ├── stats-section.tsx
│   │   ├── testimonials-section.tsx
│   │   └── transformations-section.tsx
│   ├── layout/
│   │   ├── floating-whatsapp.tsx
│   │   ├── footer.tsx
│   │   ├── instagram-float.tsx
│   │   └── navbar.tsx
│   └── shared/
│       ├── before-after-slider.tsx
│       ├── contact-form.tsx
│       ├── contact-section.tsx
│       ├── page-hero.tsx
│       ├── section-heading.tsx
│       ├── section-reveal.tsx
│       ├── services-grid.tsx
│       ├── transformation-showcase.tsx
│       └── testimonial-grid.tsx
├── lib/
│   ├── constants.ts
│   ├── motion.ts
│   ├── sanity.client.ts
│   ├── sanity.queries.ts
│   ├── sanity.ts
│   ├── supabase.ts
│   └── utils.ts
├── public/
├── sanity/
│   └── schemas/
│       ├── author.ts
│       ├── category.ts
│       ├── index.ts
│       └── post.ts
├── supabase/
│   └── setup.sql
├── .env.example
├── .eslintrc.json
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.js
├── README.md
├── sanity.cli.ts
├── sanity.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 2) What each folder does

### `app/`
Holds all route pages and API routes using the Next.js App Router.

### `components/`
Contains reusable UI pieces split into:
- `home/` for homepage sections
- `layout/` for navbar, footer, floating buttons
- `shared/` for reusable cards, forms, sliders, and content blocks

### `lib/`
Utility functions, site constants, animation settings, and integration helpers for Sanity and Supabase.

### `sanity/`
Contains Sanity schema definitions for your blog CMS.

### `supabase/`
Contains SQL to create the inquiries table.

---

## 3) Sanity schema requirements included

The blog schema includes:
- title
- slug
- excerpt
- featured image
- category
- author
- content
- published date
- SEO title
- meta description

It also includes reusable `author` and `category` schemas.

---

## 4) Supabase requirements included

The `inquiries` table is included in `supabase/setup.sql` with these fields:
- id
- name
- phone
- email
- goal
- message
- created_at

---

## 5) Environment variables

Copy `.env.example` to `.env.local`.

```bash
cp .env.example .env.local
```

Fill in:
- your website URL
- your Sanity project ID and dataset
- your Supabase URL
- your Supabase service role key

---

## 6) Exactly where each important file goes

### Main app files
- `app/layout.tsx` → global layout
- `app/page.tsx` → homepage
- `app/about/page.tsx` → About page
- `app/services/page.tsx` → Services page
- `app/transformations/page.tsx` → Transformations page
- `app/testimonials/page.tsx` → Testimonials page
- `app/blog/page.tsx` → Blog listing page
- `app/blog/[slug]/page.tsx` → Single blog page
- `app/contact/page.tsx` → Contact page
- `app/api/contact/route.ts` → API route that sends contact form data into Supabase
- `app/studio/[[...tool]]/page.tsx` → Sanity Studio admin dashboard route

### Shared logic files
- `lib/constants.ts` → text content, links, stats, services, placeholders
- `lib/sanity.client.ts` → Sanity client and image builder
- `lib/sanity.ts` → fetch helpers
- `lib/sanity.queries.ts` → GROQ queries
- `lib/supabase.ts` → Supabase admin helper

### CMS files
- `sanity.config.ts` → Sanity Studio config
- `sanity.cli.ts` → Sanity CLI config
- `sanity/schemas/post.ts` → blog post schema
- `sanity/schemas/author.ts` → author schema
- `sanity/schemas/category.ts` → category schema
- `sanity/schemas/index.ts` → exports all schemas

### Database file
- `supabase/setup.sql` → create inquiries table and policy

---

## 7) How to run the project locally

### Step 1: create the project folder
Either unzip the provided project or clone/copy it into your machine.

### Step 2: open terminal in the project folder

```bash
cd get-fit-with-purna
```

### Step 3: install dependencies

```bash
npm install
```

### Step 4: create env file

```bash
cp .env.example .env.local
```

### Step 5: add your real keys into `.env.local`

### Step 6: run development server

```bash
npm run dev
```

### Step 7: open browser
Go to:

```txt
http://localhost:3000
```

Sanity Studio will be available at:

```txt
http://localhost:3000/studio
```

---

## 8) How to connect Sanity exactly

### Step 1: create a Sanity account
Go to Sanity and create a new project.

### Step 2: get these values from Sanity project settings
- Project ID
- Dataset name

### Step 3: add them to `.env.local`

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### Step 4: install packages
Already included in `package.json`, so just run:

```bash
npm install
```

### Step 5: start local server

```bash
npm run dev
```

### Step 6: open Sanity Studio
Visit:

```txt
http://localhost:3000/studio
```

### Step 7: create content
Inside Studio:
- create an author
- create blog posts
- publish posts

The blog list and blog detail pages will pull content automatically.

---

## 9) How to connect Supabase exactly

### Step 1: create a Supabase project
Create a new project in Supabase.

### Step 2: go to SQL Editor
Open `supabase/setup.sql` and run it in Supabase SQL Editor.

### Step 3: get credentials
From Supabase project settings, copy:
- Project URL
- Service role key

### Step 4: add them to `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Step 5: restart the dev server

```bash
npm run dev
```

### Step 6: test the contact form
Submit the form on `/contact`.
Then open Supabase Table Editor and check `public.inquiries`.

---

## 10) How to deploy on Vercel exactly

### Step 1: push code to GitHub

```bash
git init
git add .
git commit -m "Initial Get Fit With Purna website"
```

Create a GitHub repo and push the code.

### Step 2: import into Vercel
- log into Vercel
- click **Add New Project**
- import the GitHub repository

### Step 3: set environment variables in Vercel
Add the same env variables from `.env.local` into Vercel project settings:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

### Step 4: deploy
Vercel will auto-build the Next.js project.

### Step 5: update your production URL
After deploy, set:

```env
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
```

or your final custom domain:

```env
NEXT_PUBLIC_SITE_URL=https://getfitwithpurna.com
```

Re-deploy after updating.

---

## 11) What to customize first after setup

1. Replace placeholder contact info in `lib/constants.ts`
2. Replace placeholder transformation images in `lib/constants.ts`
3. Replace hero image and coach story copy
4. Add real testimonials
5. Connect real Instagram URL
6. Publish real blog posts inside Sanity
7. Replace domain in env values

---

## 12) Final notes

- The project is structured to be beginner-friendly.
- Sanity handles blog publishing and editing without coding.
- Supabase stores contact leads.
- The website is deployable on Vercel.
- The current content uses editable placeholders where needed.


```

## `app/about/page.tsx`

```tsx
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionReveal } from "@/components/shared/section-reveal";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About coach"
        title="A coaching approach built on results, structure, and sustainability."
        description="Use this page to introduce Purna’s story, coaching philosophy, certifications, and transformation approach."
      />
      <section className="section-space">
        <div className="container-main grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionReveal className="glass-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold">The brand story</h2>
            <p className="mt-4 text-slate-600 leading-7">
              Purna helps clients build strong, confident bodies through practical coaching, personalized programming,
              and realistic lifestyle change. This placeholder copy can be replaced with his real fitness journey,
              certifications, and coaching mission.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Focus areas can include fat loss, strength development, body recomposition, confidence building, and
              long-term sustainability.
            </p>
          </SectionReveal>
          <SectionReveal className="dark-panel p-8 md:p-10">
            <h2 className="text-2xl font-semibold">Why clients stay</h2>
            <div className="mt-6 space-y-4 text-white/80">
              <p>Clear structure and measurable progress</p>
              <p>Simple nutrition guidance without extreme restriction</p>
              <p>High-accountability support and realistic coaching</p>
              <p>Technique-first programming that builds confidence</p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-charcoal transition hover:-translate-y-0.5"
            >
              Work with Purna
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

```

## `app/api/contact/route.ts`

```ts
import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, goal, message } = body;

    if (!name || !phone || !email || !goal || !message) {
      return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    const { error } = await supabase.from("inquiries").insert({
      name,
      phone,
      email,
      goal,
      message
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong. Check your Supabase keys and table setup."
      },
      { status: 500 }
    );
  }
}

```

## `app/blog/[slug]/page.tsx`

```tsx
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

```

## `app/blog/page.tsx`

```tsx
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

```

## `app/contact/page.tsx`

```tsx
import { ContactSection } from "@/components/shared/contact-section";
import { PageHero } from "@/components/shared/page-hero";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation and turn interest into leads."
        description="The form below submits to Supabase and gives you a simple, scalable inquiry system."
      />
      <ContactSection compact={false} />
    </>
  );
}

```

## `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-background text-foreground antialiased;
  background-image: radial-gradient(circle at top, rgba(22, 163, 74, 0.10), transparent 35%);
}

.container-main {
  @apply mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8;
}

.section-space {
  @apply py-16 md:py-24;
}

.glass-card {
  @apply rounded-3xl border border-white/50 bg-white/80 backdrop-blur-md shadow-premium;
}

.dark-panel {
  @apply rounded-3xl border border-white/10 bg-charcoal text-white shadow-premium;
}

.text-balance {
  text-wrap: balance;
}

```

## `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/constants";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { InstagramFloat } from "@/components/layout/instagram-float";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Fitness Coaching`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
        <InstagramFloat />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

```

## `app/page.tsx`

```tsx
import { AboutPreview } from "@/components/home/about-preview";
import { BlogPreview } from "@/components/home/blog-preview";
import { CtaSection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { InstagramSection } from "@/components/home/instagram-section";
import { ServicesSection } from "@/components/home/services-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TransformationsSection } from "@/components/home/transformations-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      <TransformationsSection />
      <TestimonialsSection />
      <BlogPreview />
      <InstagramSection />
      <CtaSection />
    </>
  );
}

```

## `app/services/page.tsx`

```tsx
import { PageHero } from "@/components/shared/page-hero";
import { ServicesGrid } from "@/components/shared/services-grid";

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Coaching offers designed for real transformations."
        description="Every offer is built to help clients get results with clarity, accountability, and a premium coaching experience."
      />
      <section className="section-space pt-0">
        <div className="container-main">
          <ServicesGrid />
        </div>
      </section>
    </>
  );
}

```

## `app/studio/[[...tool]]/layout.tsx`

```tsx
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

```

## `app/studio/[[...tool]]/page.tsx`

```tsx
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}

```

## `app/testimonials/page.tsx`

```tsx
import { PageHero } from "@/components/shared/page-hero";
import { TestimonialGrid } from "@/components/shared/testimonial-grid";

export const metadata = {
  title: "Testimonials"
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client feedback"
        title="Real experiences from coaching clients."
        description="Show proof through written feedback, short video testimonials, and transformation outcomes."
      />
      <section className="section-space pt-0">
        <div className="container-main">
          <TestimonialGrid />
        </div>
      </section>
    </>
  );
}

```

## `app/transformations/page.tsx`

```tsx
import { PageHero } from "@/components/shared/page-hero";
import { TransformationShowcase } from "@/components/shared/transformation-showcase";

export const metadata = {
  title: "Transformations"
};

export default function TransformationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Transformation stories that build trust instantly."
        description="Use real client images and measurable outcomes here. The sliders below are ready for before and after transformation proof."
      />
      <section className="section-space pt-0">
        <div className="container-main">
          <TransformationShowcase />
        </div>
      </section>
    </>
  );
}

```

## `components/home/about-preview.tsx`

```tsx
import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionReveal } from "@/components/shared/section-reveal";

export function AboutPreview() {
  return (
    <section className="section-space">
      <div className="container-main grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionReveal className="dark-panel p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">About Purna</p>
          <h3 className="mt-4 text-3xl font-semibold text-balance md:text-4xl">Coaching that balances performance, aesthetics, and consistency.</h3>
          <p className="mt-5 text-white/80 leading-8">
            Replace this placeholder text with Purna’s real origin story, training philosophy, certifications, and what
            makes his coaching different in the local market.
          </p>
          <Link href="/about" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-charcoal">
            Learn more
          </Link>
        </SectionReveal>
        <SectionReveal className="glass-card p-8 md:p-10">
          <SectionHeading
            eyebrow="Coach positioning"
            title="Premium trainer brand with clarity, trust, and visible proof."
            description="This section works as a trust-building bridge between the hero and service offer."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-6">
              <h4 className="font-semibold">Tailored programming</h4>
              <p className="mt-3 text-slate-600">Plans designed around client level, goals, and schedule.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <h4 className="font-semibold">Lifestyle-based nutrition</h4>
              <p className="mt-3 text-slate-600">Simple guidance that clients can actually sustain.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <h4 className="font-semibold">Accountability system</h4>
              <p className="mt-3 text-slate-600">Check-ins, tracking, and support that keep momentum high.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <h4 className="font-semibold">Transformation focus</h4>
              <p className="mt-3 text-slate-600">Visible changes backed by better habits and stronger performance.</p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

```

## `components/home/blog-preview.tsx`

```tsx
import Link from "next/link";
import { getPosts } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";

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

```

## `components/home/cta-section.tsx`

```tsx
import Link from "next/link";
import { ContactSection } from "@/components/shared/contact-section";

export function CtaSection() {
  return (
    <>
      <section className="section-space pb-8">
        <div className="container-main">
          <div className="dark-panel p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Ready to begin?</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-balance md:text-5xl">
              Build a website that turns fitness interest into serious coaching leads.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/80 leading-8">
              This CTA can be used to push users toward consultations, WhatsApp inquiries, or premium coaching applications.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-charcoal">
                Contact now
              </Link>
              <Link href="/services" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

```

## `components/home/hero-section.tsx`

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="section-space pt-8 md:pt-12">
      <div className="container-main">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Premium fitness coaching</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl text-balance">
              Build a stronger body with coaching that actually fits real life.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Get Fit With Purna helps clients transform through structured training, realistic nutrition guidance, and
              high-accountability support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-charcoal px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5">
                Book consultation
              </Link>
              <Link href="/transformations" className="rounded-full border border-slate-300 px-6 py-3.5 font-semibold text-charcoal transition hover:border-charcoal">
                View transformations
              </Link>
            </div>
            <div className="mt-8 grid max-w-xl gap-3 text-sm text-slate-600 sm:grid-cols-3">
              <div className="rounded-2xl bg-white px-4 py-3 shadow-premium">Personal training</div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-premium">Online coaching</div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-premium">Body transformation</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
            <div className="glass-card relative overflow-hidden p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px]">
                <Image
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
                  alt="Fitness coach hero"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-7 left-7 rounded-3xl border border-white/20 bg-black/45 px-5 py-4 text-white backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Coach promise</p>
                <p className="mt-2 text-lg font-semibold">Real strategy. Real accountability. Real results.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

```

## `components/home/instagram-section.tsx`

```tsx
import { Instagram } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionReveal } from "@/components/shared/section-reveal";
import { socialProof, siteConfig } from "@/lib/constants";

export function InstagramSection() {
  return (
    <section className="section-space">
      <div className="container-main grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionReveal>
          <SectionHeading
            eyebrow="Social proof"
            title="Turn Instagram activity into trust-building proof on the website."
            description="This section can later be upgraded to a live Instagram feed or embedded Reels previews."
          />
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-charcoal px-6 py-3 font-semibold text-white"
          >
            <Instagram className="size-5" /> Visit Instagram
          </a>
        </SectionReveal>
        <div className="grid gap-4">
          {socialProof.map((item) => (
            <SectionReveal key={item} className="glass-card p-6">
              <p className="text-lg text-slate-700">{item}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

```

## `components/home/services-section.tsx`

```tsx
import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServicesGrid } from "@/components/shared/services-grid";

export function ServicesSection() {
  return (
    <section className="section-space">
      <div className="container-main">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Coaching offers built to convert visitors into serious leads."
            description="Clear, premium service positioning increases trust and makes the next step obvious."
          />
          <Link href="/services" className="text-sm font-semibold text-accent">
            View all services
          </Link>
        </div>
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
}

```

## `components/home/stats-section.tsx`

```tsx
"use client";

import CountUp from "react-countup";
import { stats } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";

export function StatsSection() {
  return (
    <section className="section-space pt-6">
      <div className="container-main grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <SectionReveal key={stat.label} className="glass-card p-8">
            <div className="text-4xl font-semibold text-charcoal md:text-5xl">
              <CountUp end={stat.value} duration={2} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
            </div>
            <p className="mt-4 text-slate-600">{stat.label}</p>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

```

## `components/home/testimonials-section.tsx`

```tsx
import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialGrid } from "@/components/shared/testimonial-grid";

export function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="container-main">
        <SectionHeading
          eyebrow="Testimonials"
          title="Client words that support the transformation proof."
          description="This section combines credibility, emotion, and conversion-focused trust building."
        />
        <div className="mt-10">
          <TestimonialGrid />
        </div>
        <div className="mt-8">
          <Link href="/testimonials" className="text-sm font-semibold text-accent">
            View more feedback
          </Link>
        </div>
      </div>
    </section>
  );
}

```

## `components/home/transformations-section.tsx`

```tsx
import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { TransformationShowcase } from "@/components/shared/transformation-showcase";

export function TransformationsSection() {
  return (
    <section className="section-space">
      <div className="container-main">
        <SectionHeading
          eyebrow="Transformations"
          title="Before and after proof that builds instant credibility."
          description="Swap the placeholder images with your real clients and keep the same slider component."
        />
        <div className="mt-10">
          <TransformationShowcase />
        </div>
        <div className="mt-8">
          <Link href="/transformations" className="text-sm font-semibold text-accent">
            See all transformations
          </Link>
        </div>
      </div>
    </section>
  );
}

```

## `components/layout/floating-whatsapp.tsx`

```tsx
"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

export function FloatingWhatsApp() {
  const message = encodeURIComponent("Hi Purna, I want to book a consultation.");

  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-premium"
    >
      <MessageCircle className="size-5" />
      WhatsApp
    </motion.a>
  );
}

```

## `components/layout/footer.tsx`

```tsx
import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <div className="container-main">
        <div className="dark-panel p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Get Fit With Purna</p>
              <h3 className="mt-4 text-2xl font-semibold">Premium fitness coaching built for real results.</h3>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Navigate</p>
              <div className="mt-4 grid gap-3 text-white/80">
                {siteConfig.navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Contact</p>
              <div className="mt-4 space-y-3 text-white/80">
                <p className="flex items-center gap-3"><Phone className="size-4" /> {siteConfig.phone}</p>
                <p className="flex items-center gap-3"><Mail className="size-4" /> {siteConfig.email}</p>
                <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
                  <Instagram className="size-4" /> Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
            © {new Date().getFullYear()} Get Fit With Purna. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

```

## `components/layout/instagram-float.tsx`

```tsx
"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function InstagramFloat() {
  return (
    <motion.a
      href={siteConfig.instagram}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.04 }}
      className="fixed bottom-20 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-charcoal text-white shadow-premium"
      aria-label="Instagram"
    >
      <Instagram className="size-5" />
    </motion.a>
  );
}

```

## `components/layout/navbar.tsx`

```tsx
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-main pt-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-3 transition-all md:px-6",
            scrolled
              ? "border-white/60 bg-white/80 shadow-premium backdrop-blur-xl"
              : "border-white/30 bg-white/60 backdrop-blur-md"
          )}
        >
          <Link href="/" className="text-sm font-semibold tracking-[0.25em] text-charcoal uppercase">
            Get Fit With Purna
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {siteConfig.navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-charcoal">
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
          </nav>

          <button className="lg:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open ? (
          <div className="mt-3 rounded-3xl border border-white/60 bg-white/90 p-5 shadow-premium backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-4">
              {siteConfig.navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-charcoal px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

```

## `components/shared/before-after-slider.tsx`

```tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export function BeforeAfterSlider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [value, setValue] = useState(50);

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-slate-200">
      <div className="relative aspect-[4/5] w-full">
        <Image src={before} alt={`${alt} before`} fill className="object-cover" />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${value}%` }}>
          <div className="absolute inset-0">
            <Image src={after} alt={`${alt} after`} fill className="object-cover" />
          </div>
        </div>
        <div className="absolute inset-y-0" style={{ left: `${value}%` }}>
          <div className="relative h-full w-0.5 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.8)]">
            <div className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-charcoal text-xs font-semibold text-white">
              ↔
            </div>
          </div>
        </div>
        <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white">After</div>
        <div className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white">Before</div>
      </div>
      <div className="absolute bottom-5 left-1/2 w-[calc(100%-40px)] -translate-x-1/2">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="w-full accent-accent"
          aria-label="Transformation slider"
        />
      </div>
    </div>
  );
}

```

## `components/shared/contact-form.tsx`

```tsx
"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  goal: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  goal: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("Inquiry submitted successfully.");
      setForm(initialState);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Submission failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name">
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-accent"
            placeholder="Your full name"
          />
        </Field>
        <Field label="Phone">
          <input
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-accent"
            placeholder="Your phone number"
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email">
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-accent"
            placeholder="Your email address"
          />
        </Field>
        <Field label="Fitness goal">
          <input
            value={form.goal}
            onChange={(event) => setForm({ ...form, goal: event.target.value })}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-accent"
            placeholder="Fat loss, muscle gain, consistency..."
          />
        </Field>
      </div>

      <Field label="Message">
        <textarea
          rows={5}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-accent"
          placeholder="Tell us about your current situation and what result you want."
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex rounded-full bg-charcoal px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-70"
      >
        {loading ? "Submitting..." : "Submit inquiry"}
      </button>

      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      {children}
    </label>
  );
}

```

## `components/shared/contact-section.tsx`

```tsx
import { ContactForm } from "@/components/shared/contact-form";
import { SectionReveal } from "@/components/shared/section-reveal";
import { siteConfig } from "@/lib/constants";

export function ContactSection({ compact = true }: { compact?: boolean }) {
  return (
    <section className={compact ? "section-space" : "section-space pt-0"}>
      <div className="container-main grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionReveal className="dark-panel p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Let’s build your results</p>
          <h2 className="mt-4 text-3xl font-semibold text-balance md:text-5xl">Ready to start coaching?</h2>
          <p className="mt-5 text-white/80 leading-8">
            This is the main lead capture area. Replace the placeholder contact details with real information and connect
            WhatsApp, email, and location if needed.
          </p>
          <div className="mt-8 space-y-4 text-white/80">
            <p>Email: {siteConfig.email}</p>
            <p>Phone: {siteConfig.phone}</p>
            <p>Instagram: @getfitwithpurna</p>
          </div>
        </SectionReveal>
        <SectionReveal className="glass-card p-8 md:p-10">
          <h3 className="text-2xl font-semibold">Send an inquiry</h3>
          <p className="mt-3 text-slate-600">Every form submission is stored in the Supabase inquiries table.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

```

## `components/shared/page-hero.tsx`

```tsx
import { SectionReveal } from "@/components/shared/section-reveal";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="pb-12 pt-8 md:pb-16 md:pt-12">
      <div className="container-main">
        <SectionReveal className="glass-card p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl text-balance">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
        </SectionReveal>
      </div>
    </section>
  );
}

```

## `components/shared/section-heading.tsx`

```tsx
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl text-balance">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}

```

## `components/shared/section-reveal.tsx`

```tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SectionReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

```

## `components/shared/services-grid.tsx`

```tsx
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service) => (
        <SectionReveal key={service.title} className="glass-card p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <div className="rounded-full bg-accent/10 p-2 text-accent">
              <ArrowUpRight className="size-5" />
            </div>
          </div>
          <p className="mt-4 text-slate-600 leading-7">{service.description}</p>
          <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
            {service.points.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </SectionReveal>
      ))}
    </div>
  );
}

```

## `components/shared/testimonial-grid.tsx`

```tsx
import { testimonials } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";

export function TestimonialGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {testimonials.map((item) => (
        <SectionReveal key={item.name} className="glass-card p-8">
          <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="font-semibold">{item.name}</p>
            <p className="mt-1 text-sm text-slate-500">{item.role}</p>
            <p className="mt-4 inline-flex rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
              {item.result}
            </p>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}

```

## `components/shared/transformation-showcase.tsx`

```tsx
import { transformations } from "@/lib/constants";
import { BeforeAfterSlider } from "@/components/shared/before-after-slider";
import { SectionReveal } from "@/components/shared/section-reveal";

export function TransformationShowcase() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {transformations.map((item) => (
        <SectionReveal key={item.name} className="glass-card p-5 md:p-6">
          <BeforeAfterSlider before={item.before} after={item.after} alt={item.name} />
          <div className="px-2 pb-2 pt-6">
            <h3 className="text-2xl font-semibold">{item.name}</h3>
            <p className="mt-2 text-slate-600">{item.timeline}</p>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}

```

## `lib/constants.ts`

```ts
export const siteConfig = {
  name: "Get Fit With Purna",
  description:
    "Premium fitness coaching website for personal training, body transformation, nutrition guidance, and online coaching.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  accentColor: "#16a34a",
  phone: "+977 9849 808643",
  whatsappNumber: "9779849808643",
  email: "hello@getfitwithpurna.com",
  instagram: "https://instagram.com/getfitwithpurna",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Transformations", href: "/transformations" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ]
};

export const stats = [
  { value: 250, suffix: "+", label: "Client transformations guided" },
  { value: 7, suffix: "+", label: "Years of coaching experience" },
  { value: 92, suffix: "%", label: "Client retention rate" },
  { value: 1000, suffix: "+", label: "Sessions delivered" }
];

export const services = [
  {
    title: "1-to-1 Personal Training",
    description:
      "Structured in-person coaching focused on fat loss, strength, mobility, and visible body transformation.",
    points: ["Technique correction", "Progress tracking", "Accountability"]
  },
  {
    title: "Online Coaching",
    description:
      "Remote coaching with custom training plans, check-ins, and flexible support for busy lifestyles.",
    points: ["Weekly check-ins", "Custom programming", "WhatsApp support"]
  },
  {
    title: "Nutrition Guidance",
    description:
      "Simple, realistic nutrition support designed around your goal, schedule, and food preferences.",
    points: ["Meal guidance", "Habit coaching", "Sustainable approach"]
  },
  {
    title: "Transformation Coaching",
    description:
      "Premium high-accountability coaching for clients who want a complete physique and lifestyle upgrade.",
    points: ["Training + nutrition", "Mindset support", "Lifestyle planning"]
  }
];

export const testimonials = [
  {
    name: "Riya Shrestha",
    role: "Fat-loss client",
    quote:
      "I didn’t just lose weight. I became stronger, more confident, and finally consistent. Purna made the process realistic.",
    result: "Lost 8 kg in 14 weeks"
  },
  {
    name: "Sujan Rai",
    role: "Body recomposition client",
    quote:
      "The programming was precise, the check-ins were honest, and every phase had a clear goal. My physique changed fast.",
    result: "Dropped body fat and gained strength"
  },
  {
    name: "Anisha Karki",
    role: "Beginner coaching client",
    quote:
      "I used to feel lost in the gym. Now I walk in with confidence and know exactly what I’m doing.",
    result: "Built consistency in 10 weeks"
  }
];

export const transformations = [
  {
    name: "Client A",
    timeline: "16-week transformation",
    before:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Client B",
    timeline: "12-week transformation",
    before:
      "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1000&q=80"
  }
];

export const socialProof = [
  "Trusted by busy professionals, beginners, and body transformation clients.",
  "Coaching style focused on realistic results, not crash tactics.",
  "Built for long-term physique change and sustainable habits."
];

export const fallbackPosts = [
  {
    _id: "1",
    title: "How to Start Your Fitness Journey Without Overthinking",
    slug: { current: "how-to-start-your-fitness-journey" },
    excerpt:
      "A practical beginner-friendly roadmap to training, nutrition, and consistency without doing too much too soon.",
    category: "Beginner Tips",
    publishedAt: "2026-03-01"
  },
  {
    _id: "2",
    title: "3 Mistakes That Slow Down Fat Loss Progress",
    slug: { current: "fat-loss-mistakes" },
    excerpt:
      "These common mistakes keep many people stuck even when they feel like they are trying hard.",
    category: "Fat Loss",
    publishedAt: "2026-02-18"
  },
  {
    _id: "3",
    title: "Why Strength Training Matters for Every Client",
    slug: { current: "why-strength-training-matters" },
    excerpt:
      "Strength training helps with body composition, confidence, metabolism, and long-term progress.",
    category: "Strength",
    publishedAt: "2026-02-05"
  }
];

```

## `lib/motion.ts`

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

```

## `lib/sanity.client.ts`

```ts
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

```

## `lib/sanity.queries.ts`

```ts
import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    featuredImage,
    seoTitle,
    metaDescription,
    author->{name}
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    featuredImage,
    content,
    seoTitle,
    metaDescription,
    author->{name, image}
  }
`;

```

## `lib/sanity.ts`

```ts
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

```

## `lib/supabase.ts`

```ts
import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error("Supabase environment variables are missing.");
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

```

## `lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(dateString));
}

```

## `next-env.d.ts`

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// This file is auto-generated by Next.js.

```

## `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;

```

## `package.json`

```json
{
  "name": "get-fit-with-purna",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@portabletext/react": "^3.2.0",
    "@sanity/image-url": "^1.1.0",
    "@sanity/vision": "^3.80.0",
    "@supabase/supabase-js": "^2.49.8",
    "clsx": "^2.1.1",
    "framer-motion": "^12.5.0",
    "lucide-react": "^0.511.0",
    "next": "^15.0.0",
    "next-sanity": "^9.8.0",
    "react": "^19.0.0",
    "react-countup": "^6.5.3",
    "react-dom": "^19.0.0",
    "sanity": "^3.80.0",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    "@types/node": "^22.10.2",
    "@types/react": "^19.0.2",
    "@types/react-dom": "^19.0.2",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.17.0",
    "eslint-config-next": "^15.0.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.2"
  }
}

```

## `postcss.config.js`

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};

```

## `sanity/schemas/author.ts`

```ts
import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true }
    })
  ]
});

```

## `sanity/schemas/category.ts`

```ts
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    })
  ]
});

```

## `sanity/schemas/index.ts`

```ts
import { authorType } from "@/sanity/schemas/author";
import { categoryType } from "@/sanity/schemas/category";
import { postType } from "@/sanity/schemas/post";

export const schemaTypes = [postType, authorType, categoryType];

```

## `sanity/schemas/post.ts`

```ts
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(220)
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string"
        }
      ]
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Simple editable category label for blog cards and pages."
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true }
        })
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string"
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3
    })
  ],
  preview: {
    select: {
      title: "title",
      media: "featuredImage",
      subtitle: "category"
    }
  }
});

```

## `sanity.cli.ts`

```ts
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
  }
});

```

## `sanity.config.ts`

```ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Get Fit With Purna CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes
  }
});

```

## `supabase/setup.sql`

```sql
create extension if not exists pgcrypto;

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  goal text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

create policy "Allow service role full access to inquiries"
  on public.inquiries
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

```

## `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./sanity/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc",
        foreground: "#0f172a",
        charcoal: "#1f2937",
        accent: "#16a34a",
        borderSoft: "rgba(255,255,255,0.12)"
      },
      boxShadow: {
        premium: "0 20px 60px rgba(15, 23, 42, 0.12)"
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top, rgba(22, 163, 74, 0.16), transparent 45%)"
      },
      maxWidth: {
        content: "1200px"
      }
    }
  },
  plugins: []
};

export default config;

```

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

