import React from "react";

const Intro = () => {
  return (
    <div className='container-fluid mt-0'>
      <div className='jumbotron text-center mx-4 p-2'>
        <h2>I am Tuan, and I am a self-taught developer</h2>
        <h3>I am 2 weeks away from graduating from <a href="https://bootcamp.coderschool.vn/">CoderSchool Coding Bootcamp</a> </h3>
        <h4><b>Language Learned:</b></h4>
        <ul className='list-unstyled'>
            <li>HTML, CSS, Vanilla Javascript</li>
            <li>React Framework</li>
            <li>Flask Framework based on Python. Build Python API Backend</li>
            <li>Learning NodeJS, GraphQL</li>
            <li>Comfortable with SQL Query</li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
