import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: (
    <>
      <title>Docs | Mash Markets</title>
      <meta name="description" content="Mash Markets Documentation" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
  logo: (
    <>
      <span style={{ marginLeft: ".4em", fontWeight: 500 }}>Mash Markets</span>
    </>
  ),
  project: {
    link: "https://github.com/mashmarkets/",
  },
  docsRepositoryBase: "https://github.com/mashmarket/docs",
  footer: {
    content: "Mash Markets Documentation",
  },
};

export default config;
