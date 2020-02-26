import React from "react"
import { Layout, SEO, Static } from "gatsby-theme-blog"

export default () => {
  return (
    <Layout>
      <SEO
        title={"Privacy Policy | 5000164 is here"}
        description={"Privacy Policy"}
        slug={"/privacy/"}
        article={false}
      />
      <Static
        title={"Privacy Policy"}
        content={
          "<p>This website uses cookies.</p>" +
          "<p>This website uses <a href='https://marketingplatform.google.com/about/analytics/'>Google Analytics</a>." +
          "See " +
          "<a href='https://www.google.com/policies/privacy/partners/'>How Google uses data when you use our partners' sites or apps</a>" +
          "  to know how it collects and processes data.</p>"
        }
      />
    </Layout>
  )
}
