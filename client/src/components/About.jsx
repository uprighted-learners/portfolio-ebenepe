import React from "react";
import InfoImg from "./InfoImg";

function About() {
  return (
    <>
    <InfoImg 
      id="about"
      src={require("./documents/erik.jpg")}
      alt="Erik and a dog relaxing on a sand dune"
      text="Erik Benepe is a web developer, creative technologist, and musician, born and raised in New York City, and currently residing in Vermont. He is a recent graduate of the Burlington Code Academy, a course on full stack web development teaching Javascript, HTML/CSS, MongoDB, Express, React, and Node JS. His personal work explores the intersection of art and technology, including creating interactive and immersive experiences, and using code to create art and music."
      textTwo="Erik first came to programming through his study of music. While completing his Master's Degree at NYU, he made his first forays into coding in Python while taking a Digital Signal Processing class, in order to better understand how computers process digital audio signals. He also learned the visual programming language Max/MSP/Jitter, and for his Master's Thesis, created an interactive music video that responds to the viewer's eye movements."
    />
    </>
  );
}

export default About;
