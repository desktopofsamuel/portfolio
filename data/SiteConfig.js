module.exports = {
  siteTitle: "Desktop of Samuel", // Site title.
  siteTitleShort: "Desktop of Samuel", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Desktop of Samuel", // Alternative site title for SEO.
  siteLogo: "/logo/Favicon.png", // Logo used for SEO and manifest.
  siteUrl: "https://samuelv2.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Intersection of Design and Technology", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  googleAnalyticsID: "UA-114278308-5", // GA tracking ID.
  postDefaultCategoryID: "Technology", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "MMM DD, YYYY", locale: "en", // Date format for display.
  userName: "Samuel Wong", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Hong Kong", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/desktopofsamuel",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:desktopofsamuel@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "©2019 Samuel Wong.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#FFD644", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
