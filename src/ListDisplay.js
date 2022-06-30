import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import ActivityList from './ActivityList';
import UserInput from './UserInput';

class ListDisplay extends React.Component {
    render() {

        return (

            <span>
                <p>
                    <h1 onClick={this.props.listClick}>{this.props.category}</h1>
                    <h2>{this.props.selection}</h2>
                </p>
            </span>
        )
    }
};

export default ListDisplay;

// props are how we pass info from parent to child components
//

// function functionNameHere(parameter) {
// 	function body, code to run
// 	variable = blahblahblah

// 	return variable;
// }


// parameter = variable that function will have access to when invoked

// take value calculated in body, set as a variable = RETURN AT END OF FUNCTION