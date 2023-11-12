import React from "react";
function Links(props){
    return(
        <div id="links">
        <h3>Links</h3>
        <Links github={"https://github.com/liza"} linkedin={"https://www.linkedin.com/in/liza/"} />
        <a href= {props.github}>Github</a>
        <a href= {props.linkedin}>Linkedin</a>
        </div>
    )
}
export default Links;