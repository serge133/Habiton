import React, { useState, Fragment } from "react";
import classes from "./Tags.css";
// * Redux
import { connect } from "react-redux";
import * as tasksActions from "../../store/actions/tasksActions";
// * Components
import SubMenu from "../../Components/SubMenu/SubMenu";

import { CirclePicker } from "react-color";

import colorMenuSVG from '../../assets/menu.svg';
import PropTypes from 'prop-types';

const Tags = props => {
  const [openColorPicker, setOpenColorPicker] = useState({
    show: false,
    tagId: ""
  });
  const toggleColorPicker = tagId =>
    setOpenColorPicker({ show: !openColorPicker.show, tagId: tagId });

  const handleAddTag = e => {
    if (e.key === "Enter") {
      const tagName = e.target.value;
      if(tagName.length === 0)return;
      props.addTag(tagName);
    }
  };

  const handleChangeColor = color => {
    props.changeTagColor(openColorPicker.tagId, color.hex)
    toggleColorPicker('');
  }

  const Tag = ({ tag }) => {
    return (
      <div style={{ backgroundColor: tag.color }} className={classes.Tag}>
        <img alt="Choose Color" src={colorMenuSVG} onClick={() => toggleColorPicker(tag.id)} className={classes.ColorBtn}/>
        <span onClick={() => props.applyTag(tag, props.task.id)}>{tag.name}</span>
        <div className={classes.Delete} onClick={() => props.deleteTag(tag.id)}>
          x
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <SubMenu show={true} right={53} bottom={-10}>
        <div className={classes.Tags}>
          <input type="text" onKeyUp={handleAddTag} className={classes.Input} />
          {props.tags.map(tag => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </div>
      </SubMenu>
      {openColorPicker.show ? (
        <SubMenu show={true} bottom={-10} right={400}>
          <CirclePicker
            onChangeComplete={handleChangeColor}
          />
        </SubMenu>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    tags: state.tsk.tags
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTag: tagName => dispatch(tasksActions.addTag(tagName)),
    deleteTag: tagId => dispatch(tasksActions.deleteTag(tagId)),
    applyTag: (tag, taskId) => dispatch(tasksActions.applyTag(tag, taskId)),
    changeTagColor: (tagId, color) =>
      dispatch(tasksActions.changeTagColor(tagId, color))
  };
};

Tags.propsTypes = {
  task: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
