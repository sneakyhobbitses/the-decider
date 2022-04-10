import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import ActivityList from './ActivityList';

class UserInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className='UserInput'>
                <span>
                    <p><input type="text" placeholder="enter a new option" onClick={() => {this.props.buttonClicker()}}></input> <button>ok</button></p>
                </span>
            </div>
        )
    }
};

export default UserInput;