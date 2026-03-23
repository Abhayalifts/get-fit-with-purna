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

#   g e t f i t w i t h p u r n a  
 #   g e t - f i t - w i t h - p u r n a  
 #   g e t f i t w i t h p u r n a  
 #   g e t - f i t - w i t h - p u r n a  
 