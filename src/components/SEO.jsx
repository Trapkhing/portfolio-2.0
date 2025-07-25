import { Helmet } from 'react-helmet'

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
}) => {
  const defaultTitle = 'My Portfolio'
  const defaultDescription = 'Personal portfolio website showcasing my projects and skills.'
  const defaultKeywords = 'portfolio, developer, web development, react, Evans'
  const defaultImage = '/images/og-default.png';
  const defaultUrl = 'https://evans-kumi-2.vercel.app'

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph Meta (Facebook, LinkedIn) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />

      {/* Twitter Card Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  )
}

export default SEO
