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
    { label: "Contact", href: "/contact" },
  ],
};

export const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Client transformations guided",
    description: "High-accountability coaching with visible physique results.",
  },
  {
    value: 7,
    suffix: "+",
    label: "Years of coaching experience",
    description:
      "Built through hands-on training, programming, and client support.",
  },
  {
    value: 92,
    suffix: "%",
    label: "Client retention rate",
    description: "Clients stay because the process is realistic and effective.",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Sessions delivered",
    description: "From beginner coaching to serious transformation work.",
  },
];

export const services = [
  {
    title: "1-to-1 Personal Training",
    description:
      "Structured in-person coaching focused on fat loss, strength, mobility, and visible body transformation.",
    points: ["Technique correction", "Progress tracking", "Accountability"],
  },
  {
    title: "Online Coaching",
    description:
      "Remote coaching with custom training plans, check-ins, and flexible support for busy lifestyles.",
    points: ["Weekly check-ins", "Custom programming", "WhatsApp support"],
  },
  {
    title: "Nutrition Guidance",
    description:
      "Simple, realistic nutrition support designed around your goal, schedule, and food preferences.",
    points: ["Meal guidance", "Habit coaching", "Sustainable approach"],
  },
  {
    title: "Transformation Coaching",
    description:
      "Premium high-accountability coaching for clients who want a complete physique and lifestyle upgrade.",
    points: ["Training + nutrition", "Mindset support", "Lifestyle planning"],
  },
];

export const testimonials = [
  {
    name: "Riya Shrestha",
    role: "Fat-loss client",
    quote:
      "I didn’t just lose weight. I became stronger, more confident, and finally consistent. Purna made the process realistic.",
    result: "Lost 8 kg in 14 weeks",
    image: "/images/testimonials/client-1.jpg",
  },
  {
    name: "Sujan Rai",
    role: "Body recomposition client",
    quote:
      "The programming was precise, the check-ins were honest, and every phase had a clear goal. My physique changed fast.",
    result: "Dropped body fat and gained strength",
    image: "/images/testimonials/client-2.jpg",
  },
  {
    name: "Anisha Karki",
    role: "Beginner coaching client",
    quote:
      "I used to feel lost in the gym. Now I walk in with confidence and know exactly what I’m doing.",
    result: "Built consistency in 10 weeks",
    image: "/images/testimonials/client-3.jpg",
  },
];

export const transformations = [
  {
    name: "Client A",
    timeline: "16-week transformation",
    goal: "Fat loss and confidence building",
    result: "Lost 8 kg and improved strength",
    metric: "-8 kg",
    focus: "Fat loss • Strength • Consistency",
    before: "/images/transformations/client-a-before.jpg",
    after: "/images/transformations/client-a-after.jpg",
  },
  {
    name: "Client B",
    timeline: "12-week transformation",
    goal: "Body recomposition",
    result: "Dropped body fat and gained lean muscle",
    metric: "-5% body fat",
    focus: "Recomp • Muscle gain • Structure",
    before: "/images/transformations/client-b-before.jpg",
    after: "/images/transformations/client-b-after.jpg",
  },
  {
    name: "Client C",
    timeline: "10-week transformation",
    goal: "Beginner strength and lifestyle reset",
    result: "Built gym confidence and improved body composition",
    metric: "+100% consistency",
    focus: "Beginner coaching • Strength • Habits",
    before: "/images/transformations/client-c-before.jpg",
    after: "/images/transformations/client-c-after.jpg",
  },
  {
    name: "Client D",
    timeline: "20-week transformation",
    goal: "Strength gain and physique improvement",
    result: "Built a stronger physique with better performance",
    metric: "+6 kg lean mass",
    focus: "Muscle gain • Performance • Nutrition",
    before: "/images/transformations/client-d-before.jpg",
    after: "/images/transformations/client-d-after.jpg",
  },
];

export const socialProof = [
  "Trusted by busy professionals, beginners, and body transformation clients.",
  "Coaching style focused on realistic results, not crash tactics.",
  "Built for long-term physique change and sustainable habits.",
];

export const instagramPosts = [
  {
    image: "/images/instagram/insta-1.jpg",
    caption: "Strength, discipline, and consistency in every phase.",
  },
  {
    image: "/images/instagram/insta-2.jpg",
    caption: "Client progress built through smart training and nutrition.",
  },
  {
    image: "/images/instagram/insta-3.jpg",
    caption: "Coaching sessions focused on form, intensity, and results.",
  },
  {
    image: "/images/instagram/insta-4.jpg",
    caption: "Transformation is more than appearance — it’s confidence too.",
  },
];

export const fallbackPosts = [
  {
    _id: "1",
    title: "How to Start Your Fitness Journey Without Overthinking",
    slug: { current: "how-to-start-your-fitness-journey" },
    excerpt:
      "A practical beginner-friendly roadmap to training, nutrition, and consistency without doing too much too soon.",
    category: "Beginner Tips",
    publishedAt: "2026-03-01",
  },
  {
    _id: "2",
    title: "3 Mistakes That Slow Down Fat Loss Progress",
    slug: { current: "fat-loss-mistakes" },
    excerpt:
      "These common mistakes keep many people stuck even when they feel like they are trying hard.",
    category: "Fat Loss",
    publishedAt: "2026-02-18",
  },
  {
    _id: "3",
    title: "Why Strength Training Matters for Every Client",
    slug: { current: "why-strength-training-matters" },
    excerpt:
      "Strength training helps with body composition, confidence, metabolism, and long-term progress.",
    category: "Strength",
    publishedAt: "2026-02-05",
  },
];