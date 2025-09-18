import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title} | Priyanshu Kumar - Software Engineer</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/pk.jpg" />
  </Helmet>
);

export default SEO