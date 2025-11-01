import { Footer } from "~/components/sections/footer";
import type { Route } from "./+types/privacy-policy";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy | Lambda" },
    {
      name: "description",
      content:
        "Review Lambda's Privacy Policy to understand the rules, responsibilities, and legal agreements that apply when using our platform.",
    },
    { property: "og:title", content: "Privacy Policy | Lambda" },
    {
      property: "og:description",
      content:
        "Review Lambda's Privacy Policy to understand the rules, responsibilities, and legal agreements that apply when using our platform.",
    },
    {
      property: "og:image",
      // content:
      //   "https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680be2472e0c42225eb5c6fb_bb737b32df1d17f3492808c99d78bb0b_lambda-open-graph.jpg",
    },
    { property: "twitter:title", content: "Privacy Policy | Lambda" },
    {
      property: "twitter:description",
      content:
        "Review Lambda's Privacy Policy to understand the rules, responsibilities, and legal agreements that apply when using our platform.",
    },
    {
      property: "twitter:image",
      // content:
      //   "https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680be2472e0c42225eb5c6fb_bb737b32df1d17f3492808c99d78bb0b_lambda-open-graph.jpg",
    },
    { property: "og:type", content: "website" },
  ];
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="main-wrapper">
        <section className="section_legal-page">
          <div className="padding-global">
            <div className="container-xlarge">
              <div fade-in="" className="legal-page_wrapper">
                <div className="legal-page_heading">
                  <div className="legal-page_heading-content">
                    <h1 className="legal-page_text heading-style-h2">
                      Privacy Policy
                    </h1>
                    <p className="legal-page_text subtitle-size-2 text-color-secondary">
                      V1.1 - Last edited on May 30, 2023
                    </p>
                  </div>
                </div>
                <div className="legal-page_content">
                  <div className="legal-rich-text w-richtext">
                    <p>Welcome to Lambda</p>
                    <p>
                      We value your privacy and want to be clear about the data
                      we collect, how we use it, and your rights to control that
                      information. We respect your personal data and take its
                      security very seriously. Should you have any queries or
                      concerns, we're here to answer. Reach out to us at{" "}
                      <a
                        href="mailto:contact@getlambda.ai?subject=Contact%20Lambda"
                        data-wf-native-id-path="b073e5e4-5544-85a0-b269-8e340a3642fa"
                        data-wf-ao-click-engagement-tracking="true"
                        data-wf-element-id="b073e5e4-5544-85a0-b269-8e340a3642fa"
                      >
                        team@lambda.io
                      </a>{" "}
                      anytime.
                    </p>
                    <h2>1. What Information We Collect</h2>
                    <p>
                      We only collect necessary personal information that you
                      voluntarily provide to us when using our website
                      getlambda.ai, or when you express an interest in our
                      products and services. Here's a brief overview:
                    </p>
                    <ul role="list" className="list-disc">
                      <li>
                        Personal Information: We collect personal identifiers
                        like your name and contact information, which includes
                        your email address.
                      </li>
                      <li>
                        Payment Data: If you make a purchase, we need to collect
                        data for the transaction. This includes your payment
                        card number and security code. We treat this information
                        with the utmost care and security.
                      </li>
                    </ul>
                    <h2>2. How We Use Your Information</h2>
                    <p>
                      We use your data to provide, improve, and personalize our
                      services. Here's how:
                    </p>
                    <ul role="list" className="list-disc">
                      <li>
                        To facilitate the creation and management of your
                        account.
                      </li>
                      <li>
                        To communicate with you about updates, news, and
                        promotional offers.
                      </li>
                      <li>To share critical administrative information.</li>
                      <li>To display testimonials, with your prior consent.</li>
                      <li>
                        To conduct business analysis and improvement activities
                        like data analysis, audits, developing new products,
                        enhancing the website, identifying usage trends,
                        determining the effectiveness of promotional campaigns,
                        and operating and expanding our business activities.
                      </li>
                    </ul>
                    <h2>3. Sharing Your Information</h2>
                    <p>
                      In some circumstances, we may share your information with
                      trusted third parties:
                    </p>
                    <ul role="list" className="list-disc">
                      <li>
                        With service providers, consultants, and third-party
                        business partners who perform services for us.
                      </li>
                      <li>
                        With third-party advertisers, where we might allow
                        third-party advertising partners to deliver tailored ads
                        to you on our services or elsewhere online.
                      </li>
                    </ul>
                    <h2>4. Your Rights and Choices</h2>
                    <p>
                      You have several ways to exercise control over your
                      information:
                    </p>
                    <ul role="list" className="list-disc">
                      <li>
                        You can review, change, or terminate your account at any
                        time.
                      </li>
                      <li>
                        If you believe that we are processing your information
                        unlawfully, you have the right to lodge a complaint with
                        your local data protection authority.
                      </li>
                    </ul>
                    <h2>5. Your Rights and Choices</h2>
                    <p>
                      We may update this privacy policy periodically to reflect
                      changes in our practices. We will inform you if we make
                      significant changes and indicate at the top of the policy
                      when it was most recently updated.
                    </p>
                    <h2>6. Contact Us</h2>
                    <p>
                      For any questions or comments about this policy, please
                      contact us at{" "}
                      <a href="mailto:contact@getlambda.ai?subject=Contact%20Lambda">
                        team@lambda.io
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
