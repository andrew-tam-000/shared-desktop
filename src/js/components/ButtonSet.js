import React, { Component } from 'react';

class ButtonSet extends Component {
    render() {
        return (
            <div className='button-set'>
                <div className='button-set__button  button-set__button--close'>
                </div>
                <div className='button-set__button  button-set__button--minimize'>
                </div>
                <div className='button-set__button  button-set__button--maximize'>
                </div>
            </div>
        );
    }
}


export default ButtonSet;
