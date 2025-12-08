import { Badge } from "@/components/ui/badge";

const Page = () => {
  return (
    <>
      <section className="layout-prefix flex-center mt-[90px] !max-w-screen-lg flex-col gap-5 md:mt-[140px]">
        <div className="flex flex-col items-center gap-2">
          <Badge>Privacy</Badge>
          <h1 className="heading-3-bold mb-8 font-bold">Privacy Policy</h1>

          <div className="flex max-w-none flex-col gap-4 px-4 marker:text-brand-300 md:px-0">
            <p className="paragraph">
              This Privacy Policy explains how we collect, use, and protect your
              personal information when using our website{" "}
              <strong>ayberkyavas.com</strong>. By continuing to use this site,
              you agree to the practices described here.
            </p>

            {/* SECTION: Data We Collect */}
            <h2 className="heading-6-bold">Information We Collect</h2>

            <p className="paragraph">
              We collect information that you voluntarily provide, as well as
              certain technical information automatically.
            </p>

            <h3 className="text-lg font-semibold">
              1. Information You Provide
            </h3>

            <p className="paragraph">
              When you interact with the website, we may collect:
            </p>
            <ul className="paragraph list-disc pl-6">
              <li>Your Google ID (Google OAuth login)</li>
              <li>Your name and Google profile photo</li>
              <li>Your email address</li>
              <li>Comments you submit</li>
              <li>The date and time of submitted comments</li>
              <li>Your “Agree to Terms” consent</li>
            </ul>

            <p className="paragraph">
              User profile information is stored securely in{" "}
              <strong>Sanity CMS</strong>. When you submit a comment, your name,
              avatar, and comment may be publicly displayed.
            </p>

            <p className="paragraph">
              When you submit a comment, an email notification is sent to the
              website owner via <strong>Resend</strong>, containing your comment
              details.
            </p>

            <h3 className="text-lg font-semibold">
              2. Automatically Collected Information
            </h3>
            <p className="paragraph">This may include:</p>

            <ul className="paragraph list-disc pl-6">
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Pages visited</li>
              <li>Performance and error logs</li>
            </ul>

            <p className="paragraph">
              We use <strong>Sentry</strong> for error monitoring. Sentry may
              process anonymized device and session metadata, but we do not
              intentionally collect sensitive personal data through it.
            </p>

            {/* SECTION: How We Use Data */}
            <h2 className="heading-6-bold">How We Use Your Information</h2>

            <p className="paragraph">Your information may be used for:</p>

            <ul className="paragraph list-disc pl-6">
              <li>User authentication via Google OAuth</li>
              <li>Displaying user names and avatars on comments</li>
              <li>Sending comment notification emails through Resend</li>
              <li>Storing comments and user data in Sanity CMS</li>
              <li>Improving site performance and stability</li>
              <li>Identifying errors and bugs using Sentry</li>
              <li>Preventing spam with Cloudflare Turnstile CAPTCHA</li>
              <li>Enforcing rate limits (e.g., one comment per 24 hours)</li>
            </ul>

            {/* SECTION: Cookies */}
            <h2 className="heading-6-bold">Cookies & Local Storage</h2>

            <p className="paragraph">
              We use cookies and local storage to improve the user experience.
              Examples include:
            </p>

            <ul className="paragraph list-disc pl-6">
              <li>Google OAuth session cookies to keep you logged in</li>
              <li>Local storage to save comment rate-limit timestamps</li>
              <li>
                Cookies necessary for correct operation of authentication and
                security features
              </li>
            </ul>

            <p className="paragraph">
              You may disable cookies in your browser, but some parts of the
              website may not function properly.
            </p>

            {/* SECTION: Data Security */}
            <h2 className="heading-6-bold">Data Security</h2>
            <p className="paragraph">
              We implement various security measures including:
            </p>

            <ul className="paragraph list-disc pl-6">
              <li>HTTPS encryption</li>
              <li>Token-based authentication</li>
              <li>Secure API routes</li>
              <li>Permission-controlled access in Sanity CMS</li>
              <li>Error isolation through Sentry</li>
            </ul>

            <p className="paragraph">
              Your data is never sold or shared with third parties except for
              service providers listed in this policy.
            </p>

            {/* SECTION: Your Rights */}
            <h2 className="heading-6-bold">Your Rights</h2>

            <p className="paragraph">
              Depending on your region, you may have rights to:
            </p>

            <ul className="paragraph list-disc pl-6">
              <li>Access your stored data</li>
              <li>Request deletion of your comments</li>
              <li>Request removal of your Google profile from Sanity CMS</li>
              <li>Opt-out of data collection (where legally applicable)</li>
            </ul>

            <p className="paragraph">
              Contact us if you wish to exercise these rights.
            </p>

            {/* SECTION: Services */}
            <h2 className="heading-6-bold">Third-Party Services Used</h2>

            <ul className="paragraph list-disc pl-6">
              <li>Google OAuth – authentication</li>
              <li>Sanity CMS – user and comment storage</li>
              <li>Resend – email notifications</li>
              <li>Sentry – error tracking</li>
              <li>Cloudflare Turnstile – spam protection</li>
              <li>Vercel – hosting and request logging</li>
            </ul>

            {/* SECTION: Changes */}
            <h2 className="heading-6-bold">Changes to This Privacy Policy</h2>

            <p className="paragraph">
              We may update this Privacy Policy occasionally. Any revisions will
              be posted here with an updated date.
            </p>

            {/* SECTION: Contact */}
            <h2 className="heading-6-bold">Contact Us</h2>

            <p className="paragraph">
              For privacy questions or data requests, you can contact:
            </p>

            <p className="paragraph">
              <strong className="text-brand-300">Email:</strong>{" "}
              contact@ayberkyavas.com
              <br />
              <strong className="text-brand-300">Website:</strong>{" "}
              ayberkyavas.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
