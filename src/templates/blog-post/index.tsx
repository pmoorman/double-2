import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";

import * as styles from "./index.module.scss";

export interface BlogPostTemplateProps {
  file: {
    childMdx: {
      body: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const BlogPostTemplate: FC<PageProps<BlogPostTemplateProps>> = (props) => {
  const { frontmatter } = props.data.file.childMdx;

  return (
    <>
      <div className={styles.hero}>
        <Container>
          <Row>
            <Col className="text-center" lg={{ span: 8, offset: 2 }}>
              <h1 className="mb-3">{frontmatter.title}</h1>
              <div className="subtitle mb-4">
                How 5 giants are making the switch to remote look like pie.
              </div>
              <small>14/02/2022 | By Tracey Halloran</small>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.imageSection}>
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <Parallax scale={[0.9, 1.2, "easeInQuad"]}>
              <StaticImage src="./Unionn.svg" alt="Post" />
            </Parallax>
            <Parallax scale={[0.7, 1, "easeInQuad"]}>
              <StaticImage src="./Vector.svg" alt="Post" height={425} />
            </Parallax>
          </div>
        </Container>
      </div>

      <div className={`mt-lg-6 mb-lg-8 my-4 + ${styles.postContent}`}>
        <Container>
          <Row className="align-items-start">
            <Col md="4" lg="4" className={styles.leftMenu}>
              <div>
                <a href="#">
                  <i className={styles.fbIcon}></i>
                </a>
                <a href="#">
                  <i className={styles.twitterIcon}></i>
                </a>
                <a href="#">
                  <i className={styles.linkedinIcon}></i>
                </a>
                <a href="#">
                  <i className={styles.shareIcon}></i>
                </a>
              </div>
              <div className={styles.points}>
                <small>Summary points:</small>
                <ul>
                  <li className={styles.active}>
                    A hybrid working system is expected to be the way forward
                    for 80% of people
                  </li>
                  <li>
                    Instant messaging tools have become vital for many
                    successful remote working companies
                  </li>
                  <li>
                    It is essential that systems are put in place to ensure a
                    healthy work-life balance
                  </li>
                  <li>
                    It is common practice for remote staff to choose their own
                    working hours
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="1" className="d-none d-lg-block"></Col>
            <Col md="8" lg="7">
              <h3>Intro title</h3>
              <p>
                It took a global pandemic to convince most companies that going
                remote was a smart move. The fears, the hesitation, the scramble
                for control over this new way to work was palpable in 2020.
                Turns out, it was all unnecessary. According to a study by Owl
                labs, almost 70% of full time workers got into the swing of
                working from home without much fuss. So much so, a quarter of
                people would now take a pay cut to make it their permanent
                practice. Emerging from the deep end unscathed, a hybrid working
                system with at least 3 days from home, is expected to be the way
                forward for 80% of people.
              </p>
              <p>
                While the rest of the world arrived late to the remote party,
                some companies had been on the dancefloor for a long time. They
                had established a steady groove with their own teams, learned
                from their own mis-steps, and even took it a leap further with
                the fully remote, distributed team model. The following are a
                list of remote working trailblazers and some of the most
                important lessons they learned:
              </p>
              <blockquote>
                <div className="quoteLine"></div>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut”
                </p>
                <footer>
                  <div>Person’s name</div>
                </footer>
              </blockquote>
              <h3>Discord hails death to the power struggle</h3>
              <p>
                With 150 million users across 19 million active communities, the
                communication app Discord is one of the most popular in the
                world. The ad-less app that actively avoids selling user data
                relies on subscriptions to increase revenue. Sounds like too big
                a ship to navigate on remote waters? The opposite is true.
                Although all employees have the option of working from their HQ
                in San Francisco, each job posted is also advertised as remote.
                According to Founder and CEO, Jason Citron, “sustained
                productivity comes from healthy work-life harmony.
              </p>
              <p>
                ” At Discord, life comes first and work falls into place around
                it. A parent may work early hours to ensure they spend more time
                with their children after school, while a night owl might thrive
                after dark. The work-life of each individual is tailored to
                their own unique needs so they can be at their most productive
                when they sit down to start. If there is any wavering in
                performance levels, staff do not have to wait for an annual
                review to find out. Everyone at Discord provides constant, real
                time feedback to ensure a faster learning cycle. “Feedback is a
                dialogue at Discord and we recruit everyone to participate
                regardless of position,” said Citron, “Team members are
                encouraged to give their feedback to leadership as much as
                leadership is encouraged to share feedback with their team
                members.”
              </p>
              <h3 className="mt-6">Title of the bullet points</h3>
              <ul>
                <li>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut”
                </li>
                <li>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut”
                </li>
                <li>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut”
                </li>
              </ul>
              <h3>Zapier strikes when staff are online</h3>
              <p>
                The SaaS powerhouse Zapier seamlessly integrates web
                applications for its users and, just as impressively, it
                orchestrates a workforce of over 550 workers around the United
                States and 38 other countries. With half the team asleep while
                the rest are ready to work, it is not surprising that a solid
                system needed to be established to keep everyone in the loop.
              </p>
              <p>
                Instant messaging became Zapier’s touch-stone, as colleagues
                could mark themselves as ‘away’ when not available, indicating
                to the rest of the team who could be contacted and when. Used as
                a way to arrange meetings, discuss projects or simply check in,
                instant messaging has served as a clear way to connect with the
                team.
              </p>
              <StaticImage src="./group.jpeg" alt="group" />
              <h3>Buffer masters the balancing act</h3>
              <p>
                Buffer is a fully distributed team of 85 people in 15 countries
                around the world - all working together to build brands and grow
                businesses on social media. Like Zapier, they use asynchronous
                communication in the form of instant messaging - meaning not
                everyone has to be online at the same time to get the work done.
              </p>
              <p>
                Primarily using the tools Discourse and Slack, the team members
                drop into discussions whenever they are online. To alleviate the
                negative aspects of this method, Buffer set out a list of 10
                Agreements to manage communication and ensure a healthy
                work-life balance. With guidelines on things like managing your
                own downtime and prioritising focus over chat feeds, staff know
                exactly what level of interaction is expected of them.
              </p>
              <StaticImage
                src="./team.jpeg"
                alt="team"
                className="cutted_image"
              />
              <h3>Hubstaff</h3>
              <p>
                For some entrepreneurs, a passion for improving remote working
                actually became the entire focus of their business. Take Dave
                Nevogt for instance, the co-founder of the productivity and
                workplace management company Hubstaff, which currently employs
                90 global team members. Disillusioned with the daily grind of an
                office job, Nevogt began building his first online company in
                his walk-in closet at night, while holding down a job during the
                day. Once it became a success, he believed the obvious move was
                to establish an office and scale the business - but he openly
                admits in his blog that it was a big mistake.
              </p>
              <p>
                “Offices don’t do anything except add to commute time and
                negativity,” he said, “All the same pain points from working in
                a corporate world came back, and I felt trapped all over again.
                My creative juices dropped. I felt like I had to be in the
                office at certain hours of the day and essentially, I was stuck
                back in a larger cubicle of sorts.”{" "}
              </p>
              <p>
                This key learning was the inspiration for Hubstaff, as Novogt
                made personal freedom the number one priority. The software
                service is dedicated to making remote teams more productive and
                giving them a better understanding of the priorities of their
                company, whenever and from wherever they decide.
              </p>
              <p>
                “We get to work where we want, and when we want. We have no
                office, and probably never will unless something drastically
                changes. To me, it feels like living the dream.”
              </p>
              <h3>Wrapping it up..</h3>
              <p>
                In line with the free spirit of remote working, there are no set
                rules for how this type of company should run. It is a
                tailor-made process that adapts to suit the needs and culture of
                the organisation. See how we do it at Double in the next blog…
              </p>

              <div className="mt-lg-6 mb-lg-5 my-5">
                <h2 className="mb-4">You may like</h2>
                <Row className="mb-5">
                  <Col md="3">
                    <StaticImage src="./artical.svg" alt="artical" />
                  </Col>
                  <Col md="9">
                    <small>6 Aug 2021 | Author</small>
                    <h3>Want to hire the best talent? Hire remote</h3>
                    <p>
                      Remote work has made hidden gems more accessible. When
                      will you take advantage?
                    </p>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col md="3">
                    <StaticImage src="./artical.svg" alt="artical" />
                  </Col>
                  <Col md="9">
                    <small>6 Aug 2021 | Author</small>
                    <h3>Want to hire the best talent? Hire remote</h3>
                    <p>
                      Remote work has made hidden gems more accessible. When
                      will you take advantage?
                    </p>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col md="3">
                    <StaticImage src="./artical.svg" alt="artical" />
                  </Col>
                  <Col md="9" className={styles.featuredPosts}>
                    <small>6 Aug 2021 | Author</small>
                    <h3>Want to hire the best talent? Hire remote</h3>
                    <p>
                      Remote work has made hidden gems more accessible. When
                      will you take advantage?
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query ($relativePath: String!) {
    file(
      relativePath: { eq: $relativePath }
      sourceInstanceName: { eq: "blog" }
    ) {
      childMdx {
        body
        frontmatter {
          title
        }
      }
    }
  }
`;
