import React from "react";
import { Container } from "react-bootstrap";
import { BlogPostTitleGridItem, SEO, GifSection } from "@app/components";
import Slider, { Settings } from "react-slick";
import { useBlogPosts } from "@app/hooks";

import * as styles from "./index.module.scss";

const settings: Settings = {
  arrows: false,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ClickThrough = () => {
  const allArticles = useBlogPosts();

  return (
    <>
      <Container>
        <div className=" mt-lg-5 mb-lg-6 my-5 text-center">
          <GifSection />
          <h1>Thanks for clicking!</h1>
          <div className="subtitile">We'll be sure to remember that..</div>
        </div>
      </Container>

      <div className={styles.sliderSection}>
        <Container>
          <h2 className="text-center mb-4">
            Explore the blog for more growth ideas:
          </h2>

          <Slider {...settings} className={styles.blogSlider}>
            {allArticles.map((post, i) => (
              <div key={post.title + i} className={styles.sliderItems}>
                <BlogPostTitleGridItem post={post} />
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default ClickThrough;
