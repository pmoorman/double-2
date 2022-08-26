import React, { FC } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { format } from "date-fns";
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from "./index.module.scss";

import { BlogPost } from "@app/models";
import { Link } from "@app/components";

export interface SectionFeaturedArticlesProps {
  title?: string;
  posts: BlogPost[];
}

export const SectionFeaturedArticles: FC<SectionFeaturedArticlesProps> = ({
  title = "Our featured articles",
  posts = [],
}) => {
  return (
    <>
      <Row>
        <Col lg="10">
          <h2 className="mb-3">{title}</h2>
        </Col>
        <Col lg="2" className="d-none d-lg-block d-xl-block text-end">
          <Button as={Link} to="/blog" variant="outline-secondary">
            All articles
          </Button>
        </Col>
      </Row>
      <div className={styles.blogArtical}>
        {posts.map((post) => (
          <Row className="py-4" key={post.title}>
            <Col lg="3" md="6" sm="6" xs="4">
              {post.thumbnail && <GatsbyImage image={post.thumbnail} alt="" />}
            </Col>
            <Col lg="9" md="6" sm="6" xs="8">
              <div className={styles.date}>
                {format(new Date(post.date), "d MMM yyyy")} | {post.author}
              </div>
              <h3 className="mb-3">{post.title}</h3>
              <p className="d-none d-sm-block">{post.excerpt}</p>
            </Col>
          </Row>
        ))}

        <div className="d-block  d-xl-none  d-lg-none mb-5 mt-3">
          <Button as={Link} to="/blog" variant="outline-secondary">
            All articles
          </Button>
        </div>
      </div>
    </>
  );
};
