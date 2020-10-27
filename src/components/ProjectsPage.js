import React, { useState, useEffect } from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import ProjectEntry from "./ProjectEntry";
import projects from "../../resources/projects.json";
import darkmode from "../../resources/media/project_media/star_wars/darkmode.png";

export default function ProjectsPage({ selectedProject, setSelectedProject }) {
  let { url } = useRouteMatch();

  const handleClick = (projectId) => {
    setSelectedProject(projectId);
  };

  return (
    <div>
      {!selectedProject ? (
        <div>
          <h3
            style={{ fontSize: "65px", textAlign: "center" }}
            className="gradient"
          >
            Projects
          </h3>
          <ul className="blog-links-container">
            {projects.map((project) => {
              return (
                <li
                  style={{
                    listStyleType: "none",
                    margin: "0.25rem",
                  }}
                  key={project.id}
                >
                  <Link
                    className="blog-link"
                    onClick={() => handleClick(project.id)}
                    to={`${url}/${project.id}`}
                  >
                    <strong style={{ marginLeft: "2rem" }}>
                      {project.title}
                    </strong>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          <Route
            path={`${url}/:entryId`}
            render={({ match }, darkmode) => (
              <ProjectEntry match={match} darkmode={darkmode} />
            )}
          />
          {/*<Route path={`${url}/:entryId`} component={ProjectEntry} />*/}
          <div
            className="floating-back-button"
            onClick={() => setSelectedProject(false)}
          >
            <p>{"back"}</p>
          </div>
        </div>
      )}
    </div>
  );
}
