import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://jiyopagtananan.com'
const description =
  'Jiyo Collin Pagtananan — Full Stack Engineer with 7+ years building and modernizing scalable web and mobile systems, from offline-first apps to unified platforms serving millions.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Jiyo Collin Pagtananan | Full Stack Engineer',
  description,
  keywords: [
    'Jiyo Collin Pagtananan',
    'Jiyo Pagtananan',
    'Software Engineer',
    'Software Developer',
    'Full Stack Engineer',
    'Full Stack Developer',
    'Philippines',
    'React',
    'Angular',
    'TypeScript',
    'Node.js',
    'AWS',
    'Portfolio',
  ],
  authors: [{ name: 'Jiyo Collin Pagtananan', url: siteUrl }],
  creator: 'Jiyo Collin Pagtananan',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Jiyo Collin Pagtananan',
    title: 'Jiyo Collin Pagtananan | Full Stack Engineer',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jiyo Collin Pagtananan | Full Stack Engineer',
    description,
  },
  // app/icon.png and app/apple-icon.png are picked up automatically by
  // Next.js. The PNG comes first because Google doesn't reliably use SVG
  // favicons; the SVG stays as a sharp icon for browsers that support it.
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon-jp.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jiyo Collin Pagtananan',
  jobTitle: 'Full Stack Engineer',
  url: siteUrl,
  nationality: 'Filipino',
  worksFor: {
    '@type': 'Organization',
    name: 'International Rice Research Institute (IRRI)',
  },
  sameAs: [
    'https://www.linkedin.com/in/jiyo-pagtananan-5880a0148/',
    'https://codewithjiyo.com',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
