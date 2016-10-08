import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import { findDOMNode } from 'react-dom';
import { DropTarget, DragDropContext } from 'react-dnd';


const dropTarget = {
    drop(props, monitor, component) {
        console.log("DROP ON ME");
        const item = monitor.getItem();
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        console.log(top,left);
        console.log(item);

        return {
            top, left
        };
    }
};


function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class Desktop extends Component {
    render() {

        const {  connectDropTarget } = this.props;

        return (
            <div className='desktop'>
                {this.props.children}
            </div>
        );
    }
}


export default DropTarget('finder', dropTarget, collect)(Desktop);
