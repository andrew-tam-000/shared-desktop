import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as testActions from '../redux/actions/test';
import Finder from './Finder';

class App extends Component {
    render() {
        return (
            <div onClick={this.onClick.bind(this)}>
                Click me and see this change: {this.props.test + ''}
                <Finder/>
            </div>
        );
    }

    onClick() {
        this.props.dispatch(testActions.test());
    }
}


export default connect(
    (state) => state
)(App);
