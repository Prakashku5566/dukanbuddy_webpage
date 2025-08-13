import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
const SeoMeta = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogUrl,
  ogType = "website",
  ogTitle,
  ogDescription,
}) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name='description' content={description} />}

      {ogTitle && <meta property='og:title' content={ogTitle} />}
      {ogDescription && (
        <meta property='og:description' content={ogDescription} />
      )}
      {ogImage && <meta property='og:image' content={ogImage} />}
      {ogUrl && <meta property='og:url' content={ogUrl} />}
      {ogType && <meta property='og:type' content={ogType} />}

      {canonicalUrl && <link rel='canonical' href={canonicalUrl} />}
    </Helmet>
  );
};
SeoMeta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonicalUrl: PropTypes.string,
  ogImage: PropTypes.string,
  ogUrl: PropTypes.string,
  ogType: PropTypes.string, // <-- add this line
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
};

export default SeoMeta;
