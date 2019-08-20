import React from "react"
import { Link } from "gatsby"
import  Who  from "./who.mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Who/>
  </Layout>
)

export default SecondPage
