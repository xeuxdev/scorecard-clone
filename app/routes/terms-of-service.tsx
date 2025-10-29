import { Footer } from "~/components/sections/footer";
import type { Route } from "./+types/terms-of-service";
import { Link } from "react-router";

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
      // content:
      //   "https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680be2472e0c42225eb5c6fb_bb737b32df1d17f3492808c99d78bb0b_lambda-open-graph.jpg",
    },
    { property: "twitter:title", content: "Terms of Service | Lambda" },
    {
      property: "twitter:description",
      content:
        "Review Lambda's Terms of Service to understand the rules, responsibilities, and legal agreements that apply when using our platform.",
    },
    {
      property: "twitter:image",
      // content:
      //   "https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680be2472e0c42225eb5c6fb_bb737b32df1d17f3492808c99d78bb0b_lambda-open-graph.jpg",
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
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  <div className="legal-page_heading-content">
                    <h1 className="legal-page_text heading-style-h2">
                      Lambda Builders' Kit – Terms of Service (“Agreement”)
                    </h1>
                    <p className="legal-page_text subtitle-size-2 text-color-secondary">
                      V1.1 – Last updated on October 29, 2025
                    </p>
                  </div>
                </div>
                <div
                  className="legal-page_content"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  <div className="legal-page_content">
                    <div className="legal-rich-text w-richtext">
                      <p>
                        This Agreement is a contract between you, the customer
                        (“Customer”), and Lambda Technologies, Inc. (“Lambda”).
                        It begins when you first sign up for Lambda’s services
                        online or execute the first Order Form, whichever occurs
                        first.
                      </p>
                      <h2>1. The Services</h2>
                      <p>
                        Lambda provides a developer toolkit and suite of
                        blockchain privacy tools (“Services”) that enable
                        developers to build privacy-preserving applications
                        using zero-knowledge proofs, multi-party computation,
                        and advanced cryptography.
                      </p>
                      <p>
                        These Services are accessible via our SDKs, APIs, CLI
                        tools, and web platform.
                      </p>
                      <h2>2. Using the Services</h2>
                      <p>2.1 Access</p>
                      <p>
                        Lambda will provide secure access protocols such as API
                        keys, authentication tokens, and login credentials. You
                        are responsible for maintaining the confidentiality of
                        these credentials and for all activities conducted under
                        your accounts.
                      </p>
                      <p>2.2 Creating Accounts</p>
                      <p>
                        To access the Services, you must create an account and
                        provide necessary information such as name, contact
                        details, and authentication credentials. You agree to
                        provide accurate information and keep it up to date.
                      </p>
                      <p>2.3 Usage Rules</p>
                      <p>You and your users must not:</p>
                      <ul role="list" className="list-disc">
                        <li>
                          Modify, reverse engineer, or attempt to extract source
                          code from the Services.
                        </li>
                        <li>
                          Access or use the Services in an unauthorized or
                          unlawful manner.
                        </li>
                        <li>
                          Circumvent or disable any security or encryption
                          mechanism within the Services.
                        </li>
                        <li>
                          Misrepresent your association with Lambda or
                          impersonate other users.
                        </li>
                        <li>
                          Use the Services to store, transmit, or process
                          unlawful or harmful content.
                        </li>
                        <li>
                          Violate any applicable laws or infringe upon
                          third-party rights.
                        </li>
                      </ul>
                      <p>2.4 Use of Encrypted Data</p>
                      <p>
                        You retain full ownership of all data, code, or
                        computations you encrypt, upload, or process using the
                        Services. By using Lambda’s SDKs or APIs, you grant
                        Lambda a limited, non-exclusive license to process
                        encrypted data solely for the purpose of providing the
                        Services, maintaining system functionality, and
                        improving platform performance. Lambda does not access
                        or decrypt your private data.
                      </p>
                      <h2>3. Payments</h2>
                      <p>
                        All fees under this Agreement are payable within 30 days
                        of invoice receipt.
                      </p>
                      <p>Fees are non-cancelable and non-refundable.</p>
                      <p>
                        Services renew automatically under the existing terms
                        and pricing unless notice of non-renewal is provided at
                        least 30 days before renewal.
                      </p>
                      <h2>4. Liability</h2>
                      <p>4.1 Limitation of Liability</p>
                      <p>
                        Except for claims related to intellectual property,
                        confidentiality, or unpaid fees:
                      </p>
                      <ul role="list" className="list-disc">
                        <li>
                          Neither party shall be liable for any indirect,
                          incidental, or consequential damages.
                        </li>
                        <li>
                          Lambda’s total liability shall not exceed the fees
                          paid by the Customer during the 12 months preceding
                          the claim.
                        </li>
                      </ul>
                      <h2>5. Termination</h2>
                      <p>Either party may terminate this Agreement:</p>
                      <ul role="list" className="list-disc">
                        <li>
                          In the event of a material breach not remedied within
                          30 days after written notice.
                        </li>
                        <li>For convenience, with 30 days’ written notice.</li>
                      </ul>
                      <p>
                        Upon termination, Sections 3–12 shall survive and remain
                        in effect.
                      </p>
                      <h2>6. Data Privacy and Security</h2>
                      <p>
                        Lambda implements industry-standard cryptographic and
                        security measures to protect customer data and content.
                      </p>
                      <p>
                        Lambda does not store or retain decrypted customer data
                        and complies with applicable data protection laws.
                      </p>
                      <p>
                        Customers are responsible for maintaining the
                        confidentiality of any private keys or encryption
                        credentials used within the Services.
                      </p>
                      <h2>7. Confidentiality</h2>
                      <p>
                        Each party may disclose confidential information to the
                        other as necessary under this Agreement.
                      </p>
                      <p>Both parties agree to:</p>
                      <ul role="list" className="list-disc">
                        <li>
                          Use the information solely for purposes of this
                          Agreement.
                        </li>
                        <li>
                          Protect it with reasonable care against unauthorized
                          disclosure.
                        </li>
                      </ul>
                      <p>
                        If disclosure is required by law, the receiving party
                        must notify the disclosing party promptly.
                      </p>
                      <h2>8. Indemnification</h2>
                      <p>
                        Lambda shall defend and settle any third-party claims
                        alleging that the Services infringe intellectual
                        property rights, provided you promptly notify Lambda and
                        cooperate fully in the defense.
                      </p>
                      <p>
                        Each party agrees to indemnify the other from any
                        claims, damages, or expenses arising from negligence,
                        willful misconduct, or breach of this Agreement.
                      </p>
                      <h2>9. Changes to Terms</h2>
                      <p>
                        Lambda may update this Agreement with prior written
                        notice.
                      </p>
                      <p>
                        Updates take effect at the beginning of the next billing
                        cycle unless the Customer provides notice of termination
                        within 30 days of the update notification.
                      </p>
                      <h2>10. General</h2>
                      <p>
                        10.1 This Agreement constitutes the entire understanding
                        between the parties regarding the Services and
                        supersedes prior communications.
                      </p>
                      <p>
                        10.2 Neither party may assign this Agreement without the
                        other’s consent, except in connection with a merger or
                        acquisition.
                      </p>
                      <p>
                        10.3 This Agreement does not create a partnership, joint
                        venture, or agency relationship.
                      </p>
                      <p>
                        10.4 Notices shall be sent to{" "}
                        <Link to="mailto:legal@lambda.builders">
                          legal@lambda.builders
                        </Link>
                        .
                      </p>
                      <p>
                        10.5 Neither party is liable for delays caused by
                        factors beyond reasonable control, including natural
                        disasters or network outages.
                      </p>
                      <p>
                        10.6 This Agreement is governed by the laws of
                        California, and disputes shall be resolved in the courts
                        of San Francisco, California.
                      </p>
                      <p>
                        10.7 If any provision is found unenforceable, the
                        remainder shall remain in effect.
                      </p>
                      <p>
                        10.8 Failure or delay by either party in enforcing any
                        right under this Agreement does not constitute a waiver
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
