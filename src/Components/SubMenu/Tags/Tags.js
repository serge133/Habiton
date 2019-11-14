import React from "react";
import classes from "./Tags.css";

import Popup from "../../Components/SubMenu/SubMenu";

const Tags = props => {
  const tagsMock = [{ tagName: "tag", color: "lightgreen" }, { tagName: "another tag", color: "tomato" }];

    const Tag = ({ tag }) => (
        <div style={{ backgroundColor: tag.color }} className={classes.Tag}>{tag.tagName}</div>
    )

  return (
    <Popup show={true} right={53} bottom={-10}>
      <div className={classes.Tags}>
        {tagsMock.map(tag => <Tag key = {tag.tagName} tag={tag}/>)}
      </div>
    </Popup>
  );
};

export default Tags;
