import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";

export default function Home() {
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
        <img src="/desk.png" alt="site image" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  );
}
