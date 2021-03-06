import React from "react";
import "./singleProject.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import {
  faCss3Alt,
  faReact,
  faHtml5,
  faJsSquare,
  faNodeJs,
  IconDefinition,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

// generates the classes
const classesForIcons = (icon: IconDefinition) => {
  let iconClass;

  switch (icon) {
    case faReact:
      iconClass = "react-icon";
      break;
    case faJsSquare:
      iconClass = "js-icon";
      break;
    case faCss3Alt:
      iconClass = "css-icon";
      break;
    case faHtml5:
      iconClass = "html-icon";
      break;
    case faNodeJs:
      iconClass = "nodejs-icon";
      break;
    case faSass:
      iconClass = "sass-icon";
  }
  return iconClass;
};

interface Project {
  projectId: number;
  title: string;
  firstDescription: string;
  secondDescription: string;
  technologies: IconDefinition[];
  image: string;
  linksPages: { linkGitHub?: string; linkPage?: string };
  technologiesList: string[];
}

const AboutSection: React.FC<Project> = (props) => {
  return (
    <article className="card">
      <div className="card__project-content">
        <div className="image-container">
          <img
            className="image-container__project-image"
            src={props.image}
            alt="project"
          />
          <div className="image-container__tech-stack">
            <h3>Tech stack</h3>
            {props.technologies.map((tech) => (
              <FontAwesomeIcon
                key={tech.iconName}
                icon={tech}
                className={`${classesForIcons(tech)}`}
                style={{ margin: "0 0.3rem" }}
              />
            ))}
          </div>
        </div>
        <div className="card__info-container">
          <h2>{props.title}</h2>
          <div className="card-description">
            <p>{props.firstDescription}</p>
            <br />
            <p>{props.secondDescription}</p>
          </div>
          <div className="learn-more-holder">
            <NavLink
              to={{
                pathname: `/project/${props.title}`,
                state: { projectId: props.projectId },
              }}
              className="learn-more-holder__learn-more"
            >
              want learn more?
            </NavLink>
          </div>
        </div>
        <div className="card__project-links-container">
          {props.linksPages.linkPage ? (
            <a
              href={props.linksPages.linkPage}
              target="_blank"
              rel="noopener noreferrer"
            >
              visit page
            </a>
          ) : null}

          <a
            href={props.linksPages.linkGitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            visit github
          </a>
        </div>
      </div>
    </article>
  );
};

export default AboutSection;
