import { Helmet } from "react-helmet-async";

const DEFAULT_DOMAIN = "https://techneest.com";
const DEFAULT_TITLE = "Techneest | Digital Solutions for a Bolder Tomorrow";
const DEFAULT_DESCRIPTION =
  "We design, develop and scale web, mobile and custom software solutions that help businesses innovate, operate efficiently and grow in the digital world.";
const DEFAULT_OG_IMAGE = `${DEFAULT_DOMAIN}/favicon.svg`;

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = "",
  type = "website",
  ogImage = DEFAULT_OG_IMAGE,
}) {
  const fullCanonical = `${DEFAULT_DOMAIN}${canonicalPath}`;

  return (
    <Helmet>
      {/* Standard HTML Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Techneest" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
