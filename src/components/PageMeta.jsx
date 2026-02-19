import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://magnaperitus.in';

export default function PageMeta({ title, description, path }) {
  const fullTitle = `${title} | Magnaperitus Law Firm \u2013 Bhopal`;
  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
