import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import ActivityList from './ActivityList';

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    render() {

        return (
            <div className='UserInput'>
                <span>
                    <p>
                        <input
                            type="text"
                            placeholder="enter a new option"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <button onClick={() => { this.props.buttonClicker(this.state.value) }}>ok</button>
                    </p>
                </span>
            </div>
        )
    }
};

export default UserInput;