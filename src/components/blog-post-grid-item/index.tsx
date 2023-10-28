import React, { FC } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { BlogPost } from "@app/models";
import { Link } from "@app/components";

import * as styles from "./index.module.scss";
import { format } from "date-fns";

export interface BlogPostGridItemProps {
  post: BlogPost;
}

export const BlogPostGridItem: FC<BlogPostGridItemProps> = ({ post }) => {
  const date = format(new Date(post.date), "dd MMM yyyy");
  const categories = post.categories.join(", ");

  return (
    <Col md="6" lg="4" sm="12" className={cn(`my-lg-4 my-2`, styles.card)}>
      <Link to={post.slug}>
        <GatsbyImage
          className={cn("mb-3", styles.image)}
          image={post.thumbnail}
          alt={post.title}
          objectFit="cover"
        />
        <div className={styles.txt}>
        <h4 className="mb-3">{post.title}</h4>
        <p className="mb-4">{post.excerpt}</p>
        <button className={styles.roundedButton}>Read more</button>
        </div>
    
      </Link>
    </Col>
  );
};
