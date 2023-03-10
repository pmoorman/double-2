import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";
import { OgilvBlueForm } from "@app/components";

import * as styles from "./index.module.scss";

const formId = "4933467";

const OglviyConcept10 = () => {
  return (
    <>
      <div className={styles.hero}>
        <Container>
          <Row>
            <Col className="text-center" lg={{ span: 8, offset: 2 }}>
              <h1 className="mb-3">38 laws to avoid startup disaster</h1>
              <div className="subtitle mb-4">
                An expert guide on how to make your startup unstoppable.
              </div>
              <small>14/03/2023 | By Naaved</small>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.imageSection}>
        <Container>
          <div className="d-flex justify-content-center align-items-center">
            <Parallax scale={[0.7, 1, "easeInQuad"]}>
              <StaticImage
                src="./cover.jpeg"
                alt="38 laws to avoid startup disaster"
              />
            </Parallax>
          </div>
        </Container>
      </div>

      <div className="mt-lg-6 mb-lg-8 my-4">
        <Container>
          <Row className="align-items-start">
            <Col md="4" lg="4" className={styles.leftMenu}>
              {/* Summary points */}
              <div className={styles.points}>
                <small>Summary points:</small>
                <ul>
                  <li>
                    Growth marketing has evolved over the past 15 years. We have
                    moved away from early-day growth hacking (short, standalone
                    experiments) to a systemised, growth marketing approach.
                  </li>

                  <li>
                    Startups should stop focusing on random hacks. Instead, they
                    should build a well-oiled growth marketing machine and tweak
                    it to optimise further.
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="1" className="d-none d-lg-block" />
            <Col md="8" lg="7" className={styles.postContent}>
              <p className="mb-4">
                As a growth agency, Double has executed campaigns for some of
                the fastest growing tech companies in the world.
              </p>

              <p className="mb-4">Here are 38 laws we learned along the way:</p>

              <h3>Law #1: Make growth your obsession</h3>

              <p className="mb-4">
                Once you have more users, more revenue and more brand equity,
                all other problems become much easier to solve. Faster growth
                solves (nearly) all problems.Growth and distribution should be
                your top priority, because getting users is harder than it
                seems. It is poor distribution— not product—that is the number
                one cause of startup failure. Prioritise accordingly.
              </p>
              <h3>Law #2: Systems, not hacks</h3>

              <p className="mb-4">
                Not all growth is created equal. Some growth is temporary, while
                other growth lasts. Growth marketing is about unlocking
                structural, compounding growth. To acquire millions of users,
                marketing needs to become predictable, systematic, automated and
                repeatable.
              </p>

              <p className="mb-4">
                Losers are forever attracted to shortcuts, growth hacks and ways
                to game the system. Forget about that. The essence of growth
                marketing is to build systems that drive user acquisition,
                activation and retention at scale
              </p>

              <h3>Law #3: 25+ distribution channel</h3>

              <p className="mb-4">
                People tend to stick to what they know, but this is a mistake.
                Before you hone in on any one channel, consider all the options
                at your disposal (many both organic and paid):
              </p>
              <ul>
                <li>SEO</li>
                <li>Google ads</li>
                <li>Facebook & Instagram</li>
                <li>Youtube</li>
                <li>TikTok</li>
                <li>Amazon</li>
                <li>Amazon</li>
                <li>LinkedIn, Twitter, Reddit, Quora, Pinterest, etc.</li>
                <li>Programmatic ads</li>
                <li>Influencers, bloggers & podcasts</li>
                <li>Referral schemes</li>
                <li>Word of mouth</li>
                <li>Affiliate marketing</li>
                <li>Outbound sales</li>
                <li>Partnerships & biz dev</li>
                <li>Publicity & PR</li>
                <li>Offline & Out-of-home advertising</li>
                <li>Trade shows</li>
                <li>Offline events</li>
                <li>Communities</li>
                <li>Engineering as marketing</li>
                <li>Embeds, widgets powered-by loops</li>
                <li>Piggybacking existing platforms</li>
              </ul>

              <h3>Law #4: Start with inbound.</h3>

              <p className="mb-4">
                Outbound channels are channels where you proactively push your
                message to an audience—like paid advertising, or outbound sales.
                Startups should start with these channels, because they produce
                results instantly. They also produce feedback immediate: you
                will know within days whether your offer resonates or not,
                unlike inbound channels like content marketing or SEO, where
                feedback takes months, rather than days.
              </p>

              <h3>Law #5: Outbound gets expensive as you scale.</h3>
              <div className={styles.blurredText}>
                <p>
                  Once you have more users, more revenue and more brand equity,
                  all other problems become much easier to solve. Faster growth
                  solves (nearly) all problems.ßGrowth and distribution should
                  be your top priority, because getting users is harder than it
                  seems. It is poor distribution— not product—that is the number
                  one cause of startup failure. Prioritise accordingly.
                </p>
                <h3>
                  Law #6: Systems, not hacks Not all growth is created equal.
                </h3>
                <p>
                  Some growth is temporary, while other growth lasts. Growth
                  marketing is about unlocking structural, compounding growth.
                  To acquire millions of users, marketing needs to become
                  predictable, systematic, automated and repeatable. Losers are
                  forever attracted to shortcuts, growth hacks and ways to game
                  the system. Forget about that. The essence of growth marketing
                  is to build systems that drive user acquisition, activation
                  and retention at scale.
                </p>
              </div>

              <div className={styles.OgilvyForm}>
                <OgilvBlueForm
                  formId={formId}
                  buttonProps={{
                    variant: "primary",
                  }}
                  recaptchaProps={{
                    theme: "light",
                    className: "mt-5",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OglviyConcept10;
