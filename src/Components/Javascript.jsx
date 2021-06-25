import React from "react";
import { Container } from "react-bootstrap";
import "../scss/app.scss";
import arrow from "../arrow.png";
const Javascript = () => {
  return (
    <>
      <Container className="content-javascript">
        <h3 className="title-javascript">Javascript</h3>
        <div className="container-javascript">
          <p className="text-javascript">
            JavaScript is a scripting language used to create and control
            dynamic website content, i.e. anything that moves, refreshes, or
            otherwise changes on your screen without requiring you to manually
            reload a web page. Features like: animated graphics photo slideshows
            autocomplete text suggestions interactive forms. Scripting languages
            are coding languages used to automate processes that users would
            otherwise need to execute on their own, step-by-step. Short of
            scripting, any changes on web pages you visit would require either
            manually reloading the page, or navigating a series of static menus
            to get to the content you’re after A scripting language like
            JavaScript (JS, for those in the know) does the heavy lifting by
            telling computer programs like websites or web applications to “do
            something.” In the case of JavaScript, this means telling those
            dynamic features described earlier to do whatever it is they do—like
            telling images to animate themselves, photos to cycle through a
            slideshow, or autocomplete suggestions to respond to prompts. It’s
            the “script” in JavaScript that makes these things happen seemingly
            on their own. Meanwhile, because JavaScript is such an integral part
            of web functionality, all major web browsers come with built-in
            engines that can render JavaScript. This means JS commands can be
            typed directly into an HTML document, and web browsers will be able
            to understand them. In other words, using JavaScript doesn’t require
            downloading any additional programs or compilers.
          </p>
          <p className="text-2-javascript">This is the content created by me</p>
          <div className="javascript-video">
            <iframe
              width="450"
              height="300"
              src="https://www.youtube.com/embed/videoseries?list=PLN_bdwwGM4Gxulza2AFIZs25ToJZ7mrD5"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
      <div className="javascript-container"></div>
      <div className="arrow">
        <img className="arrow" src={arrow} />
      </div>
    </>
  );
};
export default Javascript;
