import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-regular-svg-icons";

const Like = ({ liked, onClick }) => {
  const isLiked = liked ? farHeart : fasHeart;

  return (
    <div onClick={onClick}>
      <FontAwesomeIcon icon={isLiked} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default Like;
