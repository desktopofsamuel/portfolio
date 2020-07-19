const config = {
  siteTitle: "Samuel Wong — Hong Kong UI/UX Designer", // Site title.
  siteTitleShort: "Desktop of Samuel", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Samuel Wong — Hong Kong UI/UX Designer", // Alternative site title for SEO.
  siteLogo:
    "icons-2e5ea9ae11520cba6cedd44d8a342667/apple-touch-icon-180x180.png", // Logo used for SEO and manifest.
  siteUrl: "https://desktopofsamuel.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "I'm Samuel, I'm a Hong Kong based UI/UX Designer. User Interface Design, User Experience Design, Product Design, Design Thinking, Product Development, Brand Design - A personal design portfolio, also journal for designers' side-projects.", // Website description used for RSS feeds/meta description tag.
  siteKeywords:
    "Samuel Wong, Hong Kong, UI, UX, User Interface Design, User Experience Design, Product Design, Design Thinking, Product Development, Brand Design",
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Samuel Wong — Hong Kong UI/UX Designer", // Title of the RSS feed
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-114278308-5", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Technology", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "MMM DD, YYYY",
  locale: "en", // Date format for display.
  userName: "Samuel Wong", // Username to display in the author segment.
  userTwitter: "@desktopofsamuel", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Hong Kong", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "I'm Samuel, I'm a Hong Kong based UI/UX Designer. User Interface Design, User Experience Design, Product Design, Design Thinking, Product Development, Brand Design - A personal design portfolio, also journal for designers' side-projects.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/desktopofsamuel",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "mailto:desktopofsamuel@gmail.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "©2018-2020 Samuel Wong.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#FFD644", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
