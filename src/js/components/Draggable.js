import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

const dragSource = {

  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  }

  , endDrag(props, monitor) {
    console.log(props);
    const { id, left, top } = props;
    return { id, left, top };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


class Draggable extends Component {

  render() {
    const { hideSourceOnDrag, left, top, connectDragSource, isDragging, children } = this.props;

    return connectDragSource(
      <div style={{ ...style, left, top }}>
        { isDragging && 'I am dragging' }
        {children}
      </div>
    );
  }
}

Draggable.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    hideSourceOnDrag: PropTypes.bool.isRequired,
    children: PropTypes.node
};


export default DragSource('finder', dragSource, collect)(Draggable);
