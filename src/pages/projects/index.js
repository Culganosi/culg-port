import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Projects({ data }) {
  console.log(data);
  const portfolioProjects = data.projects.nodes;
  const contactInfo = data.contact.siteMetadata.contact;
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects && Websites I've Made.</h3>
        <div className={styles.projects}>
          {portfolioProjects.map((project) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={getImage(
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  )}
                  alt="Banner"
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Interested? mm? Email {contactInfo}</p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query portfolio {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
