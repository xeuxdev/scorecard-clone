import { Footer } from "~/components/sections/footer";
import type { Route } from "./+types/terms-of-service";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms of Service | Lambda" },
    {
      name: "description",
      content:
        "Review Lambda's Terms of Service to understand the rules, responsibilities, and legal agreements that apply when using our platform.",
    },
    { property: "og:title", content: "Terms of Service | Lambda" },
    {
      property: "og:description",
      content:
        "Review Lambda's Terms of Service to understand the rules, responsibilities, and legal agreements that apply when using our platform.",
    },
    {
      property: "og:image",
      content:
        "https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680be2472e0c42225eb5c6fb_bb737b32df1d17f3492808c99d78bb0b_scorecard-open-graph.jpg",
    },
    { property: "twitter:title", content: "Terms of Service | Lambda" },
    {
      property: "twitter:description",
      content:
        "Review Lambda's Terms of Service to understand the rules, responsibilities, and legal agreements that apply when using our platform.",
    },
    {
      property: "twitter:image",
      content:
        "https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680be2472e0c42225eb5c6fb_bb737b32df1d17f3492808c99d78bb0b_scorecard-open-graph.jpg",
    },
    { property: "og:type", content: "website" },
  ];
}

export default function TermsOfServicePage() {
  return (
    <>
      <main className="main-wrapper">
        <section className="section_legal-page">
          <div className="padding-global">
            <div className="container-xlarge">
              <div fade-in="" className="legal-page_wrapper">
                <div
                  className="legal-page_heading"
                  //   style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
                >
                  <div className="legal-page_heading-content">
                    <h1 className="legal-page_text heading-style-h2">
                      Scorecard AI, Terms of Service (“Agreement”)
                    </h1>
                    <p className="legal-page_text subtitle-size-2 text-color-secondary">
                      V1.1 - Last edited on May 30, 2023
                    </p>
                  </div>
                </div>
                <div
                  className="legal-page_content"
                  //   style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
                >
                  <div className="legal-page_content">
                    <div className="legal-rich-text w-richtext">
                      <p>
                        This Agreement is a contract between you, the customer
                        (“Customer”), and Scorecard Technologies, Inc.
                        (“Scorecard”). It commences when you first sign up for
                        Scorecard’s services online or sign the first Order
                        Form, whichever occurs first.
                      </p>
                      <h2>1. The Services</h2>
                      <p>
                        Scorecard provides a suite of digital tools and
                        applications for evaluating AI products, which are
                        accessible via our website and applications.
                      </p>
                      <h2>2. Using the Services</h2>
                      <p>
                        2.1 Access. Scorecard will provide you with secure
                        access protocols such as usernames and passwords. You
                        are responsible for your employees’ and contractors’ use
                        of the Services.
                      </p>
                      <p>
                        2.2 Creating Accounts. To use our Services, you will
                        need to create an account, providing necessary
                        information such as names, passwords, and email
                        addresses.
                      </p>
                      <p>2.3 Usage Rules. Customer and users must not:</p>
                      <ul role="list" className="list-disc">
                        <li>
                          Engage in unauthorized modification or reverse
                          engineering of the Services.
                        </li>
                        <li>
                          Attempt unauthorized access to the Services or bypass
                          security measures.
                        </li>
                        <li>
                          Use the Services in violation of this Agreement or in
                          a manner that could cause harm.
                        </li>
                        <li>Misrepresent Scorecard or third parties.</li>
                        <li>Violate laws or infringe third party rights.</li>
                      </ul>
                      <p>
                        2.4 Testing AI Products. You grant Scorecard access to
                        your AI products for testing purposes. You retain
                        ownership of your AI products while permitting Scorecard
                        to use them within the Services.
                      </p>
                      <h2>3. Payments</h2>
                      <p>
                        Please pay all fees due under this Agreement within 30
                        days of invoice receipt. Fees are non-cancelable and
                        non-refundable. Our services will renew automatically at
                        the existing price and term, unless a notice of
                        non-renewal is given at least 30 days before the
                        renewal.
                      </p>
                      <h2>4. Liability</h2>
                      <p>
                        4.1 With the exception of matters concerning
                        intellectual property, confidentiality or non-payment:
                      </p>
                      <ul role="list" className="list-disc">
                        <li>
                          Neither party will be liable for indirect damages.
                        </li>
                        <li>
                          Scorecard's liability shall not exceed the fees you
                          paid in the year preceding the claim.
                        </li>
                      </ul>
                      <h2>5. Termination</h2>
                      <p>
                        Either party may terminate this Agreement under the
                        following conditions:
                      </p>
                      <ul role="list" className="list-disc">
                        <li>
                          Material breach of the Agreement not rectified within
                          30 days of notification.
                        </li>
                        <li>At convenience, with 30 days' notice.</li>
                      </ul>
                      <p>
                        Post termination, Sections 3 to 12 continue to apply.
                      </p>
                      <h2>6. Data Privacy and Security</h2>
                      <p>
                        Scorecard is committed to protecting your data and
                        content in compliance with applicable law.
                      </p>
                      <h2>7. Confidentiality</h2>
                      <p>
                        During this Agreement, the parties may share
                        confidential information. The parties are obligated to
                        use this information exclusively for this Agreement and
                        protect it with utmost care. If the law requires
                        disclosure, the other party shall be notified.
                      </p>
                      <h2>8. Indemnification</h2>
                      <p>
                        If third parties claim that the Services infringe their
                        intellectual property rights, Scorecard will defend or
                        settle these claims, provided you promptly inform us in
                        writing and cooperate with us.
                      </p>
                      <p>
                        Each party agrees to defend and indemnify the other from
                        claims or damages related to damage to property, injury,
                        death, or direct damage resulting from actions or
                        omissions related to this Agreement.
                      </p>
                      <h2>9. Changes to Terms</h2>
                      <p>
                        Scorecard may update these terms by notifying you.
                        Changes take effect at the start of your next payment
                        cycle unless you terminate within 30 days of receiving
                        notice.
                      </p>
                      <h2>10. General</h2>
                      <p>
                        10.1 This Agreement supersedes any prior agreements
                        between the parties regarding the Services.
                      </p>
                      <p>
                        10.2 Neither party may assign this Agreement without the
                        other's consent, except to an acquirer of all or
                        substantially all of their assets.
                      </p>
                      <p>
                        10.3 This Agreement does not constitute an agency,
                        partnership or joint venture.
                      </p>
                      <p>
                        10.4 Notices under this Agreement should be sent in
                        writing to{" "}
                        <a
                          href="mailto:legal@scorecard.ai?subject=Contact%20Scorecard%20Legal%20team"
                          data-wf-native-id-path="24b85dae-c9d2-c3b1-cc8c-90782a6e6bc0"
                          data-wf-ao-click-engagement-tracking="true"
                          data-wf-element-id="24b85dae-c9d2-c3b1-cc8c-90782a6e6bc0"
                        >
                          legal@scorecard.ai
                        </a>
                      </p>
                      <p>
                        10.5 Neither party will be liable for delays or failures
                        due to circumstances beyond their reasonable control.
                      </p>
                      <p>
                        10.6 This Agreement is governed by California law. The
                        parties consent to the exclusive jurisdiction of courts
                        in San Francisco, California for disputes under this
                        Agreement.
                      </p>
                      <p>
                        10.7 If any part of this Agreement is unenforceable, the
                        rest of the Agreement will remain in effect.
                      </p>
                      <p>
                        10.8 No delay or failure by either party in exercising
                        any right under this Agreement shall constitute a waiver
                        of that right.
                      </p>
                    </div>
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
