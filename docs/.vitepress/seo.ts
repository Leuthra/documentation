import { PageData, SiteConfig } from "vitepress";

// nambah tag meta head
function addMeta(pageData: PageData, name: string, content: string) {
  pageData.frontmatter.head ??= [];
  pageData.frontmatter.head.push([
    "meta",
    {
      name,
      content,
    },
  ]);
}

// seo site
export function SEO(pageData: PageData) {
  addMeta(
    pageData,
    "og:title",
    pageData.title === "Romi Muharom"
      ? `Romi Muharom`
      : `${pageData.title} | Romi Muharom`
  );

  addMeta(pageData, "og:type", "website");
  addMeta(
    pageData,
    "og:url",
    `https://documentation.romidev.tech/${pageData.relativePath}`
  );
  addMeta(pageData, "og:description", pageData.description);
  addMeta(pageData, "og:image", "/ogimage.webp");
  addMeta(pageData, "og:image:width", "1200");
  addMeta(pageData, "og:image:height", "630");

  addMeta(pageData, "twitter:card", "summary");

  addMeta(pageData, "theme-color", "#1c6ced");

  // Dont index the page if it's a versioned page.
  const path = pageData.filePath;
  if (path.includes("versions")) {
    addMeta(pageData, "robots", "noindex");
  }
}
