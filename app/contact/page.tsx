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
