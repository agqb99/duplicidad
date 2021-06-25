import React from "react";
import { Container } from "react-bootstrap";
import arrow from "../arrow.png";
import "../scss/app.scss";

const Firebase = () => {
  return (
    <>
      <Container className="content-javascript">
        <h3 className="title-javascript">Firebase</h3>
        <div className="container-javascript">
          <p className="text-javascript">
            Firebase is a platform developed by Google for creating mobile and
            web applications. It was originally an independent company founded
            in 2011. In 2014, Google acquired the platform and it is now their
            flagship offering for app development.
          </p>
          <h6>Databases</h6>
          <p className="text-javascript">
            Realtime Database is essentially a NoSQL cloud-storage that can be
            connected with the application to provide real time access to the
            data across different platforms. The data is stored in JSON and can
            be queried by users. In terms of security, Realtime Database
            provides permission-based data access. This can be done with the
            help of Firebase Authentication, and giving permissions by
            user-identity or security rules.
          </p>
          <h6>Cloud Firestore</h6>
          <p className="text-javascript">
            is another cloud-hosted real-time NoSQL database. Unlike Firebase
            Realtime Database,Cloud Firestore is designed for enterprise use,
            which entails scalability, complex data models, and advanced
            querying options. Firebase console can be used to view data in both
            databases. Another mutual point is that there are SDKs for working
            with server-side code of both databases. These are available for
            Python, Node.js, Golang, Ruby, PHP, Java, .NET, and C#.
          </p>
          <h6>Cloud Storage.</h6>
          <p className="text-javascript">
            Cloud Storage is basically a Google Cloud for in-app user generated
            content, like photo, audio, or video files.
          </p>
          <h6>Authentication and hosting</h6>

          <p className="text-javascript">
            is a Google Authentication feature tailored for apps using Firebase.
            It allows you to use pre-built or create custom UI for
            user-authentication, and login users via custom credentials, emails,
            or social media.
          </p>
          <h6>Hosting service.</h6>
          <p className="text-javascript">
            If you are building a web-app, progressive web app, or mobile
            landing page, you would definitely need hosting. Firebase offers
            static web hosting for applications built with HTML, CSS, and
            JavaScript. In terms of security, it uses standard HTTPS and SSL
            protocols to deliver files and other types of data.{" "}
          </p>

          <p className="text-2-javascript">This is the content created by me</p>
          <div className="javascript-video">
            <iframe
              width="450"
              height="300"
              src="https://www.youtube.com/embed/videoseries?list=PLN_bdwwGM4GwV780VYVlnKyfki8_J1cHA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
      <div className="firebase-container"></div>
      <div className="arrow">
        <img className="arrow" src={arrow} />
      </div>
    </>
  );
};
export default Firebase;
