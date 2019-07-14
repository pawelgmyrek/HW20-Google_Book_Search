import React from "react";

function SavedList(props) {
  return (
    <div className="text-center">
      <img alt={props.image} className="img-fluid" src={props.link} style={{ margin: "0 auto" }} />
      <h3>Title: {props.title}</h3>
      <h3>Author: {props.authors}</h3>
      <h3>Description: {props.description}</h3>
    </div>
  );
}

export default SavedList;
