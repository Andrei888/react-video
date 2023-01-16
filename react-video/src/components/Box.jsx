import React from "react";

function Box({ url, title, description }) {
  return (
    <div className="video_box">
      <iframe
        width="500"
        height="200"
        src={url}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Box;
