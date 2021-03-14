import React, { useState, useEffect } from "react";

export default function ResumePage() {
  const path = window.location.href;
  const [trimmedPath, setTrimmedPath] = useState(
    path.slice(0, path.lastIndexOf("/"))
  );
  useEffect(() => {
    console.log("trimmedPath: ", trimmedPath);
  });

  const styles = {
    experienceListContainer: {
      marginRight: "2rem",
      marginLeft: "2rem",
    },
    experienceList: {
      listStyleType: "none",
    },
    nestedBullet: {
      marginLeft: "3rem",
      fontWeight: "400",
      listStyleType: "circle",
    },
    jobSpan: {
      fontWeight: "200",
      fontFamily: "sans-serif",
    },
  };
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            style={{ display: "inline-flex" }}
            href={`${trimmedPath}/api/export/resume`}
            download
          >
            Export{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z"
                fill="currentColor"
              />
              <path
                d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        <br />
        <hr />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2>Leighton Pitman</h2>
          <a href="mailto:leightonpitman14@gmail.com">
            leightonpitman14@gmail.com
          </a>
        </div>
        <h4 style={{ fontFamily: "sans-serif", fontWeight: 200 }}>
          Software Engineer
        </h4>
        <br />
        <hr />
        <br />
        <div>
          <h4 style={{ fontFamily: "sans-serif", fontWeight: 200 }}>
            PERSONAL PROFILE
          </h4>
          <p>
            Former outdoor industry professional that enjoyed using technology
            to make his job easier. My first taste of computer programming was using 
            Visual Basic with Excel to automate tasks. Since then, I've contributed
            to Florida's Computer Science K-12 Curriculum, deployed a bevy of
            full-stack applications, and now write software professionally.
          </p>
          <br />
          <hr />
          <br />
        </div>
        <h4 style={{ fontFamily: "sans-serif", fontWeight: 200 }}>SKILL SET</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div>
            <h5>Proficient</h5>
            <ul style={styles.experienceList}>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div style={styles.experienceListContainer}>
            <h5>Knowledgeable</h5>
            <ul style={styles.experienceList}>
              <li>Git</li>
              <li>PostgreSQL</li>
              <li>Express</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div>
            <h5>Familiar</h5>
            <ul style={styles.experienceList}>
              <li>C</li>
              <li>Python 3</li>
              <li>Oauth2</li>
              <li>Jasmine</li>
            </ul>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="resume-experience">
          <h4 style={{ fontFamily: "sans-serif", fontWeight: 200 }}>
            EXPERIENCE
          </h4>
          <ul style={{ listStyleType: "none" }}>
            <li style={{ fontWeight: "bold" }}>
              Software Developer |
              <span style={styles.jobSpan}>
              {" "}
              RF-SMART (September 2020 - Present)
            </span>
            <ul>
              <li style={styles.nestedBullet}>
              Work with customers to modify our technology and tailor it to their specific warehouse operations.
              </li>
              <li style={styles.nestedBullet}>
              The product I work on is works alonside the NetSuite ERP.
              </li>
              <li style={styles.nestedBullet}></li>
            </ul>
            </li>
            <li style={{ fontWeight: "bold" }}>
              Software Development Intern |
              <span style={styles.jobSpan}>
                {" "}
                RF-SMART (June 2020 - August 2020)
              </span>
              <ul>
                <li style={styles.nestedBullet}>
                  Worked closely with QA/Automation team, updating legacy testbed
                  to current standards.
                </li>
                <li style={styles.nestedBullet}>
                  Built data scraping tool that reads through entire testbed and
                  automatically produces useful metadata like tags and
                  descriptions.
                </li>
                <li style={styles.nestedBullet}>
                  Technologies used include Jasmine, Selenium Webdriver, TeamCity
                </li>
              </ul>
            </li>
            <li style={{ fontWeight: "bold" }}>
              Researcher |
              <span style={styles.jobSpan}>
                {" "}
                Learning Systems Institute (January 2015 - May 2018)
              </span>
              <ul>
                <li style={styles.nestedBullet}>
                  Utilized advanced Excel features to create sheets that
                  automated budget reconciliation. Still in use today, these
                  sheets save about ten hours of work per week
                </li>
                <li style={styles.nestedBullet}>
                  Created framework in SCRATCH for future published lesson plans
                  to be utilized across the state of Florida in science and
                  geography classrooms.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <h4 style={{ fontFamily: "sans-serif", fontWeight: 200 }}>
            ACADEMIC BACKGROUND
          </h4>
          <ul style={{ listStyleType: "none" }}>
            <li style={{ fontWeight: "bold" }}>
              Fullstack Acamdemy |
              <span style={styles.jobSpan}> Oct 2019 - May 2020</span>
              <ul>
                <li style={styles.nestedBullet}>
                  26-week Coding Bootcamp focused on preparing students for work
                  as professional software engineers.
                </li>
              </ul>
            </li>
            <li style={{ fontWeight: "bold" }}>
              Florida State University |
              <span style={styles.jobSpan}> August 2014 - December 2017</span>
              <h5
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: 200,
                  fontSize: "smaller",
                }}
              >
                Relevant courses
              </h5>
              <ul>
                <li style={styles.nestedBullet}>Programming I (COP3014)</li>
                <li style={styles.nestedBullet}>
                  Introduction to UNIX (COP3353)
                </li>
                <li style={styles.nestedBullet}>
                  Object Oriented Programming (COP3330)
                </li>
                <li style={styles.nestedBullet}>
                  Computer Organization (CDA3100)
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
