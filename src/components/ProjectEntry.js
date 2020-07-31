import React, { useState } from "react";
import projects from "../../resources/projects.json";
// import screenShot1 from "../../resources/media/project_media/star_wars/darkmode.png";

export default function ProjectEntry({ match, darkmode }) {
  const entry = projects.find(({ id }) => id === match.params.entryId);
  console.log("darkmode", darkmode);

  return (
    <div className="page-content-container">
      <h3 style={{ textAlign: "center" }}>{entry.title}</h3>
      <p>{entry.description}</p>
      <br />
      <ul>
        <li style={{ listStyleType: "none" }}>
          <a href={entry.links[0]} target="_blank">
            Check out the code on GitHub
          </a>
          {entry.links[1] && (
            <li>
              <a href={entry.links[1]} target="_blank">
                Check out the deployed app on Heroku
              </a>{" "}
              (it might take a few seconds for the server to wake up)
            </li>
          )}
        </li>
      </ul>
      {/*<img src={darkmode} height="500" />*/}
    </div>
  );
}
