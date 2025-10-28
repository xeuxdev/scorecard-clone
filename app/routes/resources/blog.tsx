import { AllBlogs } from "~/components/sections/blog/all-blogs";
import { ControlSection } from "~/components/sections/control";
import { Footer } from "~/components/sections/footer";

export default function BlogPage() {
  return (
    <div>
      <style>
        {`        .blog-filter_radio {
            background-color: var(--_color-themes---background-color--background-secondary);
        color: var(--_color-themes---text-color--text-primary);
        transition: background-color 0.4s, color 0.4s;
        }

        .blog-filter_radio:has(.blog-filter_radio_radio.w--redirected-checked) {
            background-color: var(--_color-themes---background-color--background-alternate);
        color: var(--_color-themes---text-color--text-alternate);
        }

        .blog-gallery_collection .blog-gallery_item {
            opacity: 1;
        transform: translateY(0rem);
        transition: opacity 0.4s, transform 0.4s cubic-bezier(.32, .72, 0, 1);
        }

        .blog-gallery_collection.list-filtering .blog-gallery_item {
            opacity: 0;
        transform: translateY(1rem);
        }`}
      </style>

      <main className="main-wrapper is-padding-start">
        <AllBlogs />

        <ControlSection />
      </main>

      <Footer />
    </div>
  );
}
