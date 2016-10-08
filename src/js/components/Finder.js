import React, { Component } from 'react';
import Header from './Header';

class Finder extends Component {
    render() {
        return (
            <div className='finder'>
                <Header/>
                <div className='finder__body'>
                    Test
                </div>
            </div>
        );
    }

    onClick() {
        this.props.dispatch(testActions.test());
    }
}


export default Finder;
