import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}
function bio(props){
  console.log(props);

  if (props.bio){
    //if bio is passed
    //return <p> tag
    return (<p>Put the bio here</p>)
  }else{
    //bio not passed or an empty string
    //return null
    return null
  }
}

export default About;
