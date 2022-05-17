import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import ActivityList from './ActivityList';
import UserInput from './UserInput';

class ListDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <span>
                <p onClick={() => { this.props.listClick() }}>

                </p>
            </span>
        )
    }
};

export default ListDisplay;