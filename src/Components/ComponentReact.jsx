import React from "react";
import { Container } from "react-bootstrap";
import "../scss/app.scss";
import arrow from "../arrow.png";

const ComponentReact = () => {
  return (
    <>
      <Container className="content-javascript">
        <h3 className="title-javascript">React</h3>
        <div className="container-javascript">
          <p className="text-javascript">
            React (also known as React.js or ReactJS) is an open-source
            front-end JavaScript library[3] for building user interfaces or UI
            components. It is maintained by Facebook and a community of
            individual developers and companies. React can be used as a base in
            the development of single-page or mobile applications. However,
            React is only concerned with state management and rendering that
            state to the DOM, so creating React applications usually requires
            the use of additional libraries for routing, as well as certain
            client-side functionality.
            <br></br>
            <br></br> JavaScript (or JS) is a scripting language used to create
            and control dynamic web content. Dynamic web content includes things
            like animated graphics, photo slideshows, and interactive forms.
            Anytime you visit a website where things move, refresh, or otherwise
            change on your screen without requiring you to manually reload a web
            page, there’s a very good chance JS is the language making it
            happen. Or try this one sentence definition: JavaScript is a super
            important coding language used to add animated and interactive
            features to websites or web applications (on top of the basic,
            static structures created by languages like HTML and CSS).
          </p>
          <p className="text-2-javascript">This is the content created by me</p>
          <div className="javascript-video">
            <iframe
              width="450"
              height="300"
              src="https://www.youtube.com/embed/videoseries?list=PLN_bdwwGM4GxOhJCUZ6eieNqjzY5sS1bc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
      <div className="react-container"></div>
      <div className="arrow">
        <img className="arrow" src={arrow} />
      </div>
    </>
  );
};
export default ComponentReact;
