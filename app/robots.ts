export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      sitemap: "https://scholar-nest.com/sitemap.xml",
    };
  }
  