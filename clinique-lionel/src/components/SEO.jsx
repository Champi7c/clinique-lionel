import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Cabinet Médical Lionel';
const DOMAIN = 'https://cml-sst.com';
const DEFAULT_IMAGE = `${DOMAIN}/logo.jpeg`;

const DEFAULT_DESCRIPTION =
  "Cabinet Médical Lionel – Médecine du travail, soins cliniques, prévention des risques professionnels et formations SST à Hann Mariste 2, Keur Ngor, Dakar, Sénégal. Agréé par l'État sénégalais depuis 2022.";

export function SEO({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Santé au Travail & Soins Cliniques – Hann Mariste, Dakar`;

  const metaDesc = description || DEFAULT_DESCRIPTION;
  const canonical = `${DOMAIN}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="fr_SN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
