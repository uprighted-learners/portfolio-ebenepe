import React from "react";
import Project from "./Project";

// this component is a container to house as many individual Project components as desired
function Projects() {
  return (
    <div id="projects">
      {/* add Project instances here as needed */}
      <Project
        // image src link
        src={require("/Users/erikbenepe/code/projects/portfolio-ebenepe/client/src/components/documents/poop.png")}
        // title
        title="Post-Operation Observation Project"
        location="https://github.com/ebenepe/POOP"
        linkText="GitHub"
        demoLocation="https://bca-poop.herokuapp.com"
        // body copy
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas
        aperiam porro adipisci earum repellat, consequuntur quidem quasi non
        suscipit perspiciatis labore sequi velit similique. Libero at,
        repellendus natus quia officiis excepturi accusamus alias praesentium
        quas unde nemo dicta labore itaque eveniet culpa eius, tenetur ab
        aliquam eum pariatur vitae velit fugiat! Eligendi cumque natus numquam.
        Perspiciatis culpa libero ea modi incidunt similique? Asperiores quis
        ipsum delectus, nam facilis totam doloribus, sapiente odit cumque, unde
        numquam! Accusamus excepturi vero autem! Unde commodi, quidem est eum
        adipisci nobis asperiores quibusdam deserunt laboriosam eius
        necessitatibus officiis aliquam optio dolorum, delectus recusandae rem
        repellat excepturi error dolorem? Aliquam iusto veniam architecto
        doloribus consectetur, excepturi veritatis, sint laudantium sit"
      />
      <div className="spacer"></div>
      <Project
        // image src link
        src={require("/Users/erikbenepe/code/projects/portfolio-ebenepe/client/src/components/documents/yelpington.png")}
        // title
        title="Yelpington"
        location="https://github.com/ebenepe/yelpington-ebenepe"
        linkText="GitHub"
        // body copy
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas
        aperiam porro adipisci earum repellat, consequuntur quidem quasi non
        suscipit perspiciatis labore sequi velit similique. Libero at,
        repellendus natus quia officiis excepturi accusamus alias praesentium
        quas unde nemo dicta labore itaque eveniet culpa eius, tenetur ab
        aliquam eum pariatur vitae velit fugiat! Eligendi cumque natus numquam.
        Perspiciatis culpa libero ea modi incidunt similique? Asperiores quis
        ipsum delectus, nam facilis totam doloribus, sapiente odit cumque, unde
        numquam! Accusamus excepturi vero autem! Unde commodi, quidem est eum
        adipisci nobis asperiores quibusdam deserunt laboriosam eius
        necessitatibus officiis aliquam optio dolorum, delectus recusandae rem
        repellat excepturi error dolorem? Aliquam iusto veniam architecto
        doloribus consectetur, excepturi veritatis, sint laudantium sit"
      />
      <div className="spacer"></div>
      <Project
        // image src link
        src={require("/Users/erikbenepe/code/projects/portfolio-ebenepe/client/src/components/documents/canvas.png")}
        // title
        title="Sol Lewitt Wall Drawing #91"
        location="https://openprocessing.org/sketch/1412679"
        linkText="OpenProcessing"
        // body copy
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas
        aperiam porro adipisci earum repellat, consequuntur quidem quasi non
        suscipit perspiciatis labore sequi velit similique. Libero at,
        repellendus natus quia officiis excepturi accusamus alias praesentium
        quas unde nemo dicta labore itaque eveniet culpa eius, tenetur ab
        aliquam eum pariatur vitae velit fugiat! Eligendi cumque natus numquam.
        Perspiciatis culpa libero ea modi incidunt similique? Asperiores quis
        ipsum delectus, nam facilis totam doloribus, sapiente odit cumque, unde
        numquam! Accusamus excepturi vero autem! Unde commodi, quidem est eum
        adipisci nobis asperiores quibusdam deserunt laboriosam eius
        necessitatibus officiis aliquam optio dolorum, delectus recusandae rem
        repellat excepturi error dolorem? Aliquam iusto veniam architecto
        doloribus consectetur, excepturi veritatis, sint laudantium sit"
      />
    </div>
  );
}

export default Projects;
