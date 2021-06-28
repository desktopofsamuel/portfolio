import React from "react";
import Helmet from "react-helmet";
import { PageProps } from "gatsby";
import NavBar from "components/common/NavBar";
import SEO from "components/SEO";
import Footer from "components/common/Footer";
import config from "../../data/SiteConfig";
import "./index.css";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
  require("react-scrollspy");
}

type LayoutTemplateProps = {
  title?: string,
  description?: string,
  keywords?: string,
};

const LayoutTemplate: React.FC = (props: PageProps & LayoutTemplateProps) => {
  const { children, title, description, keywords } = props;
  return (
    <>
      <SEO />
      <Helmet title={`${title}  | ${config.siteTitle}`}>
        <meta name="twitter:title" content={`${title} | ${config.siteTitle}`} />
        <meta property="og:title" content={`${title} | ${config.siteTitle}`} />
        <meta name="description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutTemplate;

const defaultLayoutProps: LayoutTemplateProps = {
  title: config.siteTitle,
  description: config.siteDescription,
  keywords: config.siteKeywords,
};

LayoutTemplate.defaultProps = defaultLayoutProps;

// LayoutTemplate.defaultProps = {
//   title: config.siteTitle,
//   description: config.siteDescription,
//   keywords: config.siteKeywords,
// };

/* <MDXProvider
        components={{
          h2: (props) => (
            <h2
              {...props}
              style={{
                fontFamily: "var(--primary-font)",
                fontWeight: "var(--font-weight-bold)",
                marginTop: "var(--padding-m)",
              }}
            />
          ),
        }}
      > */
/*       </MDXProvider> */
