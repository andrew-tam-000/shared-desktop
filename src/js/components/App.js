import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as testActions from '../redux/actions/test';
import Finder from './Finder';
import StatusBar from './StatusBar';
import Desktop from './Desktop';
import Draggable from './Draggable';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';



class App extends Component {
    render() {
        return (
            <div className='App'>
                <StatusBar/>
                <Desktop>
                    <Draggable top={200} left={100}>
                        <Finder/>
                    </Draggable>
                </Desktop>
            </div>
        );
    }

    onClick() {
        this.props.dispatch(testActions.test());
    }
}


export default DragDropContext(HTML5Backend)(
    connect(
        (state) => state
    )(App)
);
