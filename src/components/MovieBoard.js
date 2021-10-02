import React from "react";

export default function MovieBoard({ title, id }) {
  return (
    <div className="movie-board">
      <div className="movie-board-head">
        <div className="name">{ title }</div>
        <div className="fieldValue">Field: { id }</div>
      </div>
      <div className="tag-content__wrapper">
        <div className="tag-label">Tag <span className="cancel-btn">x</span></div>
      </div>
      <div className="addTage">
        <input type="text" value="" placeholder="Placeholder" />
        <button className="addTage-btn">Add Tag</button>
      </div>
    </div>
  )
}