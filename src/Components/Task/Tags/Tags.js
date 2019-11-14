import React from "react";
import classes from "./Tags.css";
import PropTypes from "prop-types";

const Tags = props => {
  const Tag = ({ tag }) => (
    <div style={{ backgroundColor: tag.color }} className={classes.Tag}>
      <div className={classes.Content}>
        {tag.name}
        <div onClick={() => props.removeTag(tag.id)} className={classes.Remove}>
          x
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.Tags}>
      {props.tags.map(tag => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  removeTag: PropTypes.func.isRequired
};

export default Tags;
