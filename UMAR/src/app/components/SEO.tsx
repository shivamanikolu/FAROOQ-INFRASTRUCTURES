import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: "website" | "profile" | "article";
  ogImage?: string;
  schema?: object; // optional JSON-LD structured data object
}

export function SEO({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage = "https://farooqinfrastructures.com/companylogo.jpeg",
  schema
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title tag
    document.title = `${title} | Farooq Advisors`;

    // 2. Update Description meta tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // 3. Update Canonical Link tag
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);

    // 4. Update Open Graph (OG) tags
    const ogTags = [
      { property: "og:title", content: `${title} | Farooq Advisors` },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: ogType },
      { property: "og:image", content: ogImage },
      { property: "og:site_name", content: "Farooq Advisors" }
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // 5. Update Twitter Cards tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${title} | Farooq Advisors` },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage }
    ];

    twitterTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // 6. Inject dynamic Route-specific Schema (JSON-LD)
    let scriptSchema = document.querySelector('script[type="application/ld+json"]#route-schema');
    if (schema) {
      if (!scriptSchema) {
        scriptSchema = document.createElement("script");
        scriptSchema.setAttribute("type", "application/ld+json");
        scriptSchema.setAttribute("id", "route-schema");
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.textContent = JSON.stringify(schema);
    } else if (scriptSchema) {
      scriptSchema.remove();
    }
  }, [title, description, canonicalUrl, ogType, ogImage, schema]);

  return null;
}
