import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords }) => {
  const defaultTitle = 'My Portfolio';
  const defaultDescription = 'Personal portfolio website showcasing my projects and skills';
  const defaultKeywords = 'portfolio, developer, web development, react,Evans,Kumi';

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;