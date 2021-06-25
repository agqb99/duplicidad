import React from "react";
import { Container } from "react-bootstrap";
import "../scss/app.scss";
import arrow from "../arrow.png";

const ComponentNpm = () => {
  return (
    <>
      <Container className="content-javascript">
        <h3 className="title-javascript">npm</h3>
        <div className="container-javascript">
          <p className="text-javascript">
            npm is two things: first and foremost, it is an online repository
            for the publishing of open-source Node.js projects; second, it is a
            command-line utility for interacting with said repository that aids
            in package installation, version management, and dependency
            management. A plethora of Node.js libraries and applications are
            published on npm, and many more are added every day. These
            applications can be searched for on https://www.npmjs.com/. Once you
            have a package you want to install, it can be installed with a
            single command-line command.
            <br></br>
            <br></br> npm (originally short for Node Package Manager) is a
            package manager for the JavaScript programming language. npm, Inc.
            is a subsidiary of GitHub (a subsidiary of Microsoft), that provides
            hosting for software development and version control with the usage
            of Git. npm is the default package manager for the JavaScript
            runtime environment Node.js. It consists of a command line client,
            also called npm, and an online database of public and paid-for
            private packages, called the npm registry. The registry is accessed
            via the client, and the available packages can be browsed and
            searched via the npm website. The package manager and the registry
            are managed by npm, Inc.
          </p>
          <p className="text-2-javascript">This is the content created by me</p>
          <div className="javascript-video">
            <iframe
              width="450"
              height="300"
              src="https://www.youtube.com/embed/videoseries?list=PLN_bdwwGM4GwN7uh3QVqhY3-cNDru9c8u"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
      <div className="npm-container"></div>
      <div className="arrow">
        <img className="arrow" src={arrow} />
      </div>
    </>
  );
};
export default ComponentNpm;
