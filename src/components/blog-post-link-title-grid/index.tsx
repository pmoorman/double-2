import React, { FC } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { BlogPost } from "@app/models";
import { Link } from "@app/components";

import * as styles from "./index.module.scss";
import { format } from "date-fns";

export interface BlogPostTitleGridItemProps {
  post: BlogPost;
}

export const BlogPostTitleGridItem: FC<BlogPostTitleGridItemProps> = ({
  post,
}) => {
  const date = format(new Date(post.date), "dd MMM yyyy");
  const categories = post.categories.join(", ");

  return (
    <Col md="6" lg="4" sm="12" className={cn(`my-lg-4 my-2`, styles.card)}>
      <GatsbyImage
        className={cn("mb-3", styles.image)}
        image={post.thumbnail}
        alt={post.title}
        objectFit="cover"
      />
      <small className="mb-2">
        {date}{" "}
        <span>
          | {post.author} | {categories}
        </span>
      </small>
      <Link to={post.slug}>
        <h4 className="mb-3">{post.title}</h4>
      </Link>
      <p className="mb-4">{post.excerpt}</p>
    </Col>
  );
};
