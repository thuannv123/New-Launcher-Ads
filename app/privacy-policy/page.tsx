import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - AdLauncher",
  description: "Privacy Policy for AdLauncher - Facebook Ads Management Platform",
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 1, 2026"
  const appName    = "AdLauncher"
  const company    = "Alex"
  const contactEmail = "thuannv06022001@gmail.com"
  const websiteUrl   = "https://nguyenvanthuan.site"

  return (
    <div className="min-h-svh bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/applogo.webp" alt={appName} width={26} height={26} className="rounded-md" />
            <span className="text-[15px] font-bold tracking-tight">{appName}</span>
          </Link>
          <Link
            href="/"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to App
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <svg className="size-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Privacy Policy</h1>
              <p className="mt-1 text-[14px] text-muted-foreground">
                Last updated: <span className="font-medium text-foreground">{lastUpdated}</span>
              </p>
              <p className="mt-2 text-[13px] text-muted-foreground max-w-2xl">
                {appName} by {company} is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-10">

          {/* 1. Introduction */}
          <Section title="1. Introduction">
            <p>
              {appName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is operated by {company} and provides a Facebook Ads management platform that allows businesses to create, launch, and manage their Meta advertising campaigns efficiently.
            </p>
            <p className="mt-3">
              By using {appName}, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree, please do not use our services.
            </p>
          </Section>

          {/* 2. Information We Collect */}
          <Section title="2. Information We Collect">
            <SubSection title="2.1 Information You Provide">
              <ul className="list-disc space-y-1.5 pl-5">
                <li><strong>Account Information:</strong> Name, email address when you register.</li>
                <li><strong>Organization Data:</strong> Organization name, slug, and team member information.</li>
                <li><strong>Ad Content:</strong> Creative assets (images, videos), ad copy (headlines, descriptions, primary text), and campaign configurations you create within the platform.</li>
                <li><strong>Profile Data:</strong> Avatar, display name, and preferences.</li>
              </ul>
            </SubSection>
            <SubSection title="2.2 Information from Facebook/Meta">
              <p className="mb-2">When you connect your Facebook account, we access:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Facebook User ID, name, profile picture, and email address</li>
                <li>Facebook Pages associated with your account</li>
                <li>Ad Accounts and Business Manager accounts</li>
                <li>Advertising performance data (spend, impressions, clicks, conversions)</li>
                <li>Creative assets uploaded to your ad accounts</li>
                <li>Product catalogs associated with your Business Manager</li>
                <li>OAuth access tokens for ongoing API access</li>
              </ul>
            </SubSection>
            <SubSection title="2.3 Automatically Collected Information">
              <ul className="list-disc space-y-1.5 pl-5">
                <li><strong>Usage Data:</strong> Pages visited, features used, and interaction patterns.</li>
                <li><strong>Device Data:</strong> Browser type, operating system, and IP address.</li>
                <li><strong>Session Cookies:</strong> Authentication tokens for keeping you logged in.</li>
              </ul>
            </SubSection>
          </Section>

          {/* 3. How We Use Your Information */}
          <Section title="3. How We Use Your Information">
            <p>We use your information to:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Provide, maintain, and improve our ad management services</li>
              <li>Create and manage Facebook/Meta ad campaigns on your behalf</li>
              <li>Upload creative assets to Meta&apos;s advertising platform</li>
              <li>Display advertising performance data and analytics</li>
              <li>Enable collaboration between team members within your organization</li>
              <li>Send invitation emails and important account notifications</li>
              <li>Authenticate your identity and maintain session security</li>
              <li>Respond to support requests and inquiries</li>
            </ul>
          </Section>

          {/* 4. Facebook Data Usage */}
          <Section title="4. Facebook/Meta Data Usage">
            <p>We access Facebook data solely to provide our advertising management services. Here is how each permission is used:</p>
            <div className="mt-4 space-y-3">
              {[
                { perm: "ads_management", desc: "To create, edit, duplicate, pause, and manage your Meta ad campaigns, ad sets, and individual ads on your behalf." },
                { perm: "ads_read", desc: "To retrieve campaign performance metrics (spend, impressions, clicks, ROAS, CPA) and display analytics within the platform." },
                { perm: "business_management", desc: "To access your Business Manager, retrieve connected ad accounts and business assets, and manage campaigns across your business portfolio." },
                { perm: "pages_show_list", desc: "To display your connected Facebook Pages so you can select which page to advertise from when launching campaigns." },
                { perm: "pages_read_engagement", desc: "To read page-level engagement data and enable the Best Performing Organic Post automation trigger." },
                { perm: "catalog_management", desc: "To access and manage your Meta product catalogs for dynamic product ads and catalog-based campaigns." },
              ].map(({ perm, desc }) => (
                <div key={perm} className="rounded-lg border border-border/60 bg-muted/20 px-4 py-3">
                  <p className="text-[12px] font-mono font-semibold text-primary">{perm}</p>
                  <p className="mt-1 text-[13px] text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] font-medium text-foreground">
              We do not sell, rent, or share your Facebook data with any third parties. We do not use your Facebook data for any purpose unrelated to providing our services.
            </p>
          </Section>

          {/* 5. Data Storage and Security */}
          <Section title="5. Data Storage and Security">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Data is stored securely using <strong>Supabase</strong> (hosted on AWS infrastructure) with row-level security policies ensuring only authorized users can access their data.</li>
              <li>Facebook access tokens are encrypted at rest and transmitted only over HTTPS.</li>
              <li>All data transmission uses TLS 1.2+ encryption.</li>
              <li>Access to organization data is strictly limited to authorized team members within the same organization.</li>
              <li>We regularly review our security practices and update them as needed.</li>
            </ul>
          </Section>

          {/* 6. Data Sharing */}
          <Section title="6. Data Sharing and Disclosure">
            <p>We do not sell your personal information. We share your information only in the following circumstances:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li><strong>Meta/Facebook:</strong> To create and manage advertising campaigns as directed by you through the Meta Marketing API.</li>
              <li><strong>Your Team Members:</strong> Organization members can view shared creative assets and campaign data within the same organization workspace.</li>
              <li><strong>Service Providers:</strong> Trusted third-party services including Supabase (database hosting) and Resend (transactional email) that process data strictly on our behalf and under confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> If required by applicable law, regulation, court order, or to protect the rights and safety of our users.</li>
            </ul>
          </Section>

          {/* 7. Data Retention */}
          <Section title="7. Data Retention">
            <p>
              We retain your data for as long as your account is active or as needed to provide our services. Specifically:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Account data is retained until you delete your account.</li>
              <li>Creative assets and campaign data are retained until you delete your organization.</li>
              <li>Facebook access tokens are deleted immediately upon disconnecting your Facebook account or deleting your organization.</li>
              <li>Execution logs are retained for 90 days for debugging purposes.</li>
            </ul>
          </Section>

          {/* 8. Your Rights */}
          <Section title="8. Your Rights">
            <p>You have the following rights regarding your personal data:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Delete your account and all associated data through the Settings page. Deletion is permanent and irreversible.</li>
              <li><strong>Disconnect Facebook:</strong> Revoke our access to your Facebook account at any time through Settings → Connect, which immediately removes all stored tokens.</li>
              <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format.</li>
              <li><strong>Opt-out:</strong> Opt out of non-essential communications at any time.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a>.
            </p>
          </Section>

          {/* 9. Cookies */}
          <Section title="9. Cookies">
            <p>
              We use only essential cookies required for authentication and session management. We do not use tracking, advertising, or analytics cookies. Specifically:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li><strong>Session cookies:</strong> To keep you logged in during your session.</li>
              <li><strong>CSRF tokens:</strong> To protect against cross-site request forgery attacks.</li>
            </ul>
          </Section>

          {/* 10. Children's Privacy */}
          <Section title="10. Children's Privacy">
            <p>
              {appName} is intended for use by businesses and individuals aged 18 and older. We do not knowingly collect personal information from individuals under 18. If you believe a minor has provided us with personal information, please contact us immediately.
            </p>
          </Section>

          {/* 11. Changes */}
          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. When we make material changes, we will notify you via email or an in-app notification and update the &quot;Last updated&quot; date at the top of this page. Your continued use of {appName} after any changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          {/* 12. Contact */}
          <Section title="12. Contact Us">
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
            <div className="mt-4 rounded-xl border border-border bg-muted/20 px-5 py-4 space-y-1.5">
              <p className="text-[14px]"><span className="font-semibold">Company:</span> {company}</p>
              <p className="text-[14px]"><span className="font-semibold">Product:</span> {appName}</p>
              <p className="text-[14px]">
                <span className="font-semibold">Email:</span>{" "}
                <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a>
              </p>
              <p className="text-[14px]">
                <span className="font-semibold">Website:</span>{" "}
                <a href={websiteUrl} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{websiteUrl}</a>
              </p>
            </div>
          </Section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 mt-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/applogo.webp" alt="Logo" width={18} height={18} className="rounded" />
            <span className="text-[13px] font-semibold">{appName}</span>
          </Link>
          <div className="flex items-center gap-4 text-[12px] text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <span>&copy; {new Date().getFullYear()} {company}. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ─── Section components ───────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="scroll-mt-20">
      <h2 className="text-lg font-bold tracking-tight border-b border-border/60 pb-2 mb-4">{title}</h2>
      <div className="text-[14px] leading-relaxed text-foreground/80 space-y-2">
        {children}
      </div>
    </section>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-[14px] font-semibold text-foreground mb-2">{title}</h3>
      <div className="text-[14px] leading-relaxed text-foreground/80">
        {children}
      </div>
    </div>
  )
}
