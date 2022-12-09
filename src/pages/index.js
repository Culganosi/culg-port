import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  const imgsrc = getImage(data.file);
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web Developer based in Montreal</p>
          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
        </div>
        <GatsbyImage image={imgsrc} alt="desk" />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Desk {
    file(relativePath: { eq: "desk.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
